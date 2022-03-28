import { useContext } from 'react'
import styles from '../../styles/Home.module.css'
import { faGithubAlt, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { openSidebarContext } from './OpenSidebarContext'

const Footer = (): JSX.Element => {
  const { hideSidebar, setHideSidebar } = useContext(openSidebarContext)
  const iconSize = "lg"

  return (
    <footer onClick={() => setHideSidebar(true)} className={hideSidebar ? styles.footer : `${styles.footer} ${styles.blurry}`}>
      <div className={hideSidebar ? `${styles.socialMedia} ${styles.footer}` : `${styles.socialMedia} ${styles.hidden}`}>
        <FontAwesomeIcon size={iconSize} icon={faGithubAlt} />
        <FontAwesomeIcon size={iconSize} icon={faTwitter} />
        <FontAwesomeIcon size={iconSize} icon={faInstagram} />
        <FontAwesomeIcon size={iconSize} icon={faLinkedin} />
      </div>
      <div>
        <small>Designed and coded by Eduardo Zepeda</small>
      </div>
    </footer>
  )
}

export default Footer
