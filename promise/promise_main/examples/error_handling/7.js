function doAsync() {
  return Promise.resolve('OK');
}

doAsync()
  .then(
      value => {
          console.log(`Resolved! ${value}`);
          throw new Error('Error!!!');
      },
      reason => {
          console.log(`Rejected! ${reason}`);
      }
  );