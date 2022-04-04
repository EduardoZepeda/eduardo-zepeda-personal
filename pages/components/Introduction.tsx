import styles from '../../styles/Home.module.css'

const Introduction = (): JSX.Element => {
  return (
    <section id='introduction'>
      <div className={styles.introduction}>
        <p>Hey there, my name is</p>
        <h1>Eduardo Zepeda</h1>
        <h2 className={styles.introductionHeader}>Building web applications</h2>
        <p className={styles.intro}>Web developer who enjoys to create web applications using Python and Javascript</p>
      </div>
    </section>
  )
}

export default Introduction
