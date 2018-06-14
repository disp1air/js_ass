const fib = {
  ...
  [Symbol.iterator]() {
    return {
      [Symbol.iterator]() {},
      next() {},
      return(v) {
        return {
          value: v,
          done: true
        };
      }
    }
  }
}

for (let v in fib) {
  console.log(v);
  if (v > 3) break; // the same for throw, return, outer for-of continue
}