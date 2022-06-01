export const objToArrOfObj = (object: object): Array<object> => Object.keys(object).map(key => ({ [key]: object[key] }))