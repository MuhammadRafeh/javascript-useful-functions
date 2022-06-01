export const objectToArray = (object: object): Array<object> => Object.keys(object).map(key => ({ [key]: object[key] }));
export const addToArray = (array: Array<any>, whatToAdd?: any, atWhatIndex?: number): Array<any> => {
    const dupArr = [...array];
    dupArr.splice(atWhatIndex, 0, whatToAdd);
    return dupArr;
}

/**
 * Removes the data at this Database location.
 *
 * Any data at child locations will also be deleted.
 *
 * The effect of the remove will be visible immediately and the corresponding
 * event 'value' will be triggered. Synchronization of the remove to the
 * Firebase servers will also be started, and the returned Promise will resolve
 * when complete. If provided, the onComplete callback will be called
 * asynchronously after synchronization has finished.
 *
 * @example
 * ```javascript
 * var adaRef = firebase.database().ref('users/ada');
 * adaRef.remove()
 *   .then(function() {
 *     console.log("Remove succeeded.")
 *   })
 *   .catch(function(error) {
 *     console.log("Remove failed: " + error.message)
 *   });
 * ```
 *
 * @param onComplete Callback called when write to server is
 *   complete.
 * @return Resolves when remove on server is complete.
 */
export const addToArrayAfterSpecificValue = (array: Array<any>, whatToAdd?: any, specificValue?: any): Array<any> => {
    return []
}
