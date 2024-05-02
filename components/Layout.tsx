import { FC, useContext } from 'react'
import styles from '@styles/Home.module.css'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import { openSidebarContext } from '@lib/OpenSidebarContext'
import SocialMedia from '@components/SocialMedia'

const Layout: FC = ({ children }) => {
  const { hideSidebar, setHideSidebar } = useContext(openSidebarContext)

  return (
    <div className={styles.container}>
      <Nav />
      <main onClick={() => setHideSidebar(true)} className={hideSidebar ? styles.main : `${styles.main} ${styles.blurry}`}>
        {children}
        <SocialMedia />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
