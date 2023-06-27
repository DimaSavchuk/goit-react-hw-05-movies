import React from 'react';
import { format, parseISO } from 'date-fns';

import {
  AboutMovieStyled,
  Image,
  Info,
  Title,
  Release,
  Score,
  Overview,
  Ganres,
  Wrapper,
  GanresItem,
} from './AboutMovie.styled';

const AboutMovie = ({ movie }) => {
  const {
    title,
    poster_path,
    status,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie ?? {};

  let percent = Number(vote_average) * 10;

  return (
    <AboutMovieStyled>
      <Image
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
        }}
      />

      <Wrapper>
        <Info>
          <Title>{title}</Title>

          <Release>
            <div>
              <span>Status: </span>
              {status}
            </div>
            <div>
              <span>Release date: </span>
              {format(parseISO(release_date), 'MMM dd yyyy')}
            </div>
          </Release>

          <Score>
            <span>User score: </span>
            {`${Math.round(percent)}%`}
          </Score>

          <Overview>
            <span>Overview: </span>
            {overview}
          </Overview>

          <Ganres>
            <span>Ganres: </span>
            {genres.map(({ id, name }) => (
              <GanresItem key={id}>
                <div>{name}</div>
              </GanresItem>
            ))}
          </Ganres>
        </Info>
      </Wrapper>
    </AboutMovieStyled>
  );
};

export default AboutMovie;
