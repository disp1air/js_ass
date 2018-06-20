function doAsync() {
  return Promise.resolve('OK');
}

doAsync()
  .then(value => {
      console.log(`Resolved! ${value}`);
      doAsync()
          .then(value => {
              console.log(value);
          });
  });

// Получился своего рода callback hell
// лучше всего вернуть результат этой асинхронной операции
doAsync()
  .then(value => {
      console.log(`Resolved! ${value}`);
      return doAsync(); // return Promise
  })    
  .then(value => {
      console.log(value);
  });