import { useState } from 'react'
import PortfolioItem from './PortfolioItem'
import styles from '@styles/Home.module.css'
import { portfolioData } from 'siteData'


const Portfolio = (): JSX.Element => {
  const [visibleItems, setVisibleItems] = useState<number>(4)

  const portfolioItems = portfolioData.map(({ imgSrc, title, info, websiteLink, sourceCodeLink, stack }) => (
    <PortfolioItem
      key={title}
      imgSrc={imgSrc}
      title={title}
      info={info}
      websiteLink={websiteLink}
      sourceCodeLink={sourceCodeLink}
      stack={stack}
    />
  ))
  return (
    <section id='portfolio' className={styles.portfolio}>
      <h2>Portfolio</h2>
      <div className={styles.portfolioItems}>
        {portfolioItems.slice(0, visibleItems)}
      </div>
      <div className={styles.portfolioBtn}>
        {/* if visible items is greater than portfolio items, hide button */}
        {visibleItems <= portfolioItems.length - 1 && <button onClick={() => setVisibleItems(visibleItems + 2)} className={styles.btn}>Load more</button>}
      </div>
    </section>
  )
}

export default Portfolio
