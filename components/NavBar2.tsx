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
        </div>
    )
}