import { useContext } from 'react'
import styles from '@styles/Home.module.css'
import NavElements from '@components/NavElements'
import Sidebar from '@components/Sidebar'
import { openSidebarContext } from '@lib/OpenSidebarContext'

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
