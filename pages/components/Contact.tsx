import { useContext } from 'react'
import { openSidebarContext } from '../../lib/OpenSidebarContext'

import styles from '../../styles/Home.module.css'

const Contact = (): JSX.Element => {
  const { socialMediaLinks } = useContext(openSidebarContext)

  return (
    <section id='contact'>
      <div>
        <h2>Contact</h2>
        <p>Contact</p>
      </div>
      <a href={`mailto:${socialMediaLinks.email}`}>
        <button className={styles.btn}>Contact</button>
      </a>
    </section>
  )
}

export default Contact
