import 'open-props/style';
import 'open-props/normalize';
import '../styles/style';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
