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
            resolve(2);
        }, 5000);
    });
}

Promise.all([doAsync1(), doAsync2()])
    .then(
        val => console.log(val[0] + val[1]),
        reason => console.log(`Error: ${reason}`)
    );