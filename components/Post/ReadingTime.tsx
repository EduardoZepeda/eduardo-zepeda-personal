import React from 'react'
import styles from '@styles/blog.module.css'

const ReadingTime = ({ numWords }: ReadingTimeProps): JSX.Element => {
  const wordsPerMinute = 250
  return (
    <div className={styles.readingTime}>
      {Math.floor(numWords / wordsPerMinute)} minutes reading
    </div>
  )
}
export default ReadingTime
