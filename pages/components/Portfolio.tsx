import React from 'react'
import PortfolioItem from './PortfolioItem'
import styles from '../../styles/Home.module.css'

const Portfolio = (): JSX.Element => {
  const portfolioData = [
    { imgSrc: '/portfolio/Enfok.jpg', title: 'WebSite', info: 'info' },
    { imgSrc: '/portfolio/CoffeeBytes.jpg', title: 'WebSite', info: 'Info' },
    { imgSrc: '/portfolio/TheNexus.jpg', title: 'WebSite', info: 'Info' },
    { imgSrc: '/portfolio/ElementalNames.jpg', title: 'WebSite', info: 'Info' }
  ]

  const portfolioItems = portfolioData.map(({ imgSrc, title, info }) => <PortfolioItem key={title} imgSrc={imgSrc} title={title} info={info} />)

  return (
    <section className={styles.portfolio}>
      <h2>Portfolio</h2>
      <div className={styles.portfolioItems}>
        {portfolioItems}
      </div>
    </section>
  )
}

export default Portfolio
