import styles from '@styles/Home.module.css'

const Introduction = (): JSX.Element => {
  return (
    <section id='introduction'>
      <div className={styles.introduction}>
        <p>Hey there, my name is</p>
        <h1 className={styles.name}>Eduardo Zepeda</h1>
        <p className={styles.introductionHeader}>Turning ideas and coffee into code</p>
        <h2 className={styles.introduction}>Web developer who enjoys programming in Python, Javascript/Typescript and Go, on GNU/Linux environments.</h2>
      </div>
      <a href='#contact' aria-label='Email contact'>
        <button className={styles.btn}>Contact Eduardo</button>
      </a>
    </section>
  )
}

export default Introduction
