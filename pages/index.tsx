import styles from '../styles/messenger.module.scss'
import MessageInput from '../components/MessageInput'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

function resizeApp() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

const Home: NextPage = () => {
  useEffect(() => {
    resizeApp()
    window.addEventListener('resize', resizeApp)
    return () => window.removeEventListener('resize', resizeApp)
  })
  
  return (
    <div>
      <Head>
        <title>Messenger Notes</title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>
      <div className={styles.main}>
        <div className={styles.messages}>
          <div className={styles.message}>
            Hello
          </div>
        </div>
        <MessageInput />
      </div>
    </div>
  )
}

export default Home
