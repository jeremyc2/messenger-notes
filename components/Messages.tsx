import styles from '../styles/messages.module.scss'
import { useEffect, useRef } from 'react'
import { messageToHTML } from '../utils/message-conversion'
import { MessageNode } from '../utils/message-conversion'

interface Props {
    messages: MessageNode[][]
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
                const html: string = messageToHTML(message)
                return <div key={`message-${index}`} className={styles.message} dangerouslySetInnerHTML={{ __html: html }}></div>
            })}
        </div>
    )
}
