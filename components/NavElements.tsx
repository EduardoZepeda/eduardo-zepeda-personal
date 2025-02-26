import { useContext } from 'react'
import { openSidebarContext } from '@lib/OpenSidebarContext'
import styles from '@styles/Home.module.css'
import Link from 'next/link'

const NavElements = (): JSX.Element => {
  const { setHideSidebar } = useContext(openSidebarContext)

  return (
    <ul onClick={() => setHideSidebar(true)}>
      <li><Link className={styles.navLink} href='/blog/page/1'>Blog</Link></li>
      <li><Link className={styles.navLink} href='/#about'>About me</Link></li>
      <li><Link className={styles.navLink} href='/#portfolio'>Portfolio</Link></li>
      <li><Link className={styles.navLink} href='/#projects'>OSS</Link></li>
      <li><Link className={styles.navLink} href='/#contact'>Contact</Link></li>
    </ul>
  )
}

export default NavElements
