import React from 'react'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SizeProp } from '@fortawesome/fontawesome-svg-core'

const CreditsCode = (): JSX.Element => {
  const iconSize: SizeProp = 'sm'

  const sourceCodeUrl: string = 'https://github.com/EduardoZepeda/eduardo-zepeda-personal'

  return (
    <div>
      <a target='_blank' rel='noreferrer noopener' href={sourceCodeUrl}>
        <small>View this site's code </small><FontAwesomeIcon size={iconSize} icon={faGithubAlt} style={{ verticalAlign: 'middle' }} />
      </a>
    </div>
  )
}

export default CreditsCode
