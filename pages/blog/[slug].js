import fs from 'fs'
import matter from 'gray-matter'
// import md from 'markdown-it'
import styles from '@styles/blog.module.css'
import Metadata from '@components/Post/Metadata'
import slugify from '@utils/slugify'
import Head from 'next/head'

const md = require('markdown-it')()
  .use(require('markdown-it-highlightjs'), { auto: true, inline: true })


  // Add rules to markdown renderer
  md.renderer.rules.image = function (tokens, idx, options, env, slf) {
    const token = tokens[idx]
    token.attrs[token.attrIndex('alt')][1] = slf.renderInlineAsText(token.children, options, env)
    // make loading lazy the default behaviour
    token.attrSet('loading', 'lazy')
    // add custom class to images
    token.attrSet('class', styles.postImage)
    return slf.renderToken(tokens, idx, options)
  }

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
        content,
        directory: foundFile.params.directory
      }
    }
  } catch (error) {
    console.error(error)
    return {
      notFound: true
    }
  }
};

function Post ({ frontmatter, content, directory }) {
  frontmatter.numWords = Math.floor(content.split(' ').length)
  const authors = frontmatter?.authors? frontmatter?.authors.join(", "): "Anonymous"

  return (
    <>
      <Head>
        <title>{`${frontmatter?.title} | ${authors}`} </title>
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:locale' content='en_US' />
        <meta name='description' content={frontmatter?.description?frontmatter?.description: content.slice(0,120) } />
        <meta name='author' content={authors} />
        <meta name='og:description' content={frontmatter?.description?frontmatter?.description: content.slice(0,120)} />
        <meta property='og:type' content='blog' />
        <meta property='og:url' content={`/blog/${slugify(frontmatter?.title)}`} />
        <meta property='og:title' content={frontmatter?.title} />
        <meta property='twitter:title' content={frontmatter?.title} />
        <meta property='twitter:description' content={frontmatter?.description?frontmatter?.description: content.slice(0,120)} />
      </Head>
      <div className={styles.container}>
        <h1>{frontmatter.title}</h1>
        <Metadata metadata={frontmatter} />
        <div dangerouslySetInnerHTML={{ __html: md.render(content.replaceAll("(images/", `(/blog/content/posts/${directory}/images/`)) }} />
      </div>
    </>
  )
};

export default Post
