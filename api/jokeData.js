const endpoint = 'https://v2.jokeapi.dev/joke/Programming,Pun,Spooky?blacklistFlags=religious,political,racist,sexist&type=twopart';

const getJoke = () => new Promise((resolve, reject) => {
  fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getJoke;
