import { useContext } from 'react'
import styles from '@styles/Home.module.css'
import { openSidebarContext } from '@lib/OpenSidebarContext'
import CreditsCode from './CreditsCode'

import Icons from './Icons'

const Footer = (): JSX.Element => {
  const { hideSidebar, setHideSidebar } = useContext(openSidebarContext)

  return (
    <footer onClick={() => setHideSidebar(true)} className={hideSidebar ? styles.footer : `${styles.footer} ${styles.blurry}`}>
      <div className={`${styles.socialMedia} ${styles.footer}`}>
        <Icons />
      </div>
      <div>
        <CreditsCode />
        <p><small><a href='https://github.com/EduardoZepeda/eduardo-zepeda-personal'>Coded with ♥ by Eduardo Zepeda.</a></small></p>
        <p><small>Design inspired by Brittany Chiang</small></p>
      </div>
    </footer>
  )
}

export default Footer
