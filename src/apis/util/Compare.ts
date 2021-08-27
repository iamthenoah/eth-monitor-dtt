/* eslint-disable */

/**
 * Sort specified propery in given object T.
 * @param {String} property Property to compare
 */
export const sortBy = <T extends Record<string, unknown>>(property: keyof T) : (a: T, b: T) => number => {
    return (a: T, b: T) => {
        if (a[property] < b[property]) return 1
        else if (a[property] > b[property]) return -1
        return 0
    }
}
