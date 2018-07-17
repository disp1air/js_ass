// https://getinstance.info/articles/javascript/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hel/

// Обработчик reject в функции promise.then возвращает успешно завершенное обещание.

function doAsync() {
  return Promise.reject('erty');  
}

doAsync()
  .then(() => console.log('success'),
        () => 'some returned info')
  .then(data => console.log(`success - ${data}`),
        err => console.log(err));
