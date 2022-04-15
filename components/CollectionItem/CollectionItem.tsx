import styles from './collection-item.module.scss'
import ReactTimeAgo from 'react-time-ago'
import { Collection } from '../../scripts/collection'
import { useContext } from 'react'
import { appContext } from '../../contexts'

export default function CollectionItem({ name, lastUpdated, icon, latest: summary }: Collection) {
    const {dispatch} = useContext(appContext)
    function navigate() {
        dispatch({type: 'loadCollection', value: name})
    }
    return <div onClick={navigate}>
        <a className={styles.item}>
            <img className={styles.icon} src={icon} alt="" />
            <div className={styles.title}>{name}</div>
            <div className={styles.message}>
                <span>{summary}</span>
                <ReactTimeAgo date={lastUpdated} locale="en-US"/>
            </div>
        </a>
    </div>
}