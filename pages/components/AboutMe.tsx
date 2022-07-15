import React from 'react'
import styles from '../../styles/Home.module.css'

const AboutMe = (): JSX.Element => {
  return (
    <section id='about'>
      <h2>About me</h2>
      <div className={styles.aboutMe}>
        <p>Web developer with experience in ecommerce. Skilled in Django, DRF, React, NextJS, Bootstrap, TailwindCSS, Go, Hugo and other related
          libraries/frameworks.
        </p>
        <p>Experienced GNU/Linux user and enthusiast for more than a decade. My favorite distribution is Debian, for personal and commercial projects.</p>
        <p>I frequently write tutorials and posts about tech in my web development blog, feel free to read them at <a href='https://coffeebytes.dev' rel='noreferrer noopener' target='_blank' aria-label='Coffee bytes website'>Coffee bytes</a></p>
      </div>
    </section>
  )
}

export default AboutMe
