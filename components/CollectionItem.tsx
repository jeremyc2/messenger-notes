import styles from '../styles/collection-item.module.scss'
import Link from 'next/link'

interface Props {
    name: string,
    lastMessage: string
}

export default function CollectionItem({ name, lastMessage }: Props) {
    return <Link href={`/${name}`}>
        <a className={styles.item}>
            <img className={styles.icon} src="/animal-avatars/antelope1.png" alt="" />
            <div className={styles.title}>{name}</div>
            <div className={styles.message}>{lastMessage}</div>
        </a>
    </Link>
}