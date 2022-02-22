import styles from '../styles/messenger.module.scss'
import NavBar from '../components/NavBar'
import Messages from '../components/Messages'
import MessageInput from '../components/MessageInput'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

function resizeApp() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

const Home: NextPage = () => {
  const [messages, setMessages] = useState<string[]>([])

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
        <NavBar />
        <Messages messages={messages}/>
        <MessageInput messages={messages} setMessages={setMessages}/>
      </div>
    </div>
  )
}

export default Home
