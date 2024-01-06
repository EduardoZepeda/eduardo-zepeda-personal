import type { NextPage } from 'next'
import Main from '@components/Main'
import Head from 'next/head'
import generateSitemap from 'generateSitemap'
import generateFeed from 'generateFeed'
import generateIndex from 'generateIndex'
import { siteData } from 'siteData'

export const getStaticProps = async () => {
  await generateSitemap()
  await generateFeed()
  await generateIndex()

  return {
    props: {}
  }
}

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>{siteData["title"]}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:locale' content='en_US' />
        <meta name='description' content={siteData["siteDescription"]} />
        <meta name='author' content={siteData["authorFirstName"] + ' ' + siteData["authorLastName"]} />
        <meta name='og:description' content={siteData["siteDescription"]} />
        <meta property='og:type' content='profile' />
        <meta property='profile:first_name' content={siteData["authorFirstName"]} />
        <meta property='profile:last_name ' content={siteData["authorLastName"]} />
        <meta property='profile:username' content={siteData["username"]} />
        <meta property='profile:gender' content={siteData["gender"]} />
        <meta property='og:url' content={siteData["siteUrl"]} />
        <meta property='og:title' content={siteData["siteTitle"]} />
        <meta property='twitter:title' content={siteData["siteTitle"]} />
        <meta property='twitter:description' content={siteData["siteDescription"]} />
      </Head>
      <Main />
    </>
  )
}

export default Home
