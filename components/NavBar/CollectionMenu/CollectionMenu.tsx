import styles from './collection-menu.module.scss'
import { useOutsideTrigger } from '../../../scripts/hooks'
import { removeCollection } from '../../../scripts/collection'
import { useContext, useRef } from 'react'
import { appContext } from '../../../pages'

interface Props {
    collection?: string
    setOpen: Function
}

export default function CollectionMenu({collection, setOpen}: Props) {
    const menu = useRef<HTMLDivElement>(null),
        { dispatch } = useContext(appContext)

    useOutsideTrigger(menu, () => setOpen(false))

    function deleteCollection() {
        if(!collection) return

        removeCollection(collection)
        dispatch({type: 'loadCollection', value: null})
    }

    return (
        <div ref={menu} className={styles.menu}>
            <button onClick={deleteCollection} className={styles.option}>
                Delete Collection
            </button>
        </div>
    )
}