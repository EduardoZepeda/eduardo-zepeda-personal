import React from 'react'
import styles from '@styles/Home.module.css'

const AboutMe = (): JSX.Element => {
  return (
    <section id='about'>
      <h2>About me</h2>
      <div className={styles.aboutMe}>
        <p>Web developer with experience in ecommerce sites. I'll be solving your web app's (or your company's) necessities with awesome and mature technologies like Django, DRF, React, NextJS, Bootstrap, TailwindCSS, Go, Hugo and other related
          libraries/frameworks.
        </p>
        <p>I'm an experienced GNU/Linux user and have been using GNU/Linux environments for more than a decade, whether it be for personal or commercial projects.</p>
        <p>I'm a big fan of Digital Ocean and Azure, Microsoft <a href='https://www.credly.com/badges/17608a52-2cb7-4268-a907-613459559911/public_url' rel='noreferrer noopener' target='_blank' aria-label='Coffee bytes website'>AZ-900 certified.</a></p>
        <p>I believe in giving back to the open source community, therefore I frequently write tutorials and posts about tech on my web development blog, feel free to read them on <a href='https://coffeebytes.dev' rel='noreferrer noopener' target='_blank' aria-label='Coffee bytes website'>Coffee bytes.</a></p>
      </div>
    </section>
  )
}

export default AboutMe
