import type { NextPage } from 'next'
import Main from '@components/Main'
import Head from 'next/head'

const Home: NextPage = () => {
  const siteUrl = 'https://eduardozepeda.dev'
  const authorFirstName = 'Eduardo'
  const authorLastName = 'Zepeda'
  const username = 'EduardoZepeda'
  const gender = 'male'
  const siteDescription = 'Eduardo Zepeda web developer web, frontend and backend specialized in Go, Python, Javascript, Typescript, Django, React, Nextjs, DRF and vast GNU linux experience. Comfortable with HTML and CSS too'
  const siteTitle = 'Eduardo Zepeda Web Developer'
  return (
    <>
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
      <Main />
    </>
  )
}

export default Home
