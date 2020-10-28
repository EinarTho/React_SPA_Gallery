import React, { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import SearchBar from './components/SearchBar';

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

function App() {
  const [imageArray, setImages] = useState();
  const [searchQuery, setQuery] = useState();

  const updateQuery = event => {
    console.log(event.target.value);
    setQuery(event.target.value);
  };

  const getImages = async () => {
    const newArray = await getData(searchQuery);
    console.log(searchQuery);
    setImages(newArray);
  };

  return (
    <div className="App">
      <Header test={searchQuery} />
      <SearchBar getImages={getImages} imageArray={imageArray} setQuery={updateQuery} />
      <CardContainer />
      <NavMenu />
      <Footer />
      <h1>{searchQuery}</h1>
    </div>
  );
}

export default App;
