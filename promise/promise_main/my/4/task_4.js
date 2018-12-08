const myPromise = new Promise((resolve, reject) => {  
    setTimeout(() => {
      resolve("Promise Data");  
    }, 3000);
  });
  
  myPromise
    .then(data => console.log(data))
    .catch(error => console.error(error))