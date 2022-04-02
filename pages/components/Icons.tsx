import { useContext } from 'react'
import { faGithubAlt, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { openSidebarContext } from '../../lib/OpenSidebarContext'

const Icons = (): JSX.Element => {
  const { socialMediaLinks } = useContext(openSidebarContext)
  const iconSize = 'lg'

  return (
    <>
      <a href={socialMediaLinks.github}><FontAwesomeIcon size={iconSize} icon={faGithubAlt} /></a>
      <a href={socialMediaLinks.twitter}><FontAwesomeIcon size={iconSize} icon={faTwitter} /></a>
      <a href={socialMediaLinks.instagram}><FontAwesomeIcon size={iconSize} icon={faInstagram} /></a>
      <a href={socialMediaLinks.linkedin}><FontAwesomeIcon size={iconSize} icon={faLinkedin} /></a>
    </>
  )
}

export default Icons
