import styles from './collection-item.module.scss'
import { Collection } from '../../scripts/collection'
import Link from 'next/link'


export default function CollectionItem({ name, icon, latest: summary }: Collection) {
    return <Link href={`/${name}`}>
        <a className={styles.item}>
            <img className={styles.icon} src={icon} alt="" />
            <div className={styles.title}>{name}</div>
            <div className={styles.message}>{summary}</div>
        </a>
    </Link>
}