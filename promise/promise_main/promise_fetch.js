// https://api.themoviedb.org/3/search/movie?api_key=4f7821834291015d1ed75fbd1dab475b&query=love

function loadData() {
  return  fetch('https://api.icndb.com/jokes/random');
}


loadData()
  .then(data => data.json())
  .then(data => console.log(data.value.joke))
  .catch(error => console.log(error))
