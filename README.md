# javascript-useful-functions

Javascript based useful functions like conversion from object to list

## Installation

```sh
npm install javascript-useful-functions
```

## Usage

```js
import { objectToArray, addToArrayAtIndex, addToArrayBeforeOrAfterSpecificValue } from "javascript-useful-functions";

const newArr = objectToArray({a: 1, b: 5})
newArr // [ {a: 1}, {b: 5} ]

const newArr = addToArrayAtIndex([4,6,5], 'Hello', 1)
newArr // [ 4, 'Hello', 6, 5 ]

const newArr = addToArrayBeforeOrAfterSpecificValue([1,2,3], 'i want to add this', 2, 1)
newArr // [ 1, 2, 'i want to add this', 3 ]
```

## Contributing

Contribute to this module!

## License

MIT
