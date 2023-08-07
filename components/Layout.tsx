import { FC, useContext } from 'react'
import Head from 'next/head'
import styles from '@styles/Home.module.css'
import Nav from '@components/Nav'
import Footer from '@components/Footer'
import { openSidebarContext } from '@lib/OpenSidebarContext'
import SocialMedia from './SocialMedia'

const Layout: FC = ({ children }) => {
  const { hideSidebar, setHideSidebar } = useContext(openSidebarContext)
  const siteUrl = 'https://eduardozepeda.dev'
  const authorFirstName = 'Eduardo'
  const authorLastName = 'Zepeda'
  const username = 'EduardoZepeda'
  const gender = 'male'
  const siteDescription = 'Eduardo Zepeda web developer web, frontend and backend specialized in Go, Python, Javascript, Typescript, Django, React, Nextjs, DRF and vast GNU linux experience. Comfortable with HTML and CSS too'
  const siteTitle = 'Eduardo Zepeda Web Developer'

  return (
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
      <main onClick={() => setHideSidebar(true)} className={hideSidebar ? styles.main : `${styles.main} ${styles.blurry}`}>
        {children}
        <SocialMedia />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
