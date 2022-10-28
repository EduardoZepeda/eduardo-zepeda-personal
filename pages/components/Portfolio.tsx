import React, { useState } from 'react'
import PortfolioItem from './PortfolioItem'
import styles from '@styles/Home.module.css'

const Portfolio = (): JSX.Element => {
  const [visibleItems, setVisibleItems] = useState<number>(4)

  const portfolioData = [
    {
      imgSrc: '/portfolio/Enfok.jpg',
      title: 'Enfok shop',
      info: 'Ecommerce website for a +14k likes fanpage with tons of customers. Lots of features were added, for instance: Mercado pago integration, competition price crawling, facebook pixel events integration, receipt payment method, advanced dashboard functions and statistics, newsletter with customized affilate link system and much more.',
      websiteLink: 'https://enfokshop.com/es-mx/',
      stack: 'Digital Ocean Droplet, Django, Postgres, React, Jquery, Bootstrap, Nginx, Gunicorn, Redis, Celery, Jenkins'
    },
    {
      imgSrc: '/portfolio/CoffeeBytes.jpg',
      title: 'Coffee bytes',
      info: 'My web development blog, +100 entries/tutorials and +200 subscribed developers and +500 followers on Ig. I write new posts for developers every week.',
      websiteLink: 'https://coffeebytes.dev',
      sourceCodeLink: 'https://github.com/EduardoZepeda/coffeebytes',
      stack: 'Digital Ocean Droplet, Hugo (Prev. React + Headless WP), Nginx, Jenkins'
    },
    {
      imgSrc: '/portfolio/Tamper.jpg',
      title: 'Tamper',
      info: 'Geo location app that, given a location, finds the nearest speciality coffee shops in Guadalajara. Furthermore, a social network app for coffee lovers: accounts, asymmetrical following system, likes, feed, rating and reviews system.',
      websiteLink: 'https://django-gis-coffee.fly.dev/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/django-gis-coffee',
      stack: 'Fly.io, Django, Vanilla CSS & JS, Postgres, PostGIS, Leaflet'
    },
    {
      imgSrc: '/portfolio/MineSweeper.jpg',
      title: 'Mine Sweeper',
      info: 'Mine Sweeper with three levels of difficulty and a custom difficulty mode.',
      websiteLink: 'https://eduardozepeda.github.io/mine-sweeper/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/mine-sweeper',
      stack: 'Github pages, React, Typescript'
    },
    {
      imgSrc: '/portfolio/GoCoffeeApi.jpg',
      title: 'Go Coffee shops API',
      info: 'API backend written in Go from scratch and raw SQL. User account read, signup, delete, login with JWT, coffee shops CRUD, following system, likes system, search by user\'s location, FTS, logging and rate limiting. Docs generated with swaggo',
      websiteLink: 'https://go-coffee-api.vercel.app/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/go-coffee-api',
      stack: 'Vercel, Postgres, PostGIS, Go, Gorilla, React, MUI'
    },
    {
      imgSrc: '/portfolio/NextJsPractice.jpg',
      title: 'Coffee provider',
      info: 'A coffee bookmark based on local storage, it shows some graphs and stats based on real data from "Coffee obsession" book. Emulated authentication using next-auth.',
      websiteLink: 'https://nextjs-practice-mauve.vercel.app/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/nextjsPractica',
      stack: 'Vercel, Typescript, NextJS, Typescript, TailwindCSS'
    },
    {
      imgSrc: '/portfolio/TheNexus.jpg',
      title: 'The nexus',
      info: 'My oldest open source web app. Bookmark, organize and backup your favorite websites with this startpage. CRUD capabilities based on browser\'s localStorage.',
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
    },
    {
      imgSrc: '/portfolio/MiReflex.jpg',
      title: 'Mi reflex',
      info: 'Landing page that integrates facebook pixel events, for retargeting, and Mailchimp registration API.',
      websiteLink: 'https://eduardozepeda.github.io/landingPageMyReflex/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/landingPageMyReflex',
      stack: 'Github pages, NextJS, TailwindCSS'
    },
    {
      imgSrc: '/portfolio/Chiserstagram.jpg',
      title: 'Chiserstagram',
      info: 'Simple frontend instagram clone, with likes, share, save and responsiveness.',
      websiteLink: 'https://chiserstagram.netlify.app/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/chiserstagramPractice',
      stack: 'Netlify, Svelte'
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
