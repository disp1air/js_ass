Promise.resolve(1)
  .then(Promise.resolve(2))
  .then(data => console.log(data));