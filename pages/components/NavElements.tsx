import { useContext } from 'react'
import { openSidebarContext } from '@lib/OpenSidebarContext'
import styles from '@styles/Home.module.css'

const NavElements = (): JSX.Element => {
  const { setHideSidebar } = useContext(openSidebarContext)

  return (
    <ul onClick={() => setHideSidebar(true)}>
      <li><a className={styles.navLink} href='#'>Introduction</a></li>
      <li><a className={styles.navLink} href='#about'>About me</a></li>
      <li><a className={styles.navLink} href='#portfolio'>Portfolio</a></li>
      <li><a className={styles.navLink} href='#projects'>OSS</a></li>
      <li><a className={styles.navLink} href='#contact'>Contact</a></li>
    </ul>
  )
}

export default NavElements
