function doAsync() {
  let p = new Promise((resolve, reject) => {
      console.log('in promise');
      setTimeout(() => {
          resolve('OK');
       //   reject('NOT OK');
      }, 2000);
  });
  return p;
}

doAsync()
  .then(
      function(value) { console.log(`Resolved! ${value}`); },
      function(value) { console.log(`Rejected! ${value}`); }
  );