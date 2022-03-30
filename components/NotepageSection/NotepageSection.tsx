import styles from '../styles/messenger.module.scss'
import NavBar from '../../components/NavBar'
import Messages from '../../components/Messages'
import MessageInput from '../../components/MessageInput'
import { MessageNode } from '../../scripts/message-conversion'
import { Collection, getCollection } from '../../scripts/collection'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function NotepageSection() {
    const [messages, setMessages] = useState<MessageNode[][]>(),
    [collection, setCollection] = useState<string>(),
    [avatar, setAvatar] = useState<string>(),
    [themeColor, setThemeColor] = useState<string>(),
    router = useRouter(),
    defaultCollection = 'Notes'

    useEffect(() => {
    if(!router.isReady) return

    let tempCollection
    if(router.query.slug) {
        tempCollection = Array.from(router.query.slug).join(' ')
    } else {
        tempCollection = defaultCollection
    }

    setCollection(tempCollection)

    const collectionData = getCollection(tempCollection)
    if(!collectionData) return

    const {icon, messages, color}: Collection = collectionData
    setAvatar(icon)
    setMessages(messages)
    setThemeColor(color)

    }, [router.isReady])
    return (
      <div className={styles.main}>
        <NavBar collection={collection} avatar={avatar} />
        <Messages themeColor={themeColor} messages={messages} />
        <MessageInput collection={collection} setMessages={setMessages} />
      </div>
    )
}