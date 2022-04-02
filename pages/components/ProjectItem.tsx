import React from 'react'
import styles from '../../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const ProjectItem = (): JSX.Element => {
  const iconSize = 'sm'

  return (
    <div className={styles.projectItem}>
      <div className={styles.icon}>
        <FontAwesomeIcon size={iconSize} icon={faGithubAlt} />
      </div>
      <h3>Hello</h3>
      <div className={styles.projectItemDescription}><p>Hola</p></div>
      <div className={styles.stack}>bla bla</div>
    </div>
  )
}

export default ProjectItem
