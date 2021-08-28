import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';
import FilmList from '../components/FilmList/FilmList';
import Section from '../components/Section/Section';
import { fetchSearchFilm } from '../services/films-api';
import Spinner from '../components/Loader/Loader';
import NotFoundPage from './NotFoundPage';

export default function MoviesPage() {
  const [searchFilms, setSearchFilms] = useState('');
  const [findFilms, setFindFilms] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const onSearchChange = value => {
    history.push({ ...location, search: `query=${value}` });
  };

  useEffect(() => {
    const searchQuery = new URLSearchParams(location.search).get('query');

    searchFilms !== ''
      ? fetchSearchFilm(searchFilms)
          .then(setFindFilms)
          .catch(error => setError(error.message))
      : fetchSearchFilm(searchQuery)
          .then(setFindFilms)
          .catch(error => setError(error.message));
  }, [location.search, searchFilms]);

  const getSearchValue = searchFilms => {
    setSearchFilms(searchFilms);
    onSearchChange(searchFilms);
  };

  return (
    <Section>
      <SearchForm onSubmit={getSearchValue} />

      {!findFilms ? null : findFilms.length === 0 ? (
        <Spinner />
      ) : (
        <FilmList films={findFilms} />
      )}
      <NotFoundPage message={error} />
    </Section>
  );
}
