import React from 'react'
import styles from '@styles/blog.module.css'

const PostDate = ({ date }: PostDateProps): JSX.Element => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  const pub = new Date(date)
  const formatedDate = pub.toLocaleDateString('en-US', options)
  return (
    <div className={styles.postDate}>
      {formatedDate}
    </div>
  )
}
export default PostDate
