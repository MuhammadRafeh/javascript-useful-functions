/**
 * Converts Object `{a: 1, b: 2}` to Array of Objects `[ {a: 1}, {b: 2} ]`
 *
 * @usage
 * ```javascript
 * const newArr = objectToArray({a: 1, b: 5})
 * console.log('Your new Array of Objects', newArr) // [ {a: 1}, {b: 5} ]
 * ```
 * 
 * @return Array Of Objects
 */
export const objectToArray = (object: object): Array<object> => Object.keys(object).map(key => ({ [key]: object[key] }));

export const addToArrayAtIndex = (array: Array<any>, whatToAdd?: any, index?: number): Array<any> => {
    const dupArr = [...array];
    dupArr.splice(index, 0, whatToAdd);
    return dupArr;
}

export const addToArrayAfterSpecificValue = (array: Array<any>, whatToAdd?: any, specificValue?: any): Array<any> => {
    return []
}
