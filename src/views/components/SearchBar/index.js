import React from 'react';
import LogContainer from '../LogContainer';
import { SearchBarWrapper } from './style';

const SearchBar = props => {
  const { getImages, setQuery } = props;
  return (
    <SearchBarWrapper>
      <h3>Im the SearchBar</h3>
      <input defaultValue="Search" onChange={setQuery} />
      <button onClick={getImages} type="button">GO!</button>
      <LogContainer />
    </SearchBarWrapper>
  );
};

export default SearchBar;
