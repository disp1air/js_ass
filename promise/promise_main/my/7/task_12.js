const p12_1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Promise data');
    }, 5000);
});

let cancelPromise;
const p12_2 = new Promise((resolve, reject) => {
    console.log('Cancel promise is created');
    cancelPromise = reject;
})

document.querySelector('#btn-resolve-promise').addEventListener('click', () => {
    cancelPromise && cancelPromise('Cancel');
});

Promise.race([p12_1, p12_2])
  .then(data => console.log(data))
  .catch(error => console.error(error))