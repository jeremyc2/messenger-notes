import styles from './notepage-section.module.scss'
import NavBar from '../../components/NavBar'
import Messages from '../../components/Messages'
import MessageInput from '../../components/MessageInput'
import { MessageNode } from '../../scripts/message-conversion'
import { Collection, getCollection } from '../../scripts/collection'
import { useContext, useEffect, useState } from 'react'
import { appContext } from '../../pages'

export default function NotepageSection() {
    const [messages, setMessages] = useState<MessageNode[][]>(),
      [collection, setCollection] = useState<string>(),
      [avatar, setAvatar] = useState<string>(),
      [themeColor, setThemeColor] = useState<string>(),
      { activeCollection } = useContext(appContext)

    useEffect(() => {
      if(!activeCollection) return

      let tempCollection = activeCollection

      setCollection(tempCollection)

      const collectionData = getCollection(tempCollection)
      if(!collectionData) return

      const {icon, messages, color}: Collection = collectionData
      setAvatar(icon)
      setMessages(messages)
      setThemeColor(color)

    }, [activeCollection])
    return (
      activeCollection?
      <div className={styles.main}>
        <NavBar collection={collection} avatar={avatar} />
        <Messages themeColor={themeColor} messages={messages} />
        <MessageInput collection={collection} setMessages={setMessages} />
      </div> : null
    )
}