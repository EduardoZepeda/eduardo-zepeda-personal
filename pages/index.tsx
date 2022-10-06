import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/Home.module.css'
import Nav from '@components/Nav'
import Main from '@components/Main'
import Footer from '@components/Footer'
import { openSidebarContext } from '@lib/OpenSidebarContext'

const Home: NextPage = () => {
  const siteUrl = 'https://eduardozepeda.dev'
  const authorFirstName = 'Eduardo'
  const authorLastName = 'Zepeda'
  const username = 'EduardoZepeda'
  const gender = 'male'
  const siteDescription = 'Eduardo Zepeda full stack developer web specialized in Python, Javascript, Typescript, Django, React, Nextjs, DRF and vast GNU linux experience'
  const siteTitle = 'Eduardo Zepeda Fullstack Developer'
  const [hideSidebar, setHideSidebar] = useState<boolean>(true)
  const socialMediaLinks = {
    github: 'https://github.com/eduardoZepeda',
    instagram: 'https://www.instagram.com/coffeebytes.dev/',
    linkedin: 'https://linkedin.com/in/eduardomzepeda',
    twitter: 'https://twitter.com/hello_wired',
    email: 'eduardozepeda@coffeebytes.dev'
  }

  return (
    <openSidebarContext.Provider value={{ hideSidebar, setHideSidebar, socialMediaLinks, authorFirstName, authorLastName }}>
      <div className={styles.container}>
        <Head>
          <title>Eduardo Zepeda</title>
          <link rel='icon' href='/favicon.ico' />
          <meta property='og:locale' content='en_US' />
          <meta name='description' content={siteDescription} />
          <meta name='author' content={authorFirstName + ' ' + authorLastName} />
          <meta name='og:description' content={siteDescription} />
          <meta property='og:type' content='profile' />
          <meta property='profile:first_name' content={authorFirstName} />
          <meta property='profile:last_name ' content={authorLastName} />
          <meta property='profile:username' content={username} />
          <meta property='profile:gender' content={gender} />

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
