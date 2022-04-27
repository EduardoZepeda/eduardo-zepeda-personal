import { useContext } from 'react'
import { openSidebarContext } from '../../lib/OpenSidebarContext'
import styles from '../../styles/Home.module.css'

const NavElements = (): JSX.Element => {
  const { setHideSidebar } = useContext(openSidebarContext)

  return (
    <ol>
      <ul><a className={styles.navLink} onClick={() => setHideSidebar(true)} href='#'>Introduction</a></ul>
      <ul><a className={styles.navLink} onClick={() => setHideSidebar(true)} href='#about'>About me</a></ul>
      <ul><a className={styles.navLink} onClick={() => setHideSidebar(true)} href='#portfolio'>Portfolio</a></ul>
      <ul><a className={styles.navLink} onClick={() => setHideSidebar(true)} href='#projects'>OSS</a></ul>
      <ul><a className={styles.navLink} onClick={() => setHideSidebar(true)} href='#contact'>Contact</a></ul>
    </ol>
  )
}

export default NavElements
