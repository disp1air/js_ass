let isLoading = true;
let p = new Promise((resolve, reject) => {
    throw new Error('Database Error');
})
.then(v => console.log(`Resolved: ${v}`))
.catch(e => console.log(`Rejected: ${e}`))
.finally(() => {
    isLoading = false;
    console.log(isLoading);
});