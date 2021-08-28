import { useState, useEffect } from 'react';
import { getFilmCredits } from '../services/films-api';
import CastInfo from '../components/CastInfo/CastInfo';
import Spinner from '../components/Loader/Loader';
import NotFoundPage from './NotFoundPage';

export default function CastPage({ id }) {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFilmCredits(id)
      .then(setActors)
      .catch(error => setError(error.message));
  }, [id]);
  return (
    <>
      {!actors ? <Spinner /> : <CastInfo actors={actors} />}
      <NotFoundPage message={error} />
    </>
  );
}
