let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 5000);
});

Promise.race([promise1, promise2])
    .then(
        val => console.log(`Success: ${val}`),
        reason => console.log(`Error: ${reason}`)
    );