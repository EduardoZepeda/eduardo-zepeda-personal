
import styles from '@styles/Home.module.css'
import Link from 'next/link'

const AboutMe = (): JSX.Element => {
  return (
    <section id='about'>
      <h2>About me</h2>
      <div className={styles.aboutMe}>
        <p>I value <strong>mature and battle-tested</strong> technologies over brand new frameworks. I'm using: Django, DRF, React, NextJS, Express, Go, Hugo, Postgres, etc.
        </p>
        <p>I've been using GNU/Linux for <strong>more than 10 years.</strong></p>
        <p>I'm a big fan of Digital Ocean and Azure, Microsoft <a href='https://www.credly.com/badges/17608a52-2cb7-4268-a907-613459559911/public_url' rel='noreferrer noopener nofollow' target='_blank' aria-label='AZ-900 certification link'>AZ-900 certified.</a></p>
        <p>Author at <Link href='https://coffeebytes.dev/en/' rel='noreferrer noopener' target='_blank' aria-label='Coffee bytes website'>Coffee bytes, </Link>+100 entries about web developing, +500 devs subscribed.</p>
      </div>
    </section>
  )
}

export default AboutMe
