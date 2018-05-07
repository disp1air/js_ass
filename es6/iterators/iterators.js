let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

for (let xman of xmen) {
  console.log(xman);
}

console.log(typeof xmen[Symbol.iterator]); // function

let iterator = xmen[Symbol.iterator](); // iterator with next method

console.log(iterator.next()); // {value: "Cyclops", done: false}
console.log(iterator.next()); // {value: "Wolverine", done: false}
console.log(iterator.next()); // {value: "Rogue", done: false}
console.log(iterator.next()); // {value: , done: false}

