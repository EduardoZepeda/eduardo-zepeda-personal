import { useContext, useEffect, useState } from 'react'
import { openSidebarContext } from '@lib/OpenSidebarContext'

import styles from '@styles/Home.module.css'

function UnicodeDecodeB64 (str: string): string {
  return decodeURIComponent(window.atob(str))
}

const Contact = (): JSX.Element => {
  const [decodedEmail, setDecodedEmail] = useState<string>('')
  const { socialMediaLinks } = useContext(openSidebarContext)

  useEffect(() => {
    setDecodedEmail(UnicodeDecodeB64(socialMediaLinks.email))
  }, [socialMediaLinks.email])

  return (
    <section id='contact'>
      <div className={styles.contact}>
        <h2>Contact</h2>
        <p>Let's keep in touch. My inbox is open for you and I'm always listening to new offers. I'd be delighted to hear about you.
        </p>
      </div>
      <div className={styles.mY}>
        <a className={styles.btn} href={`mailto:${decodedEmail}`} aria-label='Say hi to Eduardo by email'>
          Say hi to Eduardo
        </a>
      </div>
    </section>
  )
}

export default Contact
