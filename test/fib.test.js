// 0 1 1 2 3 5 8 13

var assert = require('assert');

describe('tests for fib', () => {
  it('fib(9) = 34', () => {
    const fib = function(n) {
        if (n <= 1) return n;
        return fib(n - 1) + fib(n - 2);
    }
    assert.equal(fib(9), 34);
  });
});