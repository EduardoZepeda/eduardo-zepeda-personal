import React from 'react'
import styles from '../../styles/Home.module.css'

const AboutMe = (): JSX.Element => {
  return (
    <section id='about'>
      <h2>About me</h2>
      <div className={styles.aboutMe}>
        <p>About me</p>
      </div>
    </section>
  )
}

export default AboutMe
