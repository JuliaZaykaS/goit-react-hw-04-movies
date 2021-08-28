import { useEffect, useState } from 'react';
import FilmList from '../components/FilmList/FilmList';
import Section from '../components/Section/Section';
import Title from '../components/Title/Title';
import { fetchPopularFilms } from '../services/films-api';
import Spinner from '../components/Loader/Loader';
import NotFoundPage from './NotFoundPage';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPopularFilms()
      .then(setFilms)
      .catch(error => setError(error.message));
  }, []);

  return (
    <Section>
      <Title title={'Trending today'} />
      {!films ? <Spinner /> : <FilmList films={films} />}
      <NotFoundPage message={error} />
    </Section>
  );
}
