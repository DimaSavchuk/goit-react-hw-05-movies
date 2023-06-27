import React from 'react';

import {
  List,
  Movie,
  Image,
  Wrapper,
  Title,
  Info,
  ReleaseDate,
  VoteCount,
} from './MoviesList.styled';
import { ROUTES } from 'services/routes';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ id, poster_path, title, vote_count, release_date }) => (
          <Movie
            to={`${ROUTES.MOVIES_ID}/${id}`}
            key={id}
            state={{ from: location }}
          >
            <Image
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
              }}
            />

            <Wrapper>
              <Title>{title}</Title>

              <Info>
                <ReleaseDate>{release_date}</ReleaseDate>
                <VoteCount>Vote count: {vote_count}</VoteCount>
              </Info>
            </Wrapper>
          </Movie>
        ))}
      </List>
    </>
  );
};

export default MoviesList;
