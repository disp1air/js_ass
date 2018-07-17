Promise.resolve().then(function() {
  console.log('promise1');
}).then(function(d) {
  console.log(`promise2 - ${d}`);
});