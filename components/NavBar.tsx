import styles from '../styles/navbar.module.scss'
import Link from 'next/link'

interface Props {
    collection?: string,
    setMessages: Function
}

export default function NavBar({ collection, setMessages }: Props) {

    function deleteMessages() {
        if(!collection) return

        localStorage.removeItem(collection)
        setMessages([])
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <Link href="/notes">
                    <a>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--text-2)">
                            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
                        </svg>
                    </a>
                </Link>
                <img src="/animal-avatars/antelope1.png" alt="" />
                <div>{collection || ''}</div>
            </div>
            <button onClick={deleteMessages}>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="var(--text-2)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z"/>
                </svg>
            </button>
        </div>
    )
}