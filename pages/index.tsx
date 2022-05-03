import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import { openSidebarContext } from '../lib/OpenSidebarContext'

const Home: NextPage = () => {
  const siteUrl = 'https://eduardozepeda.dev'
  const author = 'Eduardo Zepeda'
  const siteDescription = 'Eduardo Zepeda full stack developer web specialized in Python, Javascript, Typescript, Django, React, Nextjs, DRF and vast GNU linux experience'
  const siteTitle = 'Eduardo Zepeda fullstack dev'
  const [hideSidebar, setHideSidebar] = useState<boolean>(true)
  const socialMediaLinks = {
    github: 'https://github.com/eduardoZepeda',
    instagram: 'https://www.instagram.com/coffeebytes.dev/',
    linkedin: 'https://linkedin.com/in/eduardomzepeda',
    twitter: 'https://twitter.com/hello_wired',
    email: 'eduardozepeda@coffeebytes.dev'
  }

  return (
    <openSidebarContext.Provider value={{ hideSidebar, setHideSidebar, socialMediaLinks }}>
      <div className={styles.container}>
        <Head>
          <title>Eduardo Zepeda</title>
          <link rel='icon' href='/favicon.ico' />
          <meta property="og:locale" content="en_US"/>
          <meta name='description' content={siteDescription} />
          <meta name='author' content={author} />
          <meta name='og:description' content={siteDescription} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={siteUrl} />
          <meta property='og:title' content={siteTitle} />
          <meta property='twitter:title' content={siteTitle} />
          <meta property='twitter:description' content={siteDescription} />
        </Head>
        <Nav />
        <Main />
        <Footer />
      </div>
    </openSidebarContext.Provider>
  )
}

export default Home
