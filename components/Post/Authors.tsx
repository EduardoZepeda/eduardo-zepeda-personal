import React, { useId } from 'react'
import styles from '@styles/blog.module.css'
import Link from 'next/link'

const Authors = ({ authors }: AuthorsProps): JSX.Element => {
    const id = useId()
    return (
        <div className={styles.authors}>
            By {authors && authors.map((author, index) => <Link key={`${id}-${index}`} href={`/authors/${author.replaceAll(' ', '')}`}>{author}</Link>)}
        </div>
    )
}

export default Authors
