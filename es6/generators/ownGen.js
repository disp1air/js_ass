function generator() {
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = {
                        value: undefined, done: true
                    };
                    return result;
                }
            };
        }
    };
}

const y = generator();
console.log(y);

function* generator2() {
  console.log('start');
  yield;
  console.log('finish');
}

const x = generator2();
console.log(x);

console.log(x.next());