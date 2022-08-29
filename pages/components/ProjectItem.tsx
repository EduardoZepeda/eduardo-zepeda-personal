import React from 'react'
import styles from '../../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import Pluralize from '../../lib/Pluralize'

interface ProjectItemProps {
  title: string
  description: string
  link: string
  stack: string
}

const ProjectItem = ({ title, description, link, stack }: ProjectItemProps): JSX.Element => {
  const iconSize = 'lg'

  return (
    <div className={styles.projectItem}>
      <div>
        <a href={link} aria-label={`${Pluralize(title)} source code`} title={`${Pluralize(title)} source code`} className={styles.icon}>
          <FontAwesomeIcon size={iconSize} icon={faGithubAlt} />
          <h3>{title}</h3>
        </a>
      </div>
      <div className={styles.projectItemDescription}><p>{description}</p></div>
      <div className={styles.stack}>{stack}</div>
    </div>
  )
}

export default ProjectItem
