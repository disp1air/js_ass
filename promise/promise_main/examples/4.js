function doAsync() {
  return Promise.resolve('Some value');
}

doAsync()
  .then(
      function(value) { console.log(`Resolved! ${value}`); },
      function(value) { console.log(`Rejected! ${value}`); }
  );