import React from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <CardContainer />
      <NavMenu />
      <Footer />
    </div>
  );
}

export default App;
