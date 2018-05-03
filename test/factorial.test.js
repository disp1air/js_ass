var assert = require('assert');

describe('tests for recursions', () => {
  it('factorial', () => {
    const factorial = function(n) {
        if (n == 1) return 1;
        return n * factorial(n - 1);
    }
    assert.equal(factorial(5), 120);
  });
});