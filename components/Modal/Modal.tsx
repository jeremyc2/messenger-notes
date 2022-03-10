import styles from './modal.module.scss'
import { createPortal } from 'react-dom'
import { ReactNode, useEffect, useState } from 'react'

interface Props {
    show?: boolean
    setModalOpen: Function
    children?: ReactNode[]
}

export default function Modal({ show = false, setModalOpen, children }: Props) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!(mounted && show)) return null
    return createPortal(<div className={show? styles.show: ''}>
        <div className={styles.content} onClick={() => setModalOpen(false)}>
            {children}
        </div>
    </div>, document.body)
}