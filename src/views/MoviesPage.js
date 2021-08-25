import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import FilmList from "../components/FilmList/FilmList";
import Section from "../components/Section/Section";
// import Title from "../components/Title/Title";
// import FilmInfo from '../components/FilmInfo/FilmInfo';
import { fetchSearchFilm } from '../services/films-api';


export default function MoviesPage() {
    const [searchFilms, setSearchFilms] = useState('');
    const [findFilms, setFindFilms] = useState([]);
    const getSearchValue = (searchFilms) => {
        setSearchFilms(searchFilms);
    }

    useEffect(() => {
        searchFilms !== '' && fetchSearchFilm(searchFilms).then(setFindFilms);
    }, [searchFilms]);

    return (
        <Section>
            <SearchForm onSubmit={getSearchValue }/>
            {/* <Title title={ 'Trending today'}/> */}
            {findFilms && <FilmList films={findFilms} />}

        </Section>

    )
}