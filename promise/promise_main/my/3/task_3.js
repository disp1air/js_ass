const myPromise = new Promise((resolve, reject) => {   
    reject('Promise Error');  
  });
  
console.log(myPromise);

myPromise
  .then(data => console.log(data))
  .catch(error => console.error(error))

  
  