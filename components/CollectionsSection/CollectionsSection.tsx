import styles from '../styles/notepage.module.scss'
import { Collection, getCollections } from '../../scripts/collection'
import CollectionItem from '../CollectionItem'
import NavBar2 from '../NavBar/NavBar2'
import { useEffect, useState } from 'react'

export default function CollectionsSection() {
    const [collections, setCollections] = useState<Collection[]>()

    useEffect(() => {
      const collections = getCollections
      setCollections(collections)
    }, [])
    return (
      <>
        <NavBar2 title='Notes' />
        <div className={styles.list}>
            {collections?.map((collectionData, index) => {
            return <CollectionItem 
                {...collectionData}
                key={`collection${index}`} />
            })}
        </div>
      </>
    )
}