const message = 'Awesome message';
const itrObj = message[Symbol.iterator]()

console.log(itrObj.next().value);  // A
console.log(itrObj.next().value);  // w