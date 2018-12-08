const p7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('my name');
    }, 1000)
})

function onSuccess(data) {
    throw 'Error Message';
    return `${data} Vital`
}

function print(data) {
    console.log(data)
}

p7.then(onSuccess).then(print)