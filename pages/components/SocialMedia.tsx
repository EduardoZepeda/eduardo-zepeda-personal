import { useContext } from 'react'
import styles from '../../styles/Home.module.css'
import { faGithubAlt, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { openSidebarContext } from './OpenSidebarContext'

const SocialMedia = (): JSX.Element => {
    const { hideSidebar, setHideSidebar } = useContext(openSidebarContext)

    const iconSize = "lg"
    return (
        <aside id='socialMediaLinks'>
            <div className={hideSidebar ? `${styles.socialMedia} ${styles.side}` : `${styles.socialMedia} ${styles.hidden}`}>
                <FontAwesomeIcon size={iconSize} icon={faGithubAlt} />
                <FontAwesomeIcon size={iconSize} icon={faTwitter} />
                <FontAwesomeIcon size={iconSize} icon={faInstagram} />
                <FontAwesomeIcon size={iconSize} icon={faLinkedin} />
            </div>
        </aside>
    )
}

export default SocialMedia
