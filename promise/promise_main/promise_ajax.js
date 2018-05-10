function loadData() {
  console.log("...load data");

  let promise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    
      request.open('GET', 'https://api.icndb.com/jokes/random');
      request.onload = () => {
        if (request.status === 200) {
          resolve(request.response); // we got data here, so resolve the Promise
        } else {
          reject(Error(request.statusText)); // status is not 200 OK, so reject
        }
      };
    
      request.onerror = () => {
        reject(Error('Error fetching data.')); // error occurred, reject the  Promise
      };
    
      request.send(); // send the request
  });

  return promise;
}

loadData()
  .then(data => console.log(JSON.parse(data).value.joke))
  .catch(error => console.log(error))

