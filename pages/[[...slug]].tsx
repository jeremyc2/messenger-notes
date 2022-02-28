import styles from '../styles/messenger.module.scss'
import NavBar from '../components/NavBar'
import Messages from '../components/Messages'
import MessageInput from '../components/MessageInput'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { MessageNode } from '../utils/message-conversion'

function resizeApp() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

const Home: NextPage = () => {
  const [messages, setMessages] = useState<MessageNode[][]>([]),
    router = useRouter()

  let collection: string
  if(router.query.slug) {
      collection = Array.from(router.query.slug).join(' ')
  }

  useEffect(() => {
    resizeApp()
    window.addEventListener('resize', resizeApp)

    var storedMessages = localStorage.getItem(collection || 'Notes')

    if(storedMessages) {
      setMessages(JSON.parse(storedMessages))
    }

    return () => window.removeEventListener('resize', resizeApp)
  },[])
  
  return (
    <div>
      <Head>
        <title>Messenger Notes</title>
        <meta name="description" content="" />
        <link rel="icon" href="icon.svg" />
      </Head>
      <div className={styles.main}>
        <NavBar setMessages={setMessages} />
        <Messages messages={messages}/>
        <MessageInput messages={messages} setMessages={setMessages} />
      </div>
    </div>
  )
}

export default Home
