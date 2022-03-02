import styles from '../styles/notepage.module.scss'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import NavBar2 from '../components/NavBar2'
import { useEffect, useState } from 'react'

const NotePage: NextPage = () => {
  const [collections, setCollections] = useState<string[]>()

  useEffect(() => {
    setCollections(Object.keys(localStorage)
      .filter(collection => collection !== 'ally-supports-cache'))
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
          return <Link key={`collection${index}`} href={`/${collection}`}>
            <a>{collection}</a>
          </Link>
        })}
      </div>
    </div>
  )
}

export default NotePage
