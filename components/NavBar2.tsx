import styles from '../styles/navbar.module.scss'

interface Props {
    title: string
}

export default function NavBar2({ title }: Props) {
    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                {title}
            </div>
            <button>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--text-2)">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
            </button>
        </div>
    )
}