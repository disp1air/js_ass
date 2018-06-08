const data = [41, 42, 43];
const itrObj = data[Symbol.iterator]()

console.log(itrObj.next());  // { value: 41, done: false}