let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(22);
    }, 1000);
});

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(11);
    }, 1000);
});

Promise.race([promise2, promise1])
    .then(
        val => console.log(`Success: ${val}`),
        reason => console.log(`Error: ${reason}`)
    );