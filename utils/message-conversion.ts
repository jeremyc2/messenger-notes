export interface MessageNode {
    type: string,
    value?: string,
    children?: MessageNode[]
}

function convertNodeToJSON(node: Node) {
    const json: MessageNode = { type: ((node as HTMLElement).tagName || 'text').toLowerCase() }
    if(node.nodeValue) {
        json.value = node.nodeValue
    }
    return json
}

function convertJSONToHTML(json: MessageNode): string {
    if(json.type === 'text' && json.value) {
        return json.value
    } else {
        const nodeType = json.type
        return `<${nodeType}>${
            json.children? json.children
                .map(child => convertJSONToHTML(child))
                .join(''): ''
        }<${nodeType}>`
    }
}

function convertJSONToText(json: MessageNode): string {
    if(json.type === 'text' && json.value) {
        return json.value
    } else {
        return json.children? json.children
            .map(child => convertJSONToText(child))
            .join(''): ''
    }
}

export function messageToHTML(message: MessageNode[]) {
    var html: string = ''

    message.map((message) => {
        html += convertJSONToHTML(message)
    })

    return html
}

export function messageToText(message: MessageNode[]) {
    var text: string = ''

    message.map((message) => {
        text += convertJSONToText(message)
    })

    return text
}

export function createMessage(node: Node) {
    return Array.from(node.childNodes).map((node) => {
        var json = convertNodeToJSON(node)
        if(node.childNodes.length > 0) {
            json.children = createMessage(node)
        }
        return json
    })
}
