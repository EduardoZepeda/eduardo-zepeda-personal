import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import styles from '@styles/blog.module.css'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// IMPORTANT use cjs instead of esm to prevent unexpected token error
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import MermaidLazy from '@components/MermaidLazy'
import FsLightbox from 'fslightbox-react'
import { generateImagePostUrl, generateImagePageUrl } from '@utils/generateImageUrl'
import generateImageGallery from '@utils/generateImageGallery'
import remarkUnwrapImages from "remark-unwrap-images";

const MarkdownCodeHiglight = ({ content, directory, post }: CodeHighlightProps): JSX.Element => {
  const [toggler, setToggler] = useState<boolean>(false)
  const generateRoute = post ? generateImagePostUrl : generateImagePageUrl
  const imageGallery = generateImageGallery(content, directory, generateRoute)

  return (
    <>
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => {
            let c
            try {
              c = props.children[0]
            } catch {
              return <></>
            }
            return (
              <Link href={props.href ?? ''}>
                {c}
              </Link>
            )
          },
          img: ({ node, ...props }) => {
            return (
              props?.src !== null
                ?
                <figure>
                  <img
                    onClick={() => setToggler(!toggler)} className={styles.postImage}
                    src={post ? generateImagePostUrl(props?.src, directory) : generateImagePageUrl(props?.src, directory)}
                    loading='lazy'
                    alt={props?.title ?? ''}
                    aria-label={props?.title}
                    title={props?.title}
                  />
                  {props?.title !== undefined ? <figcaption>{props?.title}</figcaption> : null}
                </figure>
                : null
            )
          },
          code({ node, inline, className, children, ...props }) {
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
              <MermaidLazy {...props} className={className}>
                {children}
              </MermaidLazy>
            )
          }
          // eslint-disable-next-line
        }} children={content} remarkPlugins={[remarkGfm, remarkUnwrapImages]} />
      <FsLightbox
        toggler={toggler}
        sources={imageGallery}
        // Key guarantees that the re-render of the lightbox when page changes.
        key={directory}
      />
    </>
  )
}

export default MarkdownCodeHiglight
