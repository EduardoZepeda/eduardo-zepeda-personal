import { useContext } from 'react'
import styles from '../../styles/Home.module.css'
import { openSidebarContext } from '../../lib/OpenSidebarContext'
import Icons from './Icons'

const Footer = (): JSX.Element => {
  const { hideSidebar, setHideSidebar } = useContext(openSidebarContext)

  return (
    <footer onClick={() => setHideSidebar(true)} className={hideSidebar ? styles.footer : `${styles.footer} ${styles.blurry}`}>
      <div className={`${styles.socialMedia} ${styles.footer}`}>
        <Icons />
      </div>
      <div>
        <small>Designed and coded by Eduardo Zepeda</small>
      </div>
    </footer>
  )
}

export default Footer
