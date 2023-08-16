import React from 'react'
import styles from '@styles/Home.module.css'
import Link from 'next/link'

const AboutMe = (): JSX.Element => {
  return (
    <section id='about'>
      <h2>About me</h2>
      <div className={styles.aboutMe}>
        <p>Web developer with experience in ecommerce sites. I'll be solving your web apps' necessities with awesome, mature and stable technologies such as Django, DRF, React, NextJS, Bootstrap, TailwindCSS, Go, Hugo and others.
        </p>
        <p>Experienced GNU/Linux user and have been using GNU/Linux environments for more than a decade, whether it be for personal or commercial projects.</p>
        <p>I'm a big fan of Digital Ocean and Azure, Microsoft <a href='https://www.credly.com/badges/17608a52-2cb7-4268-a907-613459559911/public_url' rel='noreferrer noopener' target='_blank' aria-label='Coffee bytes website'>AZ-900 certified.</a></p>
        <p>Author at <a href='https://coffeebytes.dev' rel='noreferrer noopener' target='_blank' aria-label='Coffee bytes website'>Coffee bytes, </a>+100 entries about web developing, +500 devs subscribed. Read the entries in english the <Link href="/blog/page/1">blog section.</Link></p>
      </div>
    </section>
  )
}

export default AboutMe
