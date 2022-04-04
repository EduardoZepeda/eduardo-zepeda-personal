import React from 'react'
import styles from '../../styles/Home.module.css'

const AboutMe = (): JSX.Element => {
  return (
    <section id='about'>
      <h2>About me</h2>
      <div className={styles.aboutMe}>
        <p>{`Web developer with experience in ecommerce. Skilled in Django, DRF, React, NextJS, Bootstrap, TailwindCSS and other related
          libraries. I can configure a server from scracth. I've been using GNU/Linux for most than a decade as my personal and working OS. My favorite distribution is Debian.`}
        </p>
      </div>
    </section>
  )
}

export default AboutMe
