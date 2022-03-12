import styles from './collection-menu.module.scss'
import { useOutsideTrigger } from '../../../scripts/hooks'
import { useRouter } from 'next/router'
import { useRef } from 'react'

interface Props {
    collection?: string
    setOpen: Function
}

export default function CollectionMenu({collection, setOpen}: Props) {
    const menu = useRef<HTMLDivElement>(null),
        router = useRouter()

    useOutsideTrigger(menu, () => setOpen(false))

    function deleteCollection() {
        if(!collection) return

        localStorage.removeItem(collection)
        router.push('/')
    }

    return (
        <div ref={menu} className={styles.menu}>
            <button onClick={deleteCollection} className={styles.option}>
                Delete Collection
            </button>
        </div>
    )
}