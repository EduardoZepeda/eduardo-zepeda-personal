import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import { openSidebarContext } from '../lib/OpenSidebarContext'

const Home: NextPage = () => {
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
          <meta name='description' content='Eduardo Zepeda web developer personal page' />
          <meta name='og:description' content='Eduardo Zepeda web developer personal page' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Nav />
        <Main />
        <Footer />
      </div>
    </openSidebarContext.Provider>
  )
}

export default Home
