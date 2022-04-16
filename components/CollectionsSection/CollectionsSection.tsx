import styles from './collections-section.module.scss'
import { Collection, getCollections } from '../../scripts/collection'
import CollectionItem from '../CollectionItem'
import NavBar2 from '../NavBar/NavBar2'
import { useEffect, useState } from 'react'

interface Props {
  active: boolean
}

export default function CollectionsSection({ active }: Props) {
    const [collections, setCollections] = useState<Collection[]>()

    useEffect(() => {
      const collections = getCollections
      setCollections(collections)
    },[])
    return (
      <div className={active? styles.active: styles.inactive}>
        <NavBar2 />
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