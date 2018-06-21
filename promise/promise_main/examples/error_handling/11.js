function doAsync() {
  return Promise.resolve('OK');
}

doAsync()
  .then(value => {
      console.log(`Resolved! ${value}`);
      throw new Error('Errror!!!');
  })
  .catch(reason => {
      console.log(`Rejected! ${reason}`);
  });