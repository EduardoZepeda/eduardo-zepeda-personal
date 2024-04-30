import '@styles/main.css'
import '@styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '@components/Layout'
import { openSidebarContext } from '@lib/OpenSidebarContext'
import { useState } from 'react'
import { siteData } from 'siteData'
// PurgeCSS in create-next-app eliminates fontawesome css, hence an implicit import is required

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [hideSidebar, setHideSidebar] = useState<boolean>(true)
  const authorFirstName = siteData["authorFirstName"]
  const authorLastName = siteData["authorLastName"]
  const socialMediaLinks = siteData["socialMediaLinks"]
  return (
    <openSidebarContext.Provider value={{ hideSidebar, setHideSidebar, socialMediaLinks, authorFirstName, authorLastName }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </openSidebarContext.Provider>
  )
}

export default MyApp
