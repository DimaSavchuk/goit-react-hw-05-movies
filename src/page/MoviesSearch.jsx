import React, { useState } from 'react';
import { Section, Container } from './Page.styled';

import { useGetSearchQuery } from 'services/request/apiMovies';

import Loading from 'components/Loading/Loading';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SerchForm/SearchForm';

const MoviesSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = value => {
    setSearchValue(value);
    updateURLQuery(value);
  };

  const updateURLQuery = value => {
    const params = new URLSearchParams(window.location.search);
    params.set('query', value);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  };

  const { data, isLoading, isError } = useGetSearchQuery({
    query: searchValue || '',
  });

  const { results } = data || {};

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSearch} />
        {isError && <div>Error...</div>}
        {isLoading ? (
          <Loading />
        ) : results.length === 0 ? (
          <div>{`No movie(s) were found for this request`}</div>
        ) : (
          <MoviesList movies={results} />
        )}
      </Container>
    </Section>
  );
};

export default MoviesSearch;
