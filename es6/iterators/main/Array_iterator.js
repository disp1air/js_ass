const priority = ['High', 'Normal', 'Low'];
const itrObj = priority[Symbol.iterator]();

itrObj.next();
itrObj.next();
itrObj.next();
console.log(itrObj.next());  // {value: undefined, done: true}