import fs from 'fs'
import matter from 'gray-matter'
// import md from 'markdown-it'
import styles from '@styles/blog.module.css'
import Metadata from '@components/Post/Metadata'
import slugify from '@utils/slugify'

const md = require('markdown-it')()
  .use(require('markdown-it-highlightjs'), { auto: true, inline: true })

export async function getStaticPaths () {
  try {
    const files = fs.readdirSync('public/blog/content/posts')
    const paths = files.map((directory) => {
        const readFile = fs.readFileSync(`public/blog/content/posts/${directory}/index.en.md`, 'utf-8')
        const { data: frontmatter } = matter(readFile)
        return {
            params: {
                // Pages' names are generated using the translated title from the frontmatter
                slug: slugify(frontmatter?.title),
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

export async function getStaticProps ({ params:{ slug } }) {
  // TODO Unfortunately this could be a bottleneck, but as today nextjs doesn't have a proper way to pass an extra parameter to
  // getStaticProps other than the required parameter, and caching would add up an extra layer of complexity, for small blogs it's ok
  try {
    // Read all the  (for every file, here is the bottlenexk), find the one with the same slug as the one from the params
    const files = fs.readdirSync('public/blog/content/posts')
    const foundFile = files.map((directory) => {
      const readFile = fs.readFileSync(`public/blog/content/posts/${directory}/index.en.md`, 'utf-8')
      const { data: frontmatter } = matter(readFile)
      return {
          params: {
              slug: slugify(frontmatter?.title),
              directory,
          }
      }
  }).find(post=>post.params.slug===slug)
    const fileName = fs.readFileSync(`public/blog/content/posts/${foundFile.params.directory}/index.en.md`, 'utf-8')
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
