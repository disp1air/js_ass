var assert = require('assert');

describe('tests for currying', () => {
  it('should be called like add(num1)(num2)', () => {
    const add = function (a) {
      return function (b) {
        return a + b;
      };
    };

    assert.equal(add(2)(3), 5);
  });

  it('should take random number of digits', () => {
    const add = function(a) {
      let result = a;
      const main = function(b) {
        if(b) {
          result += b;
          return main;
        } else {
          return result;
        }
      };

      return main;
    };

    assert.equal(add(1)(4)(), 5);
    assert.equal(add(2)(3)(6)(), 11);
    assert.equal(add(1)(3)(6)(7)(), 17);
  });
});
