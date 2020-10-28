import React from 'react';
import LogContainer from '../LogContainer';
import { SearchBarWrapper } from './style';

const SearchBar = () => (
  <SearchBarWrapper>
    <input defaultValue="Search" />
    <LogContainer />
    <h1>Im the SearchBar</h1>
  </SearchBarWrapper>
);

export default SearchBar;
