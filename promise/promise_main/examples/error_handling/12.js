function doAsync() {
  return Promise.resolve(1);
}

function doSync() {
  throw new Error('Exception in doSync');
}

(function main() {
  doSync();
  return doAsync()
      .then(value => console.log(`Resolved ${value}`))
      .catch(reason => console.log(`Rejected ${reason}`));
})()
.then(value => console.log(value))
.catch(error => console.log(error));

// Uncaught Error: Exception in doSync 
// ошибка в синхронной функции.
// до первых then и catch мы даже не дойдем, т.к. ошибка произойдет раньше
// во вторые then и catch мы не попадем т.к. нет возврата промиса

// чтобы исправить такую ситуацию можно применить try-catch
(function main() {
  try {
      doSync();
      return doAsync()
          .then(value => console.log(`Resolved ${value}`))
          .catch(reason => console.log(`Rejected ${reason}`));
  } catch(err) {
      return Promise.reject(err.message);
  }
})()
.then(value => console.log(value))
.catch(error => console.log(error));