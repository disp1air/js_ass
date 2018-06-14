// string iterator
const message = 'Awesome message';
const itrObj = message[Symbol.iterator]();

console.log(itrObj.return);  // undefined
console.log(itrObj.throw);   // undefined