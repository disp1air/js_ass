const p10_1 = new Promise((resolve, reject) => {
    console.log('promise 1 is created');
    setTimeout(function() {
        resolve({name: 'Anna'})
    }, 2000);
});

const p10_2 = new Promise((resolve, reject) => {
    console.log('promise 2 is created');
    setTimeout(function() {
        reject('Promise error');
    }, 3000);
});

const p10 = Promise.all([p10_1, p10_2])
  .then(values => console.log({...values[0], ...values[1]}))
  .catch(err => console.log(err));