import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { getFilmDetails } from '../services/films-api';
import FilmInfo from '../components/FilmInfo/FilmInfo';
import Button from '../components/Button/Button';
import Spinner from '../components/Loader/Loader';
import NotFoundPage from './NotFoundPage';

const CastPage = lazy(() =>
  import('./CastPage' /*webpackChunkName:"castPage"*/),
);
const ReviewsPage = lazy(() =>
  import('./ReviewsPage' /*webpackChunkName:"ReviewsPage"*/),
);

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();

  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const onGoBackPage = () => {
    history.push(location?.state?.from ?? '/');
  };

  useEffect(() => {
    getFilmDetails(movieId)
      .then(setFilm)
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      {!film ? (
        <Spinner />
      ) : (
        <>
          <Button onClickBtn={onGoBackPage} />
          <FilmInfo film={film} />
        </>
      )}
      <NotFoundPage message={error} />
      <Suspense fallback={<Spinner />}>
        <Route path={`${url}/cast`}>
          <CastPage id={movieId} />
        </Route>
        <Route path={`${url}/reviews`}>
          <ReviewsPage id={movieId} />
        </Route>
      </Suspense>
    </>
  );
}
