function doAsync() {
  let p = new Promise((resolve, reject) => {
      console.log('in promise');
      throw new Error('Exception in executor');
      setTimeout(() => {
          console.log('Resolving');
          resolve('OK');
      }, 2000);
  });
  return p;
}

doAsync()
  .then(value => console.log(`Resolved! ${value}`))
  .catch(reason => console.log(`in catch: Rejected! ${reason}`));