import React from 'react'
import styles from '../../styles/Home.module.css'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface PortfolioItemProps {
  imgSrc: string
  title: string
  info: string
  websiteLink: string
  sourceCodeLink: string | undefined
  stack: string
}

const PortfolioItem = ({ imgSrc, title, info, websiteLink, sourceCodeLink, stack }: PortfolioItemProps): JSX.Element => {
  const iconSize = 'sm'

  const createSrcSet = imgSrc?.replace('.jpg', '')

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioImageContainer}>
        <a href={websiteLink} aria-label={`${title} website`} target='blank'>
          <picture>
            <source srcSet={`${createSrcSet}-400w.jpg`} media='(max-width: 480px)' />
            <source srcSet={`${createSrcSet}-800w.jpg`} media='(max-width: 768px)' />
            <source srcSet={`${createSrcSet}-1200w.jpg`} media='(max-width: 1200px)' />
            <img className={styles.portfolioImage} loading='lazy' src={imgSrc} alt={`Screenshot of ${title} website`} />
          </picture>
        </a>
      </div>
      <div className={styles.portfolioInfo}>
        <h3>{title}</h3>
        <div className={styles.portfolioDescription}>{info}</div>
        <div className={styles.stack}>{stack}</div>
        <div className={styles.iconContainer}>
          <span><a href={websiteLink} className={styles.icon}><FontAwesomeIcon size={iconSize} icon={faLink} /></a></span>
          {sourceCodeLink !== undefined ? <span><a href={sourceCodeLink} className={styles.icon}><FontAwesomeIcon size={iconSize} icon={faGithubAlt} /></a></span> : null}
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
