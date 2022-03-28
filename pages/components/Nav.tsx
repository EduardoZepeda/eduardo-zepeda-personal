import { useContext } from 'react'
import styles from '../../styles/Home.module.css'
import NavElements from './NavElements'
import Sidebar from './Sidebar'
import { openSidebarContext } from './OpenSidebarContext'

const Nav = (): JSX.Element => {
  const { hideSidebar, setHideSidebar } = useContext(openSidebarContext)

  return (
    <header className={styles.nav}>
      <Sidebar />
      <div className={hideSidebar ? styles.burgerIcon : `${styles.burgerIcon} ${styles.hidden}`} onClick={() => setHideSidebar(!hideSidebar)}>
        <div className={styles.burger} />
        <div className={styles.burger} />
        <div className={styles.burger} />
      </div>
      <nav className={styles.menu}>
        <NavElements />
      </nav>
    </header>
  )
}

export default Nav
