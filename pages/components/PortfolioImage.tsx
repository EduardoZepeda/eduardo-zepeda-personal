import styles from '@styles/Home.module.css'
import Pluralize from '@lib/Pluralize'

interface PortfolioImageProps {
  imgSrc: string
  title: string
  websiteLink: string

}

const PortfolioImage = ({ imgSrc, websiteLink, title }: PortfolioImageProps): JSX.Element => {
  const createSrcSet = imgSrc?.replace('.jpg', '')

  return (
    <div className={styles.portfolioImageContainer}>
      <a href={websiteLink} aria-label={`${Pluralize(title)} website`} target='blank'>
        <picture>
          {/* Images must be created beforehand with the following format: <name>-<size_in_pixels>w.jpg */}
          <source
            type='image/webp'
            sizes={`(max-width: 480px) 400px,
                    (max-width: 960px) 800px,
                    (max-width: 1200px) 1200px`}
            srcSet={`${createSrcSet}-400w.webp 400w,
                     ${createSrcSet}-800w.webp 800w,
                     ${createSrcSet}-1200w.webp 1200w`}
          />
          <img
            sizes={`(max-width: 480px) 400px,
                      (max-width: 960px) 800px,
                      (max-width: 1200px) 1200px`}
            srcSet={`${createSrcSet}-400w.jpg 400w,
                     ${createSrcSet}-800w.jpg 800w,
                     ${createSrcSet}-1200w.jpg 1200w`}
            src={`${createSrcSet}.jpg`}
            loading='lazy'
            className={styles.portfolioImage}
            alt={`Screenshot of ${title} website`} />
        </picture>
      </a>
    </div>
  )
}

export default PortfolioImage
