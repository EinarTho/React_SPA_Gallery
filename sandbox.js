const axios = require('axios');

async function getData(query, page = 1) {
  const rawData = await axios.get(`https://spa-gallery-server.herokuapp.com/api/${query}/${page}`);
  const stupidArray = rawData.data.results;
  const niceArray = stupidArray.map(element => ({
    url: element.urls.small,
    description: element.alt_description,
  }));
  return niceArray;
}

getData('cat');
