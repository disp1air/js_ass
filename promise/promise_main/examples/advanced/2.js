// https://getinstance.info/articles/javascript/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hel/

// Обработчик reject в функции promise.then возвращает успешно завершенное обещание.

function doAsync() {
  return Promise.reject('rejected info');  
}

doAsync()
  .then(() => console.log('success'),
        () => 'some returned info')
  .then(data => console.log(`success - ${data}`),
        err => console.log(err));      

// Если нужно обработать ошибку, возникающую в reject,
// то не просто возвращаете значение, а возвращаете отклоненное обещание

doAsync()
.then(() => console.log('success'),
      () => Promise.reject('some returned info'))
.then(data => console.log(`success - ${data}`),
      err => console.log(err));

// promise.then возвращает исключения в отклоненное обещание
// Это означает, что можно в обработчике (успеха или неудачи)
// вернуть отклоненное обещание, бросив исключение

doAsync()
.then(() => console.log('success'),
      () =>  {
        throw new Error('some description of :(')
      })
.then(data => console.log(`success - ${data}`),
      err => console.log(`=== ${err}`));
