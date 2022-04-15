import styles from './modal.module.scss'
import { createPortal } from 'react-dom'
import { ReactNode, useEffect, useState } from 'react'
import { modalContext } from '../../contexts'

interface Props {
    show?: boolean
    setModalOpen: Function
    children?: ReactNode
}

// TODO change to dialog HTML Element with showModal()
export default function Modal({ show = false, setModalOpen, children }: Props) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!(mounted && show)) return null

    function closeModal() {
        setModalOpen(false)
    }

    return createPortal(
        <modalContext.Provider value={{modalOpen: false, setModalOpen}}>
            <div className={styles.modal} onClick={closeModal}>
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </modalContext.Provider>, document.body)
}