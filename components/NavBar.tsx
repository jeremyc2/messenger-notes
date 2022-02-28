import styles from '../styles/navbar.module.scss'

interface Props {
    setMessages: Function
}

export default function NavBar({ setMessages }: Props) {
    function deleteMessages() {
        localStorage.removeItem('messages')
        setMessages([])
    }
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <img src="/animal-avatars/antelope.png" alt="" />
                <div>Notes</div>
            </div>
            <button onClick={deleteMessages}>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="var(--text-2)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 3h3v1h-1v9l-1 1H4l-1-1V4H2V3h3V2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1zM9 2H6v1h3V2zM4 13h7V4H4v9zm2-8H5v7h1V5zm1 0h1v7H7V5zm2 0h1v7H9V5z"/>
                </svg>
            </button>
        </div>
    )
}