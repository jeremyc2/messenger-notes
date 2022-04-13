import styles from './create-collection.module.scss'
import React, { useContext, useRef } from 'react'
import { createCollection } from '../../../../scripts/collection'
import { appContext } from '../../../../pages'

export default function CreateCollection() {
    const input = useRef<HTMLInputElement>(null),
        { dispatch } = useContext(appContext)

    function create() {
        const name = input.current?.value
        if(!name || name === '') return
        createCollection(name)
        dispatch({type: 'loadCollection', value: input.current.value})
    }
    function handleKeyUp(e: React.KeyboardEvent) {
        if(e.key === 'Enter') {
            create()
        }
    }
    return (
        <>
            <label className={styles.label} htmlFor="collection">Collection Name</label>
            <div className={styles.controls}>
                <input ref={input} onKeyUp={handleKeyUp} autoFocus autoComplete='off' type="text" name='collection' />
                <button onClick={create}>GO!</button>
            </div>
        </>
    )
}