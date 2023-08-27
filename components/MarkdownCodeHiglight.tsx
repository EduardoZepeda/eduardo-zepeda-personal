import React, { useState, useEffect } from "react"
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import styles from '@styles/blog.module.css'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// IMPORTANT use cjs instead of esm to prevent unexpected token error
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import MermaidLazy from '@components/MermaidLazy'
import FsLightbox from "fslightbox-react"

const MarkdownCodeHiglight = ({ content, directory }: CodeHighlightProps): JSX.Element => {
    const [toggler, setToggler] = useState<boolean>(false)
    const regexp = /!\[.*?\]\(((.+?\.(?:png|jpg|gif|webp))[^)]*)\)/g
    const imageGallery = [...content.matchAll(regexp)].map(image => image[2]).map(imgSrc => imgSrc.replace('images/', `/blog/content/posts/${directory}/images/`))
    return (
        <>
            <ReactMarkdown components={{
                a: ({ node, ...props }) => {
                    let c
                    try {
                        c = props.children[0]
                    } catch {
                        return <></>
                    }
                    return (
                        <Link href={props.href || ''}>
                            {c}
                        </Link>
                    );
                },
                img: ({ node, ...props }) => {
                    return (
                        props?.src ? <img onClick={() => setToggler(!toggler)} className={styles.postImage}
                            src={props?.src?.replace('images/', `/blog/content/posts/${directory}/images/`)}
                            loading='lazy'
                            alt={props?.title || ''}
                            aria-label={props?.title}
                            title={props?.title} /> : null
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
            }} children={content} remarkPlugins={[remarkGfm]} />
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