import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import styles from '@styles/blog.module.css'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// IMPORTANT use cjs instead of esm to prevent unexpected token error
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'
import MermaidLazy from '@components/MermaidLazy'
import Image from 'next/image'

const MarkdownCodeHiglight = ({ content, directory }: CodeHighlightProps): JSX.Element => {

    return (
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
                    props?.src ? <Image className={styles.postImage}
                        src={props?.src?.replace('images/', `/blog/content/posts/${directory}/images/`)}
                        loading='lazy'
                        alt={props?.alt || ''}
                        title={props.title} /> : null
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
    )
}

export default MarkdownCodeHiglight