import Loading from 'components/Loading/Loading';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieCastQuery } from 'services/request/apiMovies';

import { Cards, Item, Image, Name, Character } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const { data, isLoading, isError } = useGetMovieCastQuery({ movieId });
  const { cast } = data || [];
  return (
    <>
      {isError && <div>Error...</div>}

      {isLoading ? (
        <Loading />
      ) : (
        <Cards>
          {cast.map(({ id, profile_path, name, character }) => (
            <Item key={id}>
              <Image
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${profile_path})`,
                }}
              />
              <Name>{name}</Name>
              <Character>
                <span>Character: </span>
                {character}
              </Character>
            </Item>
          ))}
        </Cards>
      )}
    </>
  );
};

export default Cast;
