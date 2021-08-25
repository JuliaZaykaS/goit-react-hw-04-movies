import { useEffect, useState } from 'react';
import FilmList from '../components/FilmList/FilmList';
import Section from '../components/Section/Section';
import Title from '../components/Title/Title';
import { fetchPopularFilms } from '../services/films-api';
// import FilmInfo from '../components/FilmInfo/FilmInfo';

export default function HomePage() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        // const d = fetchPopularFilms();
        // console.log(d);
        fetchPopularFilms().then(setFilms);

        // fetchPopularFilms().then(res => {

        //     // console.log(res);
        //     setFilms(res);
        // })
    //   setFilms(fetchPopularFilms());
    }, []);

    // console.log(films);
  return (
    <Section>
      <Title title={'Trending today'} />
      {films && <FilmList films={films} />}
    </Section>
  );
}
