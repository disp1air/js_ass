function doAsync() {
  return Promise.resolve(123);
}

// doAsync()
//   .then(() => {
//     console.log(1);  
//   });

// console.log('a');

// doAsync()
//   .then(() => {
//     console.log(2);
//   });

// setTimeout(() => {
//   console.log('h');  
// }, 0);

// doAsync()
//   .then(() => {
//     console.log(3);  
//   });

//   console.log('b');

doAsync()
  .then(() => {
    console.log(1);  
    Promise.resolve(2);
    console.log(3);  
  })
  .then(data => {
    console.log(data);  
  })