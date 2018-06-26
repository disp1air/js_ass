let isLoading = true;
let p = new Promise((resolve, reject) => {
    Promise.resolve('OK');
})
.then(v => {
    throw new Error('ThenError');
})
.catch(e => console.log(`Error: ${e}`))
.finally(() => {
    isLoading = false;
    console.log(isLoading);
});