const a = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'reolve_res');
});

//a.then(data => console.log(data), err => console.error(err));

setTimeout(() => {
    a.then((data) => console.log(data));
}, 1000);