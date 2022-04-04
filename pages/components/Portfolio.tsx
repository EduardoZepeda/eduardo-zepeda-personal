import React from 'react'
import PortfolioItem from './PortfolioItem'
import styles from '../../styles/Home.module.css'

const Portfolio = (): JSX.Element => {
  const portfolioData = [
    { imgSrc: '/portfolio/Enfok.jpg', title: 'WebSite', info: 'info', websiteLink: 'link', sourceCodeLink: 'link' },
    { imgSrc: '/portfolio/CoffeeBytes.jpg', title: 'WebSite', info: 'Info', websiteLink: 'link', sourceCodeLink: 'link' },
    { imgSrc: '/portfolio/TheNexus.jpg', title: 'WebSite', info: 'Info', websiteLink: 'link', sourceCodeLink: 'link' },
    { imgSrc: '/portfolio/ElementalNames.jpg', title: 'WebSite', info: 'Info', websiteLink: 'link', sourceCodeLink: 'link' }
  ]

  const portfolioItems = portfolioData.map(({ imgSrc, title, info, websiteLink, sourceCodeLink }) => <PortfolioItem key={title} imgSrc={imgSrc} title={title} info={info} websiteLink={websiteLink} sourceCodeLink={sourceCodeLink} />)

  return (
    <section id='portfolio' className={styles.portfolio}>
      <h2>Portfolio</h2>
      <div className={styles.portfolioItems}>
        {portfolioItems}
      </div>
    </section>
  )
}

export default Portfolio
