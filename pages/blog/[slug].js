import { useEffect } from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import styles from '@styles/blog.module.css'
import Metadata from '@components/Post/Metadata'
import slugify from '@utils/slugify'
import Head from 'next/head'
import mermaid from 'mermaid'
import Categories from '@components/Post/Categories'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import NextAndPrevious from '@components/NextAndPrevious'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
// IMPORTANT use cjs instead of esm to prevent unexpected token error
//
import {vscDarkPlus} from 'react-syntax-highlighter/dist/cjs/styles/prism'


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
          frontmatter
        }
      }
    })    
    .filter(post => process.env.NODE_ENV === 'production' ? !post?.params?.frontmatter?.draft : true)
    .map(post=>{
      return {
        params: {
          // Pages' names are generated using the translated title from the frontmatter
          slug: post?.params?.slug,
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
  // TODO Unfortunately this could be a bottleneck, but as today nextjs doesn't have a proper way to pass an extra parameter to
  // getStaticProps other than the required parameter, and caching would add up an extra layer of complexity, for small blogs it's ok
  try {
    // Read all the  (for every file, here is the bottleneck), find the one with the same slug as the one from the params
    const files = fs.readdirSync('public/blog/content/posts')
    const posts = files.map((directory) => {
      const readFile = fs.readFileSync(`public/blog/content/posts/${directory}/index.en.md`, 'utf-8')
      const { data: frontmatter } = matter(readFile)
      return {
        params: {
          slug: slugify(frontmatter?.title),
          directory,
          frontmatter
        }
      }
    })
    .filter(post => process.env.NODE_ENV === 'production' ? !post?.params?.frontmatter?.draft : true)
    .sort((a, b) => new Date(b.params.frontmatter.date) - new Date(a.params.frontmatter.date))
    const foundFileIndex = posts.findIndex(post => post.params.slug === slug)
    const foundFile = posts[foundFileIndex]
    const fileName = fs.readFileSync(`public/blog/content/posts/${foundFile.params.directory}/index.en.md`, 'utf-8')
    const { data: frontmatter, content } = matter(fileName)

    return {
      props: {
        frontmatter,
        content,
        directory: foundFile.params.directory,
        nextPost: foundFileIndex<posts.length-1 ? slugify("/"+posts[foundFileIndex+1].params.frontmatter.title):null,
        previousPost: foundFileIndex>0 ? slugify("/"+posts[foundFileIndex-1].params.frontmatter.title): null
      }
    }
  } catch (error) {
      console.error(error)
    return {
      notFound: true
    }
  }
}

function Post ({ frontmatter, content, directory, nextPost, previousPost }) {
  useEffect(()=>{
    mermaid.initialize({ startOnLoad: false, theme: 'dark' });
    mermaid.run({
      querySelector: '.language-mermaid',
  })
  })

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
      <div className={styles.container}>
        <h1>{frontmatter.title}</h1>
        <Metadata metadata={frontmatter} />
        <Categories categories={frontmatter.categories} />
        <ReactMarkdown components={{
                a: ({ node, ...props }) => {
                  let c
                  try {
                     c = props.children[0]
                  } catch {
                    return <></>
                  }
                  return (
                    <Link href={props.href}>
                        {c}
                    </Link>
                  );
                },
                img: ({ node, ...props }) => {
                  return (
                    <img className={styles.postImage} src={props.src.replace('images/', `/blog/content/posts/${directory}/images/`)} loading='lazy' alt={props.alt} title={props.title}/>
                  )
                },
                code({node, inline, className, children, ...props}) {
                  // Exclude mermaid codeblocks from code parsing
                  const match = /language-(?!mermaid)(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      {...props}
                      // eslint-disable-next-line
                      children={String(children).replace(/\n$/, '')}
                      style={vscDarkPlus}
                      language={match[1]}
                    />
                  ) : (
                    <code {...props} className={className}>
                      {children}
                    </code>
                  )
                }
                // eslint-disable-next-line
              }} children={content} remarkPlugins={[remarkGfm]} />
              <NextAndPrevious previous={previousPost} next={nextPost}/>
      </div>
    </>
  )
};

export default Post
