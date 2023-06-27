import Loading from 'components/Loading/Loading';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieReviewsQuery } from 'services/request/apiMovies';

import { ReviesStyled, Author, Content } from './Revies.styled';

const Revies = () => {
  const { movieId } = useParams();
  const { data, isLoading, isError } = useGetMovieReviewsQuery({ movieId });

  const { results } = data ?? [];

  return (
    <>
      {isError && <div>Error...</div>}

      {isLoading ? (
        <Loading />
      ) : results.length === 0 ? (
        <div>No results</div>
      ) : (
        <>
          {results.map(({ id, content, author }) => (
            <ReviesStyled key={id}>
              <Author>{author}</Author>
              <Content>{content}</Content>
            </ReviesStyled>
          ))}
        </>
      )}
    </>
  );
};

export default Revies;
