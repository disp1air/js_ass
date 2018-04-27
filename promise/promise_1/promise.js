const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result222');
    }, 3000);
});

myFirstPromise
  .then(
    result => {
      console.log('Fulfilled: ', result);
    },
    error => {
        alert('rejected: ', error);
    }
  );