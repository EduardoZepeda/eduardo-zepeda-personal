import React from 'react'
import PostDate from '@components/Post/PostDate'
import ReadingTime from '@components/Post/ReadingTime'
import Authors from '@components/Post/Authors'
import styles from '@styles/blog.module.css'

const Metadata = ({ metadata: { date, numWords, authors } }: MetadataProps): JSX.Element => {
  return (
    <div className={styles.metadataContainer}>
      <div className={styles.authorAndDate}>
        <Authors authors={authors} />
        {`•`}
        <PostDate date={date} />
      </div>
      {numWords && !isNaN(numWords) && <ReadingTime numWords={numWords} />}
    </div>
  )
}

export default Metadata
