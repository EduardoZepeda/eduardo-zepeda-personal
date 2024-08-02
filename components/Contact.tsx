import { useContext, useEffect, useState } from 'react'
import { openSidebarContext } from '@lib/OpenSidebarContext'
import { contact } from 'siteData'

import styles from '@styles/Home.module.css'

function UnicodeDecodeB64(str: string): string {
  return decodeURIComponent(window.atob(str))
}

const Contact = (): JSX.Element => {
  const [decodedEmail, setDecodedEmail] = useState<string>('')
  const { socialMediaLinks } = useContext(openSidebarContext)
  const { message, buttonText } = contact

  useEffect(() => {
    setDecodedEmail(UnicodeDecodeB64(socialMediaLinks.email))
  }, [socialMediaLinks.email])

  return (
    <section id='contact'>
      <div className={styles.contact}>
        <h2>Contact</h2>
        <p>{message}
        </p>
      </div>
      <div className={styles.mY}>
        <a className={styles.btn} href={`mailto:${decodedEmail}`} aria-label={`${buttonText} by email`}>
          {buttonText}
        </a>
      </div>
    </section>
  )
}

export default Contact
