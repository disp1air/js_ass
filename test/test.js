var assert = require('assert');

describe('tests add function', () => {
  it('should add two numbers', () => {
      let add = (a, b) => a + b;

      assert.equal(add(4, 5), 9);
  });
});
