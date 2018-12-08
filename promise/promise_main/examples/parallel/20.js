function doAsync1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 3000);
    });
}

function doAsync2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(2);
        }, 5000);
    });
}

Promise.all([doAsync1(), doAsync2()])
    .then(
        val => console.log('Success'),
        reason => console.log(`Error: ${reason}`)
    );