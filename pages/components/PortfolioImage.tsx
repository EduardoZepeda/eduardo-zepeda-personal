import styles from '../../styles/Home.module.css'
import Pluralize from '../../lib/Pluralize'

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
                    <source srcSet={`${createSrcSet}-400w.jpg`} media='(max-width: 480px)' />
                    <source srcSet={`${createSrcSet}-800w.jpg`} media='(max-width: 768px)' />
                    <source srcSet={`${createSrcSet}-1200w.jpg`} media='(max-width: 1200px)' />
                    <img className={styles.portfolioImage} loading='lazy' src={imgSrc} alt={`Screenshot of ${title} website`} />
                </picture>
            </a>
        </div>
    )
}

export default PortfolioImage
