// TODO implement me
import { MessageNode } from './message-conversion'

type CollectionMap = [string, string]

interface Collection {
    name: string
    icon?: string
    latest?: string
    messages?: MessageNode[][]  
}

export function createCollection(name: string) {

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
        .map(([name, data]: CollectionMap) => {
          return {name, latest: JSON.parse(data).latest}
        })
}

export function updateCollection(params: Collection) {
    
    const newCollection = {}

    localStorage.setItem(params.name, JSON.stringify(newCollection))
}

export function deleteCollection(name: string) {
    localStorage.removeItem(name)
}