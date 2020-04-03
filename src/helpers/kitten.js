const fetchKitten = () => {
  return fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
      return data[0].url;
    });
};

export default fetchKitten;
