import styles from '../styles/messages.module.scss'
import { useEffect, useRef } from 'react'

interface Props {
    messages: string[]
}

export default function MessageInput({ messages }: Props) {
    const messagesContainer = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if(!messagesContainer.current) return
        messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight
    })

    return (
        <div ref={messagesContainer} className={styles.messages}>
            {messages.map((message, index) => {
                return <div key={`message-${index}`} className={styles.message} dangerouslySetInnerHTML={{ __html: message }}></div>
            })}
        </div>
    )
}
