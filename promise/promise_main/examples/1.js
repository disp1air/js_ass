function doAsync() {
  let p = new Promise((resolve, reject) => {
      console.log('in promise');
      setTimeout(() => {
          console.log('...resolving');
          resolve();
      }, 2000);
  });
  return p;
}

let promise = doAsync();