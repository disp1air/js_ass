// можно создать свой собственный итератор
function arrayIterator(data) {
  let currentIndex = 0;
  return {
    next() {
      const done = (currentIndex >= data.length);
      const index = currentIndex;
      const value = !done ? data[currentIndex++] : undefined;
      return { value, index, done };
    }
  };
}

const itrObj = arrayIterator([41, 42, 43]);
console.log(itrObj.next());   // { value: 41, index: 0, done: false}