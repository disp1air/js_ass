function arrayIterator(data) {
  let currentIndex = 0;
  return {
    next() {
      const done = (currentIndex >= data.length);
      const value = !done ? data[currentIndex++] : undefined;
      return { value, done };  
    }
  };
}

const itrObj = arrayIterator([41, 42, 43]);
itrObj.next();
itrObj.next();
itrObj.next();
console.log(itrObj.next());   // { value: undefined, done: true}