import styles from './messages.module.scss'
import { MessageNode, messageToHTML } from '../../scripts/message-conversion'
import { useEffect, useRef } from 'react'
import { useCSSProp } from '../../scripts/hooks'

interface Props {
    themeColor?: string
    messages?: MessageNode[][]
}

export default function Messages({ themeColor, messages }: Props) {
    const messagesContainer = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if(!messagesContainer.current) return
        messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight
    })
    useCSSProp({property: '--primary-color', value: `var(--${themeColor}-7)`})

    return (
        <div ref={messagesContainer} className={styles.messages}>
            {messages?.map((message, index) => {
                const html: string = messageToHTML(message)
                return <div key={`message-${index}`} className={styles.message} dangerouslySetInnerHTML={{ __html: html }}></div>
            })}
        </div>
    )
}
