// !!!???
function doAsync() {
  return Promise.resolve(1);
}

function doSync() {
  throw new Error('Exception in doSync');
}

(function main() {
  return Promise.resolve()
      .then(() => {
          doSync();
          return doAsync()
              .then(value => console.log(`Resolved ${value}`))
              .catch(reason => console.log(`Rejected ${reason}`));
      })
})()
.then(value => console.log(value))
.catch(error => console.log(error));