import * as TimeAgo from 'timeago.js'

export const randomInt = (min: number, max: number) : number => {
    return Math.floor(Math.random() * (max - min) + min)
}

export const timeAgo = (timestamp: number) : string => {
    return TimeAgo.format(timestamp)
}

export const unCamelCaseString = (camelCased: string) : string => {
    // neat replacement trick
    const result = camelCased.replace(/([A-Z])/g, ' $1')
    return result.charAt(0).toUpperCase() + result.slice(1)
}
