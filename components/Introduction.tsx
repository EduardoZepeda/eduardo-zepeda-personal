import styles from '@styles/Home.module.css'

const Introduction = (): JSX.Element => {
  return (
    <section id='introduction'>
      <div className={styles.introduction}>
        <p>Hey there, my name is</p>
        <h1 className={styles.name}>Eduardo Zepeda</h1>
        <p className={styles.introductionHeader}>Turning ideas and coffee into &lt;code&gt;</p>
        <h2 className={styles.introduction}>Web Developer skilled in Python, TypeScript, Go, GNU/Linux</h2>
      </div>
      <div className={styles.mY}>
        <a className={styles.btn} href='#contact' aria-label='Contact Eduardo'>
          Contact Eduardo
        </a>
      </div>
    </section>
  )
}

export default Introduction
