import styles from './collection-item.module.scss'
import { Collection } from '../../scripts/collection'
import getTimeSpan from '../../scripts/time-since'
import Link from 'next/link'

export default function CollectionItem({ name, lastUpdated, icon, latest: summary }: Collection) {
    return <Link href={`/${name}`}>
        <a className={styles.item}>
            <img className={styles.icon} src={icon} alt="" />
            <div className={styles.title}>{name}</div>
            <div className={styles.message}>
                <span>{summary}</span>
                <span>{getTimeSpan(lastUpdated)}</span>
            </div>
        </a>
    </Link>
}