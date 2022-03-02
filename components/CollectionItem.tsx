import styles from '../styles/collection-item.module.scss'
import Link from 'next/link'

interface Props {
    collection: string
}

export default function CollectionItem({ collection }: Props) {
    return <Link href={`/${collection}`}>
        <a className={styles.item}>
            <img className={styles.icon} src="/animal-avatars/antelope1.png" alt="" />
            <div className={styles.title}>{collection}</div>
            <div className={styles.message}>Lorem ipsum dolor sit amet consectetur</div>
        </a>
    </Link>
}