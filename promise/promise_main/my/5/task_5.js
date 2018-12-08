const myPromise = new Promise((resolve, reject) => {  
    setTimeout(() => {
      resolve("Promise Data");  
    }, 3000);
  });
  
  myPromise
    .then(data => console.log(data))
    .catch(error => console.error(error))
  
const handlePromise = {
  promise: null,
  resolve: null,
  reject: null,
  onSuccess(paramName) {
    console.log(`Promise is resolved with data: ${paramName}`);
  },
  onError(paramName) {
      console.log(`Promise is rejected with error: ${paramName}`)
  }    
}

document.querySelector('#btn-create-promise').addEventListener('click', () => {
    handlePromise.promise = new Promise((resolve, reject) => {
        console.log('Promise is created');
        handlePromise.resolve = resolve;
        handlePromise.reject = reject;
    })
    .then((handlePromise.onSuccess))
    .catch((handlePromise.onError))
})

document.querySelector('#btn-resolve-promise').addEventListener('click', () => {
    handlePromise.resolve && handlePromise.resolve('Some Data');
})

document.querySelector('#btn-reject-promise').addEventListener('click', () => {
    handlePromise.reject && handlePromise.reject('Error message');
})
