import { useContext } from 'react'
import { faGithubAlt, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { openSidebarContext } from '../../lib/OpenSidebarContext'

const Icons = (): JSX.Element => {
  const { socialMediaLinks } = useContext(openSidebarContext)
  const iconSize = 'lg'

  return (
    <>
      <a aria-label={'Eduardo Zepeda Github profile'} href={socialMediaLinks.github}><FontAwesomeIcon size={iconSize} icon={faGithubAlt} /></a>
      <a aria-label={'Eduardo Zepeda Twitter profile'} href={socialMediaLinks.twitter}><FontAwesomeIcon size={iconSize} icon={faTwitter} /></a>
      <a aria-label={'Eduardo Zepeda Instagram profile'} href={socialMediaLinks.instagram}><FontAwesomeIcon size={iconSize} icon={faInstagram} /></a>
      <a aria-label={'Eduardo Zepeda Linkedin profile'} href={socialMediaLinks.linkedin}><FontAwesomeIcon size={iconSize} icon={faLinkedin} /></a>
    </>
  )
}

export default Icons
