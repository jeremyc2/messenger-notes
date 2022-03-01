import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Notes: NextPage = () => {
  const [collections, setCollections] = useState<string[]>()

  useEffect(() => {
    setCollections(Object.keys(localStorage))
  }, [])

  return (
    <div>
      <Head>
        <title>Notes</title>
        <meta name="description" content="" />
        <link rel="icon" href="icon.svg" />
      </Head>
      <div>
        {collections?.map((collection, index) => {
          return <div key={`collection${index}`}>
            <Link href={`/${collection}`}>
              <a>{collection}</a>
            </Link>
          </div>
        })}
      </div>
    </div>
  )
}

export default Notes
