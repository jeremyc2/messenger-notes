import styles from './create-collection.module.scss'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export default function CreateCollection() {
    const input = useRef<HTMLInputElement>(null),
        router = useRouter()

    function create() {
        if(!input.current || input.current.value === '') return
        router.push(`/${input.current.value}`)
    }
    return (
        <>
            <label className={styles.label} htmlFor="collection">Collection Name</label>
            <div className={styles.controls}>
                <input ref={input} autoFocus type="text" name='collection' />
                <button onClick={create}>GO!</button>
            </div>
        </>
    )
}