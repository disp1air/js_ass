Promise.resolve(2)
.then(() => {}, () => {})
.then(v => console.log(v));

Promise.resolve(2)
.finally(() => {})
.then(v => console.log(v));

Promise.reject(3)
.then(() => {}, () => {})
.then(v => console.log(v));

Promise.reject(3)
.finally(() => {})
.then(null, v => console.log(v));

Promise.reject(3)
.finally(() => {console.log('from 2 finally')})
.then(null, v => console.log(v));