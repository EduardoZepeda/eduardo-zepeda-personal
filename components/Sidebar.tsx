import { useContext } from 'react'
import styles from '@styles/Home.module.css'
import NavElements from './NavElements'
import { openSidebarContext } from '@lib/OpenSidebarContext'

const Sidebar = (): React.ReactElement => {
  const { hideSidebar, setHideSidebar } = useContext(openSidebarContext)

  return (
    <aside className={hideSidebar ? `${styles.sidebar} ${styles.sidebarHidden}` : styles.sidebar}>
      <div className={styles.close} onClick={() => setHideSidebar(true)} />
      <nav className={styles.sidebarMenu}>
        <NavElements />
      </nav>
    </aside>
  )
}

export default Sidebar
