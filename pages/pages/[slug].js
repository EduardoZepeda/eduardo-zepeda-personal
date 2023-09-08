import fs from 'fs'
import matter from 'gray-matter'
import styles from '@styles/blog.module.css'
import Metadata from '@components/Post/Metadata'
import slugify from '@utils/slugify'
import Head from 'next/head'
import MarkdownCodeHiglight from '@components/MarkdownCodeHiglight'
import getPages from '@utils/getPages'

export async function getStaticPaths () {
  try {
    const pages = getPages()
    const paths = pages.map(page => {
      return {
        params: {
          // Pages' names are generated using the translated title from the frontmatter
          slug: page?.params?.slug
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
    const pages = getPages()
    const foundFileIndex = pages.findIndex(pages => pages.params.slug === slug)
    const foundFile = pages[foundFileIndex]
    // Since this is an english translation of the original blog, read only those files ending in .en.md
    const fileName = fs.readFileSync(`public/blog/content/pages/${foundFile.params.directory}/index.en.md`, 'utf-8')
    const { data: frontmatter, content } = matter(fileName)

    return {
      props: {
        frontmatter,
        content,
        directory: foundFile.params.directory,
      }
    }
  } catch (error) {
    console.error(error)
    return {
      notFound: true
    }
  }
}

function Pages ({ frontmatter, content, directory }) {
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
        <MarkdownCodeHiglight content={content} directory={directory} post={false}/>
      </article>
    </>
  )
};

export default Pages
