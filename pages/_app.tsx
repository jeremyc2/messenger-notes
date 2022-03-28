import 'open-props/style';
import 'open-props/normalize';
import '../styles/globals.scss';
import type { AppProps } from 'next/app'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

function MyApp({ Component, pageProps }: AppProps) {
  TimeAgo.addDefaultLocale(en)
  return <Component {...pageProps} />
}

export default MyApp
