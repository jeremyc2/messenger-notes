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
    [collection, setCollection] = useState<string>('Notes'),
    router = useRouter()

  useEffect(() => {

    if(!router.query.slug) return

    let tempCollection = Array.from(router.query.slug).join(' ')
    setCollection(tempCollection)

    var storedMessages = localStorage.getItem(tempCollection)
    
    if(storedMessages) {
      setMessages(JSON.parse(storedMessages))
    }

  }, [router.query.slug])

  useEffect(() => {
    resizeApp()
    window.addEventListener('resize', resizeApp)

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
        <NavBar collection={collection} setMessages={setMessages} />
        <Messages messages={messages}/>
        <MessageInput collection={collection} messages={messages} setMessages={setMessages} />
      </div>
    </div>
  )
}

export default Home
