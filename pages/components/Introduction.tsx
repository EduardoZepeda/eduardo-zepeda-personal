import styles from '../../styles/Home.module.css'

const Introduction = (): JSX.Element => {
  return (
    <section id='introduction'>
      <div className={styles.introduction}>
        <p>Hey there, my name is</p>
        <h1 className={styles.name}>Eduardo Zepeda</h1>
        <p className={styles.introductionHeader}>Turning ideas and coffee into code</p>
        <h2 className={styles.introduction}>Web developer who enjoys programming in Python and Javascript/Typescript in GNU/Linux environments.</h2>
      </div>
    </section>
  )
}

export default Introduction
