// arguments + for of
function sum() {
  let s = 0;
  for (const a of arguments) {
      s+= a;
  }
  return s;
}

console.log(sum(1, 2, 3, 4, 5));