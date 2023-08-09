import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@styles/blog.module.css'
import Metadata from '@components/Post/Metadata'
import Pagination from '@components/Pagination/Pagination'
import generatePagination from '@utils/generatePagination'
import slugify from '@utils/slugify'

const ITEMS_PER_PAGE = 9

export async function getStaticProps ({ params: { page } }) {
  const currentPage = parseInt(page)
  try {
    const files = fs.readdirSync('public/blog/content/posts')
    const lastPage = Math.ceil(files.length / ITEMS_PER_PAGE)
    const firstPage = 1
    if (currentPage > lastPage || currentPage < firstPage) {
      return {
        notFound: true
      }
    }
    const rawPosts = files.map((directory) => {
      const readFile = fs.readFileSync(`public/blog/content/posts/${directory}/index.en.md`, 'utf-8')
      const { data: frontmatter } = matter(readFile)
      return {
        params: {
          slug: slugify(frontmatter?.title),
          frontmatter,
          directory
        }
      }
    })
    // sort posts by date
      .sort((a, b) => new Date(b.params.frontmatter.date) - new Date(a.params.frontmatter.date))
      .filter(post => process.env.NODE_ENV === 'production' ? !post.params.frontmatter.draft : true)

    const firstItem = (currentPage - 1) * ITEMS_PER_PAGE
    // If the calculated last item is greater than the maximum number of items, return the last item instead
    const lastItem = (currentPage) * ITEMS_PER_PAGE > rawPosts.length ? rawPosts.length : (currentPage) * ITEMS_PER_PAGE
    const paginationData = generatePagination(currentPage, lastPage)
    const posts = {
      data: rawPosts.slice(firstItem, lastItem),
      ...paginationData
    }
    return {
      props: { posts }
    }
  } catch (error) {
    console.error(error)

    return {
      props: {}
    }
  }
}

export async function getStaticPaths () {
  try {
    const files = fs.readdirSync('public/blog/content/posts')
    const lastPage = Math.ceil(files.length / ITEMS_PER_PAGE)
    const paths = [...Array(lastPage).keys()]
      .map(page => page + 1)
      .map(path => ({ params: { page: (path).toString() } }))
    return {
      paths,
      fallback: 'blocking'
    }
  } catch (error) {
    console.error(error)

    return {
      paths: [],
      fallback: false
    }
  }
}

function Blog ({ posts: { data, page, lastPage } }) {
  return (
    <>
      <div className={styles.postsContainer}>
        {
        data
        // sort posts by date

          .map(({ params: { slug, frontmatter, directory } }) => {
            return (
              <div key={slug} className={styles.postItem}>
                <div className={styles.imageContainer}>
                  <Link href={`/blog/${slug}`}>
                    <Image
                      loading='lazy'
                      alt={frontmatter.title}
                      // absolute url since url depends on pagination
                      src={`/blog/content/posts/${directory}/${frontmatter.coverImage}`}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </Link>
                </div>
                <h2 className={styles.postTitle}>{frontmatter.title}</h2>
                <Metadata metadata={frontmatter} />
              </div>
            )
          })
      }

      </div>
      <Pagination currentPage={page} lastPage={lastPage} />
    </>
  )
};

export default Blog
