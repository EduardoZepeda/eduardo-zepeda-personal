
import styles from '@styles/Home.module.css'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PortfolioImage from './PortfolioImage'
import Pluralize from '@lib/Pluralize'

interface PortfolioItemProps {
  imgSrc: string
  title: string
  info: string
  websiteLink: string
  sourceCodeLink: string | undefined
  stack: string
}

const PortfolioItem = ({ imgSrc, title, info, websiteLink, sourceCodeLink, stack }: PortfolioItemProps): JSX.Element => {
  const iconSize = 'lg'

  return (
    <div className={styles.portfolioContainer}>
      <PortfolioImage imgSrc={imgSrc} websiteLink={websiteLink} title={title} />
      <div className={styles.portfolioInfo}>
        <h3>{title}</h3>
        <div className={styles.portfolioDescription}><p>{info}</p></div>
        <div className={styles.stack}>{stack}</div>
        <div className={styles.iconContainer}>
          <span><a target='_blank' rel='noreferrer noopener' title={`Link to ${title}`} href={websiteLink} className={styles.icon} aria-label={`${Pluralize(title)} website`}><FontAwesomeIcon size={iconSize} icon={faLink} /><span>{'  '}<strong>Link</strong></span></a></span>
          {sourceCodeLink !== undefined
            ? (
              <span>
                <a href={sourceCodeLink} target='_blank' rel='noreferrer noopener' className={styles.icon} aria-label={`${Pluralize(title)} source code`}>
                  <FontAwesomeIcon title={`${Pluralize(title)} source code`} size={iconSize} icon={faGithubAlt} /><span>{'  '}<strong>Code</strong></span>
                </a>
              </span>)
            : null}
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
