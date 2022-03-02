import styles from '../styles/notepage.module.scss'
import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar2 from '../components/NavBar2'
import CollectionItem from '../components/CollectionItem'
import { messageToText } from '../utils/message-conversion'
import { useEffect, useState } from 'react'

interface Collection {
  name: string,
  lastMessage: string
}

const NotePage: NextPage = () => {
  const [collections, setCollections] = useState<Collection[]>()

  useEffect(() => {
    setCollections(Object.entries(localStorage)
    .filter(
      collection => collection[0] !== 'ally-supports-cache'
    )
    .map(collection => { 
      const messages = JSON.parse(collection[1])
      return {name: collection[0], lastMessage: messageToText(messages[messages.length - 1])} 
    }))
  }, [])

  return (
    <div>
      <Head>
        <title>Notes</title>
        <meta name="description" content="" />
        <link rel="icon" href="icon.svg" />
      </Head>
      <NavBar2 title='Notes' />
      <div className={styles.list}>
        {collections?.map((collection, index) => {
          return <CollectionItem 
            name={collection.name} 
            lastMessage={collection.lastMessage} 
            key={`collection${index}`} />
        })}
      </div>
    </div>
  )
}

export default NotePage
