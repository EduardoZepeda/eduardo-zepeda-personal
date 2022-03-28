import styles from '../../styles/Home.module.css'

const Introduction = (): JSX.Element => {
  return (
    <section id='introduction'>
      <div className={styles.introduction}>
        <p>Hey there, my name is</p>
        <h1>My name</h1>
        <h2 className={styles.introductionHeader}>Some description</h2>
        <p className={styles.intro}>Small summary</p>
      </div>
    </section>
  )
}

export default Introduction
