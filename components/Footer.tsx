import { useContext } from 'react'
import styles from '@styles/Home.module.css'
import { openSidebarContext } from '@lib/OpenSidebarContext'
import CreditsCode from '@components/CreditsCode'

import Icons from './Icons'

const Footer = (): JSX.Element => {
  const { hideSidebar, setHideSidebar } = useContext(openSidebarContext)

  return (
    <footer onClick={() => setHideSidebar(true)} className={hideSidebar ? styles.footer : `${styles.footer} ${styles.blurry}`}>
      <section className={`${styles.socialMedia} ${styles.footer}`}>
        <Icons />
      </section>
      <section className={styles.credits}>
        <CreditsCode />
        <div><small>Coded with ♥ by Eduardo Zepeda.</small></div>
        <div><small>Design inspired by Brittany Chiang</small></div>
      </section>
    </footer>
  )
}

export default Footer
