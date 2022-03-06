import styles from '../styles/notepage.module.scss'
import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar2 from '../components/NavBar2'
import CollectionItem from '../components/CollectionItem'
import { useEffect, useState } from 'react'

interface Collection {
  name: string,
  latest: string
}

type CollectionMap = [string, string]

const NotePage: NextPage = () => {
  const [collections, setCollections] = useState<Collection[]>()

  useEffect(() => {
    const rawCollections = Object.entries(localStorage),
      collections = rawCollections
        .filter(collection => collection[0] !== 'ally-supports-cache')
        .map(([name, data]: CollectionMap) => {
          return {name, latest: JSON.parse(data).latest}
        })
    setCollections(collections)
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
        {collections?.map(({name, latest}, index) => {
          return <CollectionItem 
            name={name} 
            summary={latest} 
            key={`collection${index}`} />
        })}
      </div>
    </div>
  )
}

export default NotePage
