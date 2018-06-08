const permissionMap = new Map();
permissionMap.set('admin', {read: true, write: true, del: true});
permissionMap.set('user', {read: true, write: false, del: false});

const itrObj = permissionMap[Symbol.iterator]();

// console.log(itrObj.next());
// {
//   value: ["admin", {read: true, write: true, del: true}],
//   done: false
// }
console.log(itrObj.next().value[1].write);  // true
console.log(itrObj.next().value[1].write);  // false