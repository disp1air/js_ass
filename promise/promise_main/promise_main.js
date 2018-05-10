// https://api.themoviedb.org/3/search/movie?api_key=4f7821834291015d1ed75fbd1dab475b&query=love

// function loadData() {
//   console.log('load data');
  
//   let promise = new Promise((resolve, reject) => {
//     fetch('https://api.themoviedb.org/3/search/movie?api_key=4f7821834291015d1ed75fbd1dab475b&query=love')
//       .then(data => resolve(data))
//       .catch(error => console.error(error))
//   });

//   return promise;
// }

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
  .then(data => console.log(data))
  .catch(error => console.log(error))

