import styles from '../../styles/Home.module.css'

const Introduction = (): JSX.Element => {
  return (
    <section id='introduction'>
      <div className={styles.introduction}>
        <p>Hey there, my name is</p>
        <h1>Eduardo Zepeda</h1>
        <h2 className={styles.introductionHeader}>Py + Js + GNU/Linux</h2>
        <p className={styles.intro}>Web developer who enjoys coding in Python and Javascript in GNU/Linux environments.</p>
      </div>
    </section>
  )
}

export default Introduction
