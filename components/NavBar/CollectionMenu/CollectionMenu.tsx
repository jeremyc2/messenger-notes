import styles from './collection-menu.module.scss'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface Props {
    collection?: string
    open: boolean
}

export default function CollectionMenu({collection, open}: Props) {
    const [mounted, setMounted] = useState(false),
        router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    function deleteCollection() {
        if(!collection) return

        localStorage.removeItem(collection)
        router.push('/')
    }

    if(!(mounted && open)) return null
    return (
        <div className={styles.menu}>
            <button onClick={deleteCollection} className={styles.option}>
                Delete Collection
            </button>
        </div>
    )
}