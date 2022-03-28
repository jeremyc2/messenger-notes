import styles from '../styles/notepage.module.scss'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Collection } from '../scripts/collection'
import NavBar2 from '../components/NavBar/NavBar2'
import CollectionItem from '../components/CollectionItem'
import { getCollections } from '../scripts/collection'
import { useEffect, useState } from 'react'

const NotePage: NextPage = () => {
  const [collections, setCollections] = useState<Collection[]>()

  useEffect(() => {
    const collections = getCollections
    setCollections(collections)
  }, [])

  return (
    <div>
      <Head>
        <title>Notes</title>
        <meta name="description" content="" />
        <link rel="icon" href="icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <NavBar2 title='Notes' />
      <div className={styles.list}>
        {collections?.map((collectionData, index) => {
          return <CollectionItem 
            {...collectionData}
            key={`collection${index}`} />
        })}
      </div>
    </div>
  )
}

export default NotePage
