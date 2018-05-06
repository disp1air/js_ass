const factorial = function(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

const alertfunc = function() {
  alert('waiting');
}

const t0 = performance.now();
alertfunc();
const t1 = performance.now();

console.log('Took ', t1 - t0);