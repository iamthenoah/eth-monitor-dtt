/* eslint-disable */

import * as TimeAgo from 'timeago.js'

export type Nullable<T> = T | null
 
export const randomInt = (min: number, max: number) : number => {
    return Math.floor(Math.random() * (max - min) + min)
}

export const timeAgo = (timestamp: number) : string => {
    return TimeAgo.format(timestamp)
}

/**
 * Used to change text from `hereIsAnExample` to `Here is an example`.
 * @param {string} camelCased text.
 */
export const unCamelCaseString = (camelCased: string) : string => {
    // neat replacement trick
    const result = camelCased.replace(/([A-Z])/g, ' $1')
    return result.charAt(0).toUpperCase() + result.slice(1)
}

/**
 * Sort specified propery in given object T.
 * @param {T} property Property to compare.
 */
export const sortBy = <T extends Record<string, unknown>>(property: keyof T) : (a: T, b: T) => number => {
    return (a: T, b: T) => {
        if (a[property] < b[property]) return 1
        else if (a[property] > b[property]) return -1
        return 0
    }
}
