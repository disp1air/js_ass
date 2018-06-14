const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

for (let p of promises) {
  console.log(p);
}

const newPromises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

(async function() {
  for await(let p of newPromises) {
    console.log(p);
  }
})();