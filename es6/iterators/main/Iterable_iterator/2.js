const arr = [1, 2];
const iterator = arr[Symbol.iterator]();

for (const v of iterator) {
    console.log(v);
    break;
}

for (const v of iterator) {
    console.log(v);
}