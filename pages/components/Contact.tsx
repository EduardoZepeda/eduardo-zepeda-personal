import { useContext } from 'react'
import { openSidebarContext } from '../../lib/OpenSidebarContext'

import styles from '../../styles/Home.module.css'

const Contact = (): JSX.Element => {
  const { socialMediaLinks } = useContext(openSidebarContext)

  return (
    <section id='contact'>
      <div className={styles.contact}>
        <h2>Contact</h2>
        <p>My inbox is always open and I'm always listening to new offers and challenges. I'd be happy to hear from you. Althought sometimes it's impossible, I'll try to respond to you in a day or two.
        </p>
      </div>
      <a href={`mailto:${socialMediaLinks.email}`}>
        <button className={styles.btn}>Say hi</button>
      </a>
    </section>
  )
}

export default Contact
