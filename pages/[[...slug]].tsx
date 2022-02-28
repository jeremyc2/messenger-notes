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
    [collection, setCollection] = useState<string>(),
    router = useRouter(),
    defaultCollection = 'Notes'

  useEffect(() => {
    if(!router.isReady) return

    let tempCollection
    if(router.query.slug) {
      tempCollection = Array.from(router.query.slug).join(' ')
    } else {
      tempCollection = defaultCollection
    }

    setCollection(tempCollection)

    var storedMessages = localStorage.getItem(tempCollection)
    
    if(storedMessages) {
      setMessages(JSON.parse(storedMessages))
    }

  }, [router.isReady])

  useEffect(() => {
    resizeApp()
    window.addEventListener('resize', resizeApp)

    return () => window.removeEventListener('resize', resizeApp)
  },[])
  
  return (
    <div>
      <Head>
        <title>{collection || defaultCollection}</title>
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
