import styles from './navbar.module.scss'
import CollectionMenu from './CollectionMenu'
import { useContext, useState } from 'react'
import { appContext } from '../../pages'

interface Props {
    collection?: string
    avatar?: string
}

export default function NavBar({ collection, avatar }: Props) {
    const [menuOpen, setMenuOpen] = useState<boolean>(false),
        { dispatch } = useContext(appContext)

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }
    function goBack() {
        dispatch({type: 'loadCollection', value: null})
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <button onClick={goBack}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--text-2)">
                        <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                    </svg>
                </button>
                <img src={avatar} alt="" />
                <div>{collection || ''}</div>
            </div>
            <button onClick={toggleMenu}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--text-2)">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
            </button>
            {menuOpen && <CollectionMenu collection={collection} setOpen={setMenuOpen}/>}
        </div>
    )
}