function doAsync() {
  return Promise.resolve('OK');
}

doAsync()
  .then((value) => {
      console.log(`Resolved! ${value}`);
      return 'Nice';
  })
  .then((value) => {
      console.log(`from second then: ${value}`);
  });