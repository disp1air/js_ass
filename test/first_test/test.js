var assert = require('assert');

describe('tests for curring', () => {
    it('should add two numbers', () => {
        let func = (a, b) => a + b;

        assert.equal(func(4, 5), 9);
    });
});
