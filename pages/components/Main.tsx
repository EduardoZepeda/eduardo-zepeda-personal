import { useContext } from 'react'
import styles from '../../styles/Home.module.css'
import AboutMe from './AboutMe'
import Introduction from './Introduction'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { openSidebarContext } from './OpenSidebarContext'

const Main = (): JSX.Element => {
  const { hideSidebar, setHideSidebar } = useContext(openSidebarContext)

  return (
    <main onClick={() => setHideSidebar(true)} className={hideSidebar ? styles.main : `${styles.main} ${styles.blurry}`}>
      <Introduction />
      <AboutMe />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default Main
