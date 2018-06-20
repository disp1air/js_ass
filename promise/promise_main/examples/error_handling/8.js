function doAsync() {
  return Promise.reject('NOT_OK');
}

doAsync()
  .catch(
      reason => {
          console.log(`Rejected!!! ${reason}`)
      }
  );