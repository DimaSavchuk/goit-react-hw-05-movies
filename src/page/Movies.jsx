import React, { Suspense } from 'react';

import { useGetMovieDetailsQuery } from 'services/request/apiMovies';
import {
  Section,
  Container,
  AdditionalInfo,
  Cast,
  Revies,
  Additional,
} from './Page.styled';
import Loading from 'components/Loading/Loading';
import AboutMovie from 'components/AboutMovie/AboutMovie';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { ROUTES } from 'services/routes';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';

const Movies = () => {
  const { movieId } = useParams();
  const { data, isLoading, isError } = useGetMovieDetailsQuery({ movieId });

  const location = useLocation();
  const goBackLink = location?.state?.from ?? ROUTES.HOME;

  return (
    <Section>
      <Container>
        {isError && <div>Error...</div>}
        <GoBackBtn path={goBackLink}>Go Back</GoBackBtn>
        {isLoading ? <Loading /> : <AboutMovie movie={data} />}

        <Additional>Additional information</Additional>

        <AdditionalInfo>
          <Cast to={ROUTES.CAST}>Cast</Cast>
          <Revies to={ROUTES.REVIES}>Revies</Revies>
        </AdditionalInfo>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Container>
    </Section>
  );
};

export default Movies;
