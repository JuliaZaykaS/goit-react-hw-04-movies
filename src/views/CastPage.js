import { useState, useEffect } from 'react';
// import { useParams } from "react-router";
import { getFilmCredits } from '../services/films-api';
import CastInfo from '../components/CastInfo/CastInfo';
import Spinner from '../components/Loader/Loader';
import NotFoundPage from './NotFoundPage';

export default function CastPage({ id }) {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  // const { movieId } = useParams();
  // const params = useParams();
  // console.log(params);
  useEffect(() => {
    // getFilmCredits(movieId).then(setActors);
    getFilmCredits(id)
      .then(setActors)
      .catch(error => setError(error.message));
    // }, [movieId])
  }, [id]);
  return (
    <>
      {!actors ? <Spinner /> : <CastInfo actors={actors} />}
      <NotFoundPage message={error} />
    </>
  );
}
