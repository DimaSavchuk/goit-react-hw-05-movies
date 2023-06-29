import React, { useEffect, useState } from 'react';
import { Section, Container } from './Page.styled';

import { useGetSearchQuery } from 'services/request/apiMovies';

import Loading from 'components/Loading/Loading';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SerchForm/SearchForm';
import { useSearchParams } from 'react-router-dom';

const MoviesSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const queryFromParams = searchParams.get('query') ?? '';
    setQuery(queryFromParams);
  }, [searchParams]);

  const handleSearch = value => {
    setSearchValue(value);
    updateURLQuery(value);
  };

  const updateURLQuery = value => {
    setSearchParams({ query: value });
  };

  const { data, isLoading, isError } = useGetSearchQuery({
    query: searchValue || query || '',
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
