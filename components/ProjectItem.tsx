
import styles from '@styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faFolderBlank } from '@fortawesome/free-solid-svg-icons'
import Pluralize from '@lib/Pluralize'

interface ProjectItemProps {
  title: string
  description: string
  link: string
  stack: string
}

const ProjectItem = ({ title, description, link, stack }: ProjectItemProps): JSX.Element => {
  const iconSize = 'lg'
  const folderSize = '3x'

  return (
    <div className={styles.project}>
      <div className={styles.projectIcons}>
        <FontAwesomeIcon size={folderSize} icon={faFolderBlank} />
        <a href={link} aria-label={`${Pluralize(title)} source code`} title={`${Pluralize(title)} source code`} className={styles.icon}>
          <FontAwesomeIcon size={iconSize} icon={faGithubAlt} />
        </a>
      </div>
      <div className={styles.projectItem}>
        <h3> <a href={link} aria-label={`${Pluralize(title)} source code`} title={`${Pluralize(title)} source code`} className={styles.icon}>{title}</a></h3>
        <div className={styles.projectItemDescription}><p>{description}</p></div>
        <div className={styles.stack}>{stack}</div>
      </div>
    </div>
  )
}

export default ProjectItem
