import { useContext } from 'react'
import { faGithubAlt, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { openSidebarContext } from '@lib/OpenSidebarContext'
import styles from '@styles/Home.module.css'

const Icons = (): JSX.Element => {
  const { socialMediaLinks, authorFirstName, authorLastName } = useContext(openSidebarContext)
  const iconSize = 'lg'

  return (
    <>
      <a className={styles.iconLink} target='_blank' rel='noreferrer noopener' aria-label={`${authorFirstName} ${authorLastName} Github profile`} href={socialMediaLinks.github}><FontAwesomeIcon size={iconSize} icon={faGithubAlt} /></a>
      <a className={styles.iconLink} target='_blank' rel='noreferrer noopener' aria-label={`${authorFirstName} ${authorLastName} Twitter profile`} href={socialMediaLinks.twitter}> <FontAwesomeIcon size={iconSize} icon={faTwitter} /></a>
      <a className={styles.iconLink} target='_blank' rel='noreferrer noopener' aria-label={`${authorFirstName} ${authorLastName} Instagram profile`} href={socialMediaLinks.instagram}> <FontAwesomeIcon size={iconSize} icon={faInstagram} /></a>
      <a className={styles.iconLink} target='_blank' rel='noreferrer noopener' aria-label={`${authorFirstName} ${authorLastName} Linkedin profile`} href={socialMediaLinks.linkedin}> <FontAwesomeIcon size={iconSize} icon={faLinkedin} /></a>
    </>
  )
}

export default Icons
