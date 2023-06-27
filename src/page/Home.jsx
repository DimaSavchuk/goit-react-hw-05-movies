import React from 'react';
import { Section, Container } from './Page.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { useGetTrendingMovieQuery } from 'services/request/apiMovies';
import Loading from 'components/Loading/Loading';

const Home = () => {
  const { data, isLoading, isError } = useGetTrendingMovieQuery();
  const { results } = data || {};

  return (
    <Section>
      <Container>
        {isError && <div>Error...</div>}
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <h1>Treanding Today</h1>
            {results !== [] && <MoviesList movies={results} />}
          </>
        )}
      </Container>
    </Section>
  );
};

export default Home;
