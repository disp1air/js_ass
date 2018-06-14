const iterableObj = {
  0: 'Hello',
  1: 'World of',
  2: 'Iterators',
  [Symbol.iterator]() {
    const length = Object.keys(this).length;
    let index = 0;
    return {
      next: () => {
        const done = index >= length;
        const value = this[index++];
        return { value, done };
      }
    };
  }
}

console.log(Array.from(iterableObj));  
// ["Hello", "World of", "Iterators"]