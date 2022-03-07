import styles from './navbar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
    collection?: string,
    setMessages: Function
}

export default function NavBar({ collection, setMessages }: Props) {

    const router = useRouter()
    function deleteMessages() {
        if(!collection) return

        localStorage.removeItem(collection)
        setMessages([])
        router.push('/notes')
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
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--text-2)">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
            </button>
        </div>
    )
}