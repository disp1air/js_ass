const mySet = new Set(['a', 'b', 'c']);

const itrObj = mySet[Symbol.iterator]();
console.log(itrObj.next().value); // a
console.log(itrObj.next().value); // b