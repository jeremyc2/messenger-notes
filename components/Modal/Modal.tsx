import styles from './modal.module.scss'
import { createPortal } from 'react-dom'
import React, { useEffect, useState } from 'react'

interface Props {
    show?: boolean
    setModalOpen: Function
    children?: JSX.Element
}

export default function Modal({ show = false, setModalOpen, children }: Props) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    function createCollection() {
        setModalOpen(false)
    }

    if(!(mounted && show)) return null
    return createPortal(<div className={show? styles.show: ''} onClick={createCollection}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>, document.body)
}