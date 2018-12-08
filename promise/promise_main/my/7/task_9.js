function getPromiseData(promise) {
    promise.then(data => console.log(data));
}

const o = {
    name: 'Anna'
};

getPromiseData(Promise.resolve(o))