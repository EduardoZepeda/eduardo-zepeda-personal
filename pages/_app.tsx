import '@styles/main.css'
import '@styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '@components/Layout'
import { openSidebarContext } from '@lib/OpenSidebarContext'
import { useState } from 'react'
import 'prismjs/themes/prism.css';
// PurgeCSS in create-next-app eliminates fontawesome css, hence an implicit import is required

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [hideSidebar, setHideSidebar] = useState<boolean>(true)
  const authorFirstName = 'Eduardo'
  const authorLastName = 'Zepeda'
  const socialMediaLinks = {
    github: 'https://github.com/eduardoZepeda',
    instagram: 'https://www.instagram.com/eduardozepeda.dev/',
    linkedin: 'https://linkedin.com/in/eduardomzepeda',
    twitter: 'https://twitter.com/hello_wired',
    email: 'aGVsbG9AZWR1YXJkb3plcGVkYS5kZXYK'
  }
  return (
    <openSidebarContext.Provider value={{ hideSidebar, setHideSidebar, socialMediaLinks, authorFirstName, authorLastName }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </openSidebarContext.Provider>
  )
}

export default MyApp
