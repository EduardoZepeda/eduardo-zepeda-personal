import fs from 'fs'
import matter from 'gray-matter'
import styles from '@styles/blog.module.css'
import Metadata from '@components/Post/Metadata'
import slugify from '@utils/slugify'
import Head from 'next/head'
import Categories from '@components/Post/Categories'
import NextAndPrevious from '@components/NextAndPrevious'
import MarkdownCodeHiglight from '@components/MarkdownCodeHiglight'
import getPosts from '@utils/getPosts'
import getSimilarPosts from '@utils/getSimilarPosts'
import SimilarPosts from '@components/Post/SimilarPosts'

export async function getStaticPaths () {
  try {
    const posts = getPosts()
    const paths = posts.map(post => {
      return {
        params: {
          // Pages' names are generated using the translated title from the frontmatter
          slug: post?.params?.slug
        }
      }
    })

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

export async function getStaticProps ({ params: { slug } }) {
  try {
    const posts = getPosts()
    const foundFileIndex = posts.findIndex(post => post.params.slug === slug)
    const foundFile = posts[foundFileIndex]
    const fileName = fs.readFileSync(`public/blog/content/posts/${foundFile.params.directory}/index.en.md`, 'utf-8')
    const { data: frontmatter, content } = matter(fileName)
    const similarPosts = getSimilarPosts(frontmatter, content.slice(0, 120)).slice(1, 7)

    return {
      props: {
        similarPosts,
        frontmatter,
        content,
        directory: foundFile.params.directory,
        nextPost: foundFileIndex < posts.length - 1 ? slugify('/' + posts[foundFileIndex + 1].params.frontmatter.title) : null,
        previousPost: foundFileIndex > 0 ? slugify('/' + posts[foundFileIndex - 1].params.frontmatter.title) : null
      }
    }
  } catch (error) {
    console.error(error)
    return {
      notFound: true
    }
  }
}

function Post ({ frontmatter, content, directory, nextPost, previousPost, similarPosts }) {
  frontmatter.numWords = Math.floor(content.split(' ').length)
  const authors = frontmatter?.authors ? frontmatter?.authors.join(', ') : 'Anonymous'
  const postTitle = `${frontmatter?.title} | ${authors}`
  return (
    <>
      <Head>
        <title>{postTitle}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:locale' content='en_US' />
        <meta name='description' content={frontmatter?.description ? frontmatter?.description : content.slice(0, 120)} />
        <meta name='author' content={authors} />
        <meta name='og:description' content={frontmatter?.description ? frontmatter?.description : content.slice(0, 120)} />
        <meta property='og:type' content='blog' />
        <meta property='og:url' content={`/blog/${slugify(frontmatter?.title)}`} />
        <meta property='og:title' content={frontmatter?.title} />
        <meta property='twitter:title' content={frontmatter?.title} />
        <meta property='twitter:description' content={frontmatter?.description ? frontmatter?.description : content.slice(0, 120)} />
      </Head>
      <article className={styles.container}>
        <h1>{frontmatter.title}</h1>
        <Metadata metadata={frontmatter} />
        <Categories categories={frontmatter.categories} />
        <MarkdownCodeHiglight content={content} directory={directory} />
        <NextAndPrevious previous={previousPost} next={nextPost} />
      </article>
      <section className={styles.relatedContent}>
        <SimilarPosts posts={similarPosts} />
      </section>
    </>
  )
};

export default Post
