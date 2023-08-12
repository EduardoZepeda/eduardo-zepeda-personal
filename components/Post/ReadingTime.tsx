import React from 'react'
import styles from '@styles/blog.module.css'

const ReadingTime = ({ numWords }: ReadingTimeProps): JSX.Element => {
  const wordsPerMinute = 250
  const minutes = Math.floor(numWords / wordsPerMinute)
  return (
    <div className={styles.readingTime}>
      {`${minutes} ${minutes > 1 ? 'minutes ' : 'minute '} reading`}
    </div>
  )
}
export default ReadingTime
