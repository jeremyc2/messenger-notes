import style from '../styles/beta.module.scss'
import type { NextPage } from 'next'
import Head from 'next/head'
import CollectionsSection from '../components/CollectionsSection'
import NotepageSection from '../components/NotepageSection'

function resizeApp() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

const NotePage: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Notes</title>
        <meta name="description" content="" />
        <link rel="icon" href="icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <div className={style.wrapper}>
        <CollectionsSection />
        <NotepageSection />
      </div>
    </div>
  )
}

export default NotePage