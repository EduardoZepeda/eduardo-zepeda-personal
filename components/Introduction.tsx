import { useState, useEffect } from 'react'
import styles from '@styles/Home.module.css'
import { introduction } from 'siteData'

const useTypewriter = (text: string, speed: number = 100) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return displayedText
}

const Introduction = (): JSX.Element => {
  const { greeting, name, introductionText, introductionHeader, contact } = introduction
  const typedName = useTypewriter(name, 150)

  return (
    <section id='introduction'>
      <div className={styles.introduction}>
        <p>{greeting}</p>
        <h1 className={`${styles.name} ${styles.typewriter}`}>
          {typedName}
          <span className={styles.cursor}>|</span>
        </h1>
        <p className={styles.introductionHeader}>
          {introductionHeader}
        </p>
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
