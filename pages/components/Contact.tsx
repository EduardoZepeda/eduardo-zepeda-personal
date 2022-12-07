import { useContext } from 'react'
import { openSidebarContext } from '@lib/OpenSidebarContext'

import styles from '@styles/Home.module.css'

const Contact = (): JSX.Element => {
  const { socialMediaLinks } = useContext(openSidebarContext)

  return (
    <section id='contact'>
      <div className={styles.contact}>
        <h2>Contact</h2>
        <p>Let's keep in touch. My inbox is open for you and I'm always listening to new offers. I'd be delighted to hear about you.
        </p>
      </div>
      <a href={`mailto:${socialMediaLinks.email}`} aria-label='Email contact'>
        <button className={styles.btn}>Say hi to Eduardo</button>
      </a>
    </section>
  )
}

export default Contact
