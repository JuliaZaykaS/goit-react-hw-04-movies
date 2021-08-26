import { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import SearchForm from "../components/SearchForm/SearchForm";
import FilmList from "../components/FilmList/FilmList";
import Section from "../components/Section/Section";
// import Title from "../components/Title/Title";
// import FilmInfo from '../components/FilmInfo/FilmInfo';
import { fetchSearchFilm } from '../services/films-api';
import Spinner from '../components/Loader/Loader';


export default function MoviesPage() {
    const [searchFilms, setSearchFilms] = useState('');
    const [findFilms, setFindFilms] = useState([]);
    // const { searchMovie } = useParams();
    const history = useHistory();
    const location = useLocation();
    // console.log(location);
    // console.log(searchMovie);
    // const searchQuery = new URLSearchParams(location.search).get('query') ?? '';
    // console.log(searchQuery);
    const onSearchChange = (value) => {
        history.push({ ...location, search: `query=${value}` })
        // console.log(history);
    }

    //  const getSearchValue = (searchFilms) => {
    //     //  history.push(`/movies/${searchFilms}`)
    //      setSearchFilms(searchFilms);
    //     // const searchQuery = new URLSearchParams(location.search).get('query') ?? '';
    // }

    useEffect(() => {
        const searchQuery = new URLSearchParams(location.search).get('query');
        // if (searchQuery === '') return;
        // searchFilms !== '' && fetchSearchFilm(searchFilms).then(setFindFilms)
        searchFilms !== ''
            ? fetchSearchFilm(searchFilms).then(setFindFilms)
            : fetchSearchFilm(searchQuery).then(setFindFilms)
            // && history.push(`/movies/${searchFilms}`)
        // history.push(`/movies/${searchFilms}`)
// history.push(`/${searchFilms}`)
        // if (location.search !== '') return;
        // if (location.search === '') return;
        // history.push({...location, search:`query=${searchQuery}`})
        // history.push({...location, search: `query=${searchFilms}`})

    // }, [history, location, searchFilms, ]);
    }, [location.search, searchFilms]);
    // }, [history, location, searchFilms, searchQuery]);
    // }, [searchFilms]);

    // useEffect(() => {
    //     history.push(`/movies/${searchFilms}`)
    // }, [history, searchFilms])




     const getSearchValue = (searchFilms) => {
    //     //  history.push(`/movies/${searchFilms}`)
         setSearchFilms(searchFilms);
         onSearchChange(searchFilms);
    //       const searchQuery = new URLSearchParams(location.search).get('query') ?? '';
    }


    return (
        <Section>
            <SearchForm onSubmit={getSearchValue }/>
            {/* <Title title={ 'Trending today'}/> */}
            {!findFilms
                ? <Spinner/>
                : <FilmList films={findFilms} />}

        </Section>

    )
}