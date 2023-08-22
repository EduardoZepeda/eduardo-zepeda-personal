import React, { useId } from 'react'
import styles from '@styles/blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

const SimilarPosts = ({ posts }: SimilarPostProps): JSX.Element => {
    const id = useId()
    return (
        <section className={styles.relatedContent}>
            <h2>Related content</h2>
            <ul>
                {posts.map((post, index) => <li className={styles.relatedPost} key={`${id}-${index}`}>
                    <div>
                        <Link href={`/blog/${post.slug}`} aria-label={`${post.title} related content`}>
                            <Image className={styles.relatedImg} width={96} height={96} src={`/blog/content/posts/${post.directory}/${post.image}`} alt={`${post.title} cover image`} />
                        </Link>
                    </div>
                    <div>
                        <Link href={`/blog/${post.slug}`} aria-label={`${post.title} related content`}>
                            <h3>{post.title}</h3>
                            <div className={styles.relatedSummary}>{post.description}</div>
                        </Link>
                    </div>
                </li>)}
            </ul>
        </section>
    )
}
export default SimilarPosts
