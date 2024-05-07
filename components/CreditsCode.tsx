
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { sourceCodeUrl } from 'siteData'

const CreditsCode = (): JSX.Element => {
  const iconSize: SizeProp = 'sm'

  return (
    <div>
      <a target='_blank' rel='noreferrer noopener' href={sourceCodeUrl}>
        <small>View this site's code </small><FontAwesomeIcon size={iconSize} icon={faGithubAlt} style={{ verticalAlign: 'middle' }} />
      </a>
    </div>
  )
}

export default CreditsCode
