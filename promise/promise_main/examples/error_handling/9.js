function doAsync() {
  let p = new Promise((resolve, reject) => {
      setTimeout(() => {
          // промис getAnotherPromise реджектится!
          resolve(getAnotherPromise());  // rejected
      }, 2000);
  });
  return p;
}

// не смотря на то что промис doAsync резолвится, в итоге попадаем во второй колбэк(либо в catch)
doAsync()
  .then(
      () => console.log('Success'),
      () => console.log('Error')
  )