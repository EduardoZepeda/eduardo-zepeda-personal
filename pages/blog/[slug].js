import fs from 'fs'
import matter from 'gray-matter'
// import md from 'markdown-it'
import styles from '@styles/blog.module.css'
import Metadata from '@components/Post/Metadata'

const md = require('markdown-it')()
  .use(require('markdown-it-highlightjs'), { auto: true, inline: true })

export async function getStaticPaths () {
  try {
    const files = fs.readdirSync('public/posts')

    const paths = files.map((directory) => ({
      params: {
        slug: directory
      }
    }))

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
};

export async function getStaticProps ({ params: { slug } }) {
  try {
    const fileName = fs.readFileSync(`public/posts/${slug}/index.en.md`, 'utf-8')
    const { data: frontmatter, content } = matter(fileName)

    return {
      props: {
        frontmatter,
        content
      }
    }
  } catch (error) {
    console.error(error)
    return {
      notFound: true
    }
  }
};

function Post ({ frontmatter, content }) {
  frontmatter.numWords = Math.floor(content.split(' ').length)
  return (
    <div className={styles.container}>
      <h1>{frontmatter.title}</h1>
      <Metadata metadata={frontmatter} />
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </div>
  )
};

export default Post
