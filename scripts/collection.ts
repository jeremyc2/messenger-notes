import { MessageNode } from './message-conversion'
import { getRandomAvatar, getRandomColor } from './random'

type CollectionMap = [string, string]

export interface Collection {
  name: string
  icon?: string
  color?: string
  latest?: string
  messages?: MessageNode[][]  
}

export function createCollection(name: string) {
  localStorage.setItem(name, JSON.stringify({
    icon: `/animal-avatars/${getRandomAvatar()}1.png`,
    color: getRandomColor()
  }))
}

export function getCollection(name: string) {
  const collection = localStorage.getItem(name)
  if(!collection) return

  return JSON.parse(collection)
}

export function getCollections() {
const collections = Object.entries(localStorage)
  return collections
    .filter(collection => collection[0] !== 'ally-supports-cache')
    .map(([name, value]: CollectionMap) => {
      const data = JSON.parse(value)
      return {name, ...data}
    })
}

export function updateCollection({name, ...data}: Collection) {
  data = {...getCollection(name), ...data}
  localStorage.setItem(name, JSON.stringify(data))
}

export function removeCollection(name: string) {
  localStorage.removeItem(name)
}