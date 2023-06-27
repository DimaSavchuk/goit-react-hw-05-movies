import Loading from 'components/Loading/Loading';
import NotFound from 'page/NotFound';
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'services/routes';

const Home = lazy(() => import('../../page/Home'));
const MoviesSearch = lazy(() => import('../../page/MoviesSearch'));
const Movies = lazy(() => import('../../page/Movies'));

const Header = lazy(() => import('../Header/Header'));
const Cast = lazy(() => import('../Cast/Cast'));
const Revies = lazy(() => import('../Revies/Revies'));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Header />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.MOVIES} element={<MoviesSearch />} />
          <Route path={`${ROUTES.MOVIES_ID}/:movieId`} element={<Movies />}>
            <Route path={ROUTES.CAST} element={<Cast />} />
            <Route path={ROUTES.REVIES} element={<Revies />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
export default App;
