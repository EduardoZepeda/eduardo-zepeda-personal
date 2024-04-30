import React, { useState } from 'react'
import PortfolioItem from './PortfolioItem'
import styles from '@styles/Home.module.css'

interface PortfolioProject {
  imgSrc: string
  title: string
  info: string
  websiteLink: string
  sourceCodeLink?: string
  stack: string
}

const Portfolio = (): JSX.Element => {
  const [visibleItems, setVisibleItems] = useState<number>(4)

  const portfolioData: PortfolioProject[] = [
    {
      imgSrc: '/portfolio/Enfok.jpg',
      title: 'Enfok shop',
      info: 'Ecommerce website for a +14k likes fanpage with tons of customers. Lots of extended features were added, for instance: Newsletter with affilate link system, competition price crawling, facebook group publishing bot, Mercado pago gateway and many advanced dashboard functions and statistics.',
      websiteLink: 'https://enfokshop.com/es-mx/',
      stack: 'Digital Ocean Droplet, Django, Postgres, React, Jquery, SCSS, Nginx, Gunicorn, Redis, Celery, Jenkins'
    },
    {
      imgSrc: '/portfolio/GoCoffeeApi.jpg',
      title: 'Go Coffee shops API',
      info: 'API backend written in Go from scratch and raw SQL. User accounts, JWT auth, coffee shops CRUD, following and likes system, search by user\'s location, FTS, logging, rate limiting and tests. Swaggo docs',
      websiteLink: 'https://go-coffee-api.vercel.app/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/go-coffee-api',
      stack: 'Vercel, Postgres, PostGIS, Go, Gorilla, React, MUI'
    },
    {
      imgSrc: '/portfolio/Tamper.jpg',
      title: 'Tamper',
      info: 'Geo location app that, given a location, finds the nearest speciality coffee shops in Guadalajara. Furthermore, social network capabilities: real time chat, accounts, asymmetrical following system, likes, user\'s feed, rating and reviews system.',
      websiteLink: 'https://django-gis-coffee.vercel.app/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/django-gis-coffee',
      stack: 'Fly.io, DRF, Nextjs, Typescript, React query, Vanilla CSS, Postgres, PostGIS, Leaflet'
    },
    {
      imgSrc: '/portfolio/Camerashuttercount.jpg',
      title: 'Camera Shutter Count',
      info: 'Multilingual web application that reads shutter count and EXIF metadata from any picture, it also contains graphs and tables related to shutter count data for almost all professional cameras.',
      websiteLink: 'https://camerashuttercount.net/',
      stack: 'Nextjs, Typescript, DaisyUI, Sqlite'
    },
    {
      imgSrc: '/portfolio/Biodek.jpg',
      title: 'Biodek',
      info: 'Responsive landing page frontend with psychedelic neon colors and smooth animations.',
      websiteLink: 'https://biodek-landing-page.vercel.app/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/biodek-landing-page/',
      stack: 'Vercel, Nextjs, Typescript'
    },
    {
      imgSrc: '/portfolio/CoffeeBytes.jpg',
      title: 'Coffee bytes',
      info: 'My web development blog, +100 entries/tutorials and +200 subscribed developers and +500 followers on Ig. I write new posts for developers every week.',
      websiteLink: 'https://coffeebytes.dev/en/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/coffeebytes',
      stack: 'Digital Ocean Droplet, Hugo (Prev. React + Headless WP), Nginx, Jenkins'
    },
    {
      imgSrc: '/portfolio/MineSweeper.jpg',
      title: 'Mine Sweeper',
      info: 'Mine Sweeper with three levels of difficulty and a custom difficulty mode. Mark tiles as bombs, and reset game button.',
      websiteLink: 'https://eduardozepeda.github.io/mine-sweeper/',
      sourceCodeLink: 'https://github.com/EduardoZepeda/mine-sweeper',
      stack: 'Github pages, React, Typescript'
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
