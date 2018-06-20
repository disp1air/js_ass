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

doAsync()
  .then(
      function() { console.log('Resolved!'); },
      function() { console.log('Rejected!'); }
  );