var assert = require('assert');

describe('promises tests', () => {
  let maybe;
  beforeEach(() => {
    maybe = () => Promise.resolve('cow');
  });

  // it('should be an Object', () => {
  //   const result = maybe();
  //   assert.equal(typeof result, '[Function: Object]');
  // });
  it('should work', (done) => {
    const result = maybe();
    result
    .then((data) => done())
    .catch(done);
  });

  it('should work and return data', (done) => {
    const result = maybe();
    result
    .then((data) => {
      assert.equal(data, 'cow');
      done();
    })
    .catch(done);
  })
});