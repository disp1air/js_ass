const arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => {
  return sum + current;
});

console.log(result);