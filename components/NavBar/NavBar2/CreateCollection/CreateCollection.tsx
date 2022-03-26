import styles from './create-collection.module.scss'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { createCollection } from '../../../../scripts/collection'

export default function CreateCollection() {
    const input = useRef<HTMLInputElement>(null),
        router = useRouter()

    function create() {
        const name = input.current?.value
        if(!name || name === '') return
        createCollection(name)
        router.push(`/${input.current.value}`)
    }
    return (
        <>
            <label className={styles.label} htmlFor="collection">Collection Name</label>
            <div className={styles.controls}>
                <input ref={input} autoFocus autoComplete='off' type="text" name='collection' />
                <button onClick={create}>GO!</button>
            </div>
        </>
    )
}