import { useState, useEffect } from 'react';
import { useParams, Route, useRouteMatch } from 'react-router-dom';
import { getFilmDetails } from '../services/films-api';
import FilmInfo from '../components/FilmInfo/FilmInfo';
import CastPage from './CastPage';
import ReviewsPage from './ReviewsPage';


export default function MovieDetailsPage() {
    const { url, path } = useRouteMatch();
    const { movieId } = useParams();
    const [film, setFilm] = useState(null);
    // console.log(path);
    // console.log(url);
    // console.log(movieId);

    useEffect(() => {
        getFilmDetails(movieId).then(setFilm)

    }, [movieId]);

    return (
        <>
            {film && <FilmInfo film={film} />}
            <Route path={`${url}/cast`}>
                <CastPage id={movieId }/>

            </Route>
            <Route path={`${url}/reviews`}>
                <ReviewsPage id={movieId }/>

            </Route>
            </>

    )

}