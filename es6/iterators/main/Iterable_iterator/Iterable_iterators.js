const idGenerator = {
  currentNumber: 0,

  // making iterator iterable
  [Symbol.iterator]() {
      return this;
  },

  next() {
      return {
          value: this.currentNumber++,
          done: false
      }
  }
};

const itrObj = idGenerator[Symbol.iterator]();

console.log(itrObj === idGenerator);  // true
console.log(itrObj.next().value);     // 0
console.log(itrObj.next().value);     // 1