import styles from './modal.module.scss'
import { createPortal } from 'react-dom'
import { ReactNode, useEffect, useState } from 'react'

interface Props {
    show?: boolean
    setModalOpen: Function
    children?: ReactNode
}

export default function Modal({ show = false, setModalOpen, children }: Props) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!(mounted && show)) return null

    function createCollection() {
        setModalOpen(false)
    }

    return createPortal(<div className={styles.modal} onClick={createCollection}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>, document.body)
}