import styles from '../styles/messages.module.scss'

interface Props {
    messages: string[]
}

export default function MessageInput({ messages }: Props) {
    return (
        <div className={styles.messages}>
            {messages.map((message, index) => {
                return <div key={`message-${index}`} className={styles.message} dangerouslySetInnerHTML={{ __html: message }}></div>
            })}
        </div>
    )
}
