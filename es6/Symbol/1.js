const mySymbol = Symbol('some car');

const myObject = {
  name: 'BMW'
};

myObject[mySymbol] = 'This is a car';

console.log(myObject[mySymbol]);