export const getMovie = () => {
  return fetch("https://swapi.co/api/films")
    .then(response => response.json())
    .then(results => results)
    .catch(error => console.log(error))
}