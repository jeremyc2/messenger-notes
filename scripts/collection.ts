import { MessageNode } from './message-conversion'

type CollectionMap = [string, string]

interface Collection {
  name: string
  icon?: string
  latest?: string
  messages?: MessageNode[][]  
}

export function createCollection(name: string) {
  localStorage.setItem(name, JSON.stringify({}))
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

export function updateCollection(params: Collection) {
  const {name, ...data} = params

  localStorage.setItem(name, JSON.stringify(data))
}

export function removeCollection(name: string) {
  localStorage.removeItem(name)
}