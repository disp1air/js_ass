const myPromise = new Promise((resolve, reject) => {
  resolve('Promise Data');  
//   setTimeout(() => {
//     resolve("data2");  
//   }, 0);
});

myPromise
  .then(data => console.log(data))
  .catch(error => console.error(error))


