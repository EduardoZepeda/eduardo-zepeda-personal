import React from 'react'
import PortfolioItem from './PortfolioItem'
import styles from '../../styles/Home.module.css'

const Portfolio = (): JSX.Element => {
  const portfolioData = [
    {
      imgSrc: '/portfolio/Enfok.jpg',
      title: 'Enfok shop',
      info: 'Ecommerce website for a +14k likes fanpage. Lots of featured were added: Mercado pago integration, facebook pixel events integration, receipt payment method, advanced dashboard functions, newsletter with customized affilate link system and much more.',
      websiteLink: 'https://enfokshop.com/es-mx/',
      stack: 'Digital Ocean Droplet, Django, React, Jquery, Bootstrap, Nginx, Redis, Celery'
    },
    {
      imgSrc: '/portfolio/CoffeeBytes.jpg',
      title: 'Coffee bytes',
      info: 'My personal web development blog, +100 entries/tutorials and +100 subscribed developers. I write new posts every week.',
      websiteLink: 'https://coffeebytes.dev',
      sourceCodeLink: 'https://github.com/EduardoZepeda/coffeebytes',
      stack: 'Digital Ocean Droplet, React, Wordpress backend, styled components, Nginx'
    },
    {
      imgSrc: '/portfolio/MineSweeper.jpg',
      title: 'Mine Sweeper',
      info: 'A simple Mine Sweeper with three levels of difficulty and a custom difficulty mode.',
      websiteLink: 'https://eduardozepeda.github.io/mine-sweeper/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/mine-sweeper',
      stack: 'React, Typescript'
    },
    {
      imgSrc: '/portfolio/TheNexus.jpg',
      title: 'The nexus',
      info: 'Bookmark, organize and backup your favorite websites with this startpage. CRUD capabilities based on localStorage.',
      websiteLink: 'https://eduardozepeda.github.io/nexusStartPage/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/nexusStartPage',
      stack: 'Github pages, Backbone, Bootstrap, Jquery'
    },
    {
      imgSrc: '/portfolio/ElementalNames.jpg',
      title: 'Elemental names',
      info: 'Just for fun, or maybe t-shirts. A website that, given a word, uses symbols of chemical elements, and the backtrack algorithm, to construct it. If the given word can be formed by elements it\'ll show all the ways it can be formed, otherwise, it won\'t return anything.',
      websiteLink: 'https://elemental-names.vercel.app/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/elementalNames',
      stack: 'Vercel, React, TailwindCSS'
    }
  ]

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
        {portfolioItems}
      </div>
    </section>
  )
}

export default Portfolio
