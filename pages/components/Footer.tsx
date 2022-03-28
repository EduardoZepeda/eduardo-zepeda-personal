import { useContext } from 'react'
import styles from '../../styles/Home.module.css'
import { openSidebarContext } from './OpenSidebarContext'

const Footer = (): JSX.Element => {
  const { hideSidebar, setHideSidebar } = useContext(openSidebarContext)

  return (
    <footer onClick={() => setHideSidebar(true)} className={hideSidebar ? styles.footer : `${styles.footer} ${styles.blurry}`}>
      <small>Designed and coded by Eduardo Zepeda</small>
    </footer>
  )
}

export default Footer
