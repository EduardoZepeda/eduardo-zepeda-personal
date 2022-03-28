import '../styles/main.css'
import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
// PurgeCSS in create-next-app eliminates fontawesome css, hence an implicit import is required

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
