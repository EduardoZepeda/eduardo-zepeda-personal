import styles from '@styles/Home.module.css'
import { introduction } from 'siteData'

const Introduction = (): JSX.Element => {
  const { greeting, name, introductionText, introductionHeader, contact } = introduction
  return (
    <section id='introduction'>
      <div className={styles.introduction}>
        <p>{greeting}</p>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.introductionHeader}>{introductionHeader}</p>
        <h2 className={styles.introduction}>{introductionText}</h2>
      </div>
      <div className={styles.mY}>
        <a className={styles.btn} href='#contact' aria-label={`${contact}`}>
          {contact}
        </a>
      </div>
    </section>
  )
}

export default Introduction
