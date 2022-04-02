import React from 'react'
import styles from '../../styles/Home.module.css'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface PortfolioItemProps {
  imgSrc: string
  title: string
  info: string
}

const PortfolioItem = ({ imgSrc, title, info }: PortfolioItemProps): JSX.Element => {
  const iconSize = 'sm'

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioImageContainer}>
        <picture>
          <source srcSet={imgSrc} type='image/jpeg' />
          <img src={imgSrc} alt='' className={styles.portfolioImage} />
        </picture>
      </div>
      <div className={styles.portfolioInfo}>
        <h4>{title}</h4>
        <div className={styles.portfolioDescription}>{info}</div>
        <div className={styles.stack}>bla bla</div>
        <div className={styles.icon}><FontAwesomeIcon size={iconSize} icon={faLink} /></div>
      </div>
    </div>
  )
}

export default PortfolioItem
