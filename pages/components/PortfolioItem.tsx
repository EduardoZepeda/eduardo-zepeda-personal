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

  const createSrcSet = imgSrc?.replace('.jpg', '')
  const srcSet = `${createSrcSet}-400w.jpg 480w,
    ${createSrcSet}-800w.jpg 768w,
    ${createSrcSet}-1200w.jpg 1366w
    ${createSrcSet}.jpg 1920w`

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.portfolioImageContainer}>
        <picture>
          <img
            srcSet={srcSet}
            sizes='(max-width: 480px) 480px,
                    (max-width: 768px) 768px,
                    (max-width: 1200px) 1366px,
                    1920px'
            src={imgSrc} alt='Elva dressed as a fairy'
            className={styles.portfolioImage}
            loading='lazy'
          />
        </picture>
      </div>
      <div className={styles.portfolioInfo}>
        <h3>{title}</h3>
        <div className={styles.portfolioDescription}>{info}</div>
        <div className={styles.stack}>bla bla</div>
        <div className={styles.icon}><FontAwesomeIcon size={iconSize} icon={faLink} /></div>
      </div>
    </div>
  )
}

export default PortfolioItem
