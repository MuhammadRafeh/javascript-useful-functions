export const objectValuesToArray = (object: object): Array<any> => Object.keys(object).map(key => object[key])
export const objectKeysToArray = (object: object): Array<any> => Object.keys(object)