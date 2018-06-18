const arr = [];
const iterator = arr[Symbol.iterator]();
console.log(iterator[Symbol.iterator]() === iterator);