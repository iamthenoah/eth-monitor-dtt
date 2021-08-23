/* eslint-disable */

/**
 * Sort specified propery in given object T.
 * @param {String} property Property to compare
 */
export const sortBy = <T>(property: string) : (a: T, b: T) => number => {
    return (a: T, b: T) => {
        if ((a as any)[property] < (b as any)[property]) return 1
        else if ((a as any)[property] > (b as any)[property]) return -1
        return 0
    }
}
