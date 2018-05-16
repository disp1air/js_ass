function BindedConstructor(x, y) {
  this.x = x;
  this.y = y;  
}

let firstChild = new BindedConstructor(5, 7);
let secondChild = new BindedConstructor(2, 3);

console.log(firstChild);
console.log(secondChild);

const obj = {
  x: 123,
  y: 234,
  z: 345  
}

let NextBindedFunc = BindedConstructor.bind(obj, 11, 77);

console.log(NextBindedFunc.prototype);

let firstChild_2 = new NextBindedFunc;
let secondChild_2 = new NextBindedFunc(99, 100);

console.log(firstChild_2);
console.log(secondChild_2);

let NextBindedFunc_2 = BindedConstructor.bind(obj, 33);
let firstChild_3 = new NextBindedFunc_2(777);
let secondChild_3 =new NextBindedFunc_2(999);

console.log(firstChild_3);
console.log(secondChild_3);