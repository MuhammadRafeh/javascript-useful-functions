/**
 * Converts Object `{a: 1, b: 2}` to Array of Objects `[ {a: 1}, {b: 2} ]`
 *
 * @usage
 * ```javascript
 * const newArr = objectToArray({a: 1, b: 5})
 * console.log(newArr) // [ {a: 1}, {b: 5} ]
 * ```
 * 
 * @return Array Of Objects
 */
export const objectToArray = (object: object): Array<object> => Object.keys(object).map(key => ({ [key]: object[key] }));

/**
 * Adds value of any data type at given index in Array
 *
 * @usage
 * ```javascript
 * const newArr = addToArrayAtIndex([4,6,5], 'Hello', 1)
 * console.log(newArr) // [ 4, 'Hello', 6, 5 ]
 * ```
 * 
 * @return Array
 */
export const addToArrayAtIndex = (array: Array<any>, whatToAdd?: any, index?: number): Array<any> => {
    const dupArr = [...array];
    dupArr.splice(index, 0, whatToAdd);
    return dupArr;
}

/**
 * Adds value after/before array's specific value in the Array
 *
 * @usage
 * ```javascript
 * const newArr = addToArrayBeforeOrAfterSpecificValue([1,2,3], 'i want to add this', 2, 1) // 0 indicates before and 1 indicates after
 * console.log(newArr) // [ 1, 2, 'i want to add this', 3 ]
 * ```
 * 
 * @return Array | -1 (incase if specificValue not exists in given array)
 */
export const addToArrayBeforeOrAfterSpecificValue = (array: Array<any>, whatToAdd?: any, specificValue?: any, addAfterOrBefore?: number): Array<any> | number => {
    const index = array.findIndex(value => value == specificValue);
    if (index == -1) return -1;
    const dupArr = [...array];
    dupArr.splice(addAfterOrBefore ? index + 1 : index, 0, whatToAdd);
    return dupArr;
}

export const convertObjectToClass = (array: Array<any>, whatToAdd?: any, specificValue?: any, addAfterOrBefore?: number): Array<any> | number => {
  return 0;
}