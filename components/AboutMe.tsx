
import styles from '@styles/Home.module.css'
import { aboutMe } from 'siteData'

const AboutMe = (): JSX.Element => {
  return (
    <section id='about'>
      <h2>About me</h2>
      <div className={styles.aboutMe} dangerouslySetInnerHTML={{ __html: aboutMe.description }}>
      </div>
    </section>
  )
}

export default AboutMe
