import React from 'react'
import styles from '@styles/blog.module.css'
import Link from 'next/link'

const NextAndPrevious = ({ previous, next }: NextAndPreviousProps): JSX.Element => {
  return (
    <div className={styles.nextAndPrevious}>
      {previous !== null && <div><Link rel='next' className={`${styles.nextPreviousButton} ${styles.nextButton}`} href={previous}>Next</Link></div>}
      {next !== null && <div><Link rel='prev' className={`${styles.nextPreviousButton} ${styles.previousButton}`} href={next}>Previous</Link></div>}
    </div>
  )
}

export default NextAndPrevious
