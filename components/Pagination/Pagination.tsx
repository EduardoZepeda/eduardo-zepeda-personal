import React from 'react'
import styles from '@styles/blog.module.css'
import Link from 'next/link'

function numberInRange (num: number, low: number, high: number): boolean {
  if (num > low && num < high) {
    return true
  }

  return false
}

const Pagination = ({ currentPage, lastPage }: PaginationProps): JSX.Element => {
  const paths = [...Array(lastPage).keys()].map(page => page + 1).filter(page => (page === 1 || page === lastPage || numberInRange(page, currentPage - 3, currentPage + 3)))

  return (
    <section>
      <ol className={styles.pagination}>
        {paths.map((page, index) => <li key={`${page}-${index}`} className={styles.paginationItem}><Link className={`${styles.paginationLink} ${currentPage === page ? styles.paginationActive : ''}`} href={`/blog/page/${page}`}>{page}</Link></li>)}
      </ol>
    </section>
  )
}

export default Pagination
