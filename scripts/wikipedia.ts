interface Props {
    topic: string
    [key: string]: any
}

function buildQuerystring(params: {}): string {
    return Object.entries(params).reduce((prev, [currKey, currVal]) => {
        return `${prev}&${currKey}=${currVal}`
    }, '').substring(1)
}

function getSummary({topic, ...options}: Props) {
    const queryParams = {
        action: 'query',
        format: 'json',
        prop: 'extracts',
        titles: topic,
        redirects: 1,
        formatversion: 2,
        exintro: 1,
        explaintext: 1,
        ...options
    }
    const url = `https://en.wikipedia.org/w/api.php?${buildQuerystring(queryParams)}`
    return fetch(url)
        .then(res => res.json())
        .then(json => json.query.pages[0].extract)
}

export default getSummary