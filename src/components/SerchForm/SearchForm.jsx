import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  SearchFormStyled,
  SearchBtn,
  SearchFormInput,
} from './SearchForm.styled';

import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = event => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchInput);
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <SearchFormInput
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={searchInput}
        onChange={handleChange}
      />

      <SearchBtn type="submit">
        <FiSearch size="15px" />
      </SearchBtn>
    </SearchFormStyled>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
