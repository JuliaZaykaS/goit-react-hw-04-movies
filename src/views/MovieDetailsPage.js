import { useState, useEffect } from 'react';
import { useParams, Route, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { getFilmDetails } from '../services/films-api';
import FilmInfo from '../components/FilmInfo/FilmInfo';
import CastPage from './CastPage';
import ReviewsPage from './ReviewsPage';
import Button from '../components/Button/Button';
import Spinner from '../components/Loader/Loader';


export default function MovieDetailsPage() {
    const { url, path } = useRouteMatch();
    const { movieId } = useParams();
    const [film, setFilm] = useState(null);
    const history = useHistory();
    // const location = useLocation();

    // console.log(history);
    // console.log(location);


    // console.log(path);
    // console.log(url);
    // console.log(movieId);
    const onGoBackPage = () => {
        // console.log(123);
        // console.log(history);
        history.goBack();
        // history.push('/')
        // if()

    }

    useEffect(() => {
        getFilmDetails(movieId).then(setFilm)

    }, [movieId]);

    return (
        <>
            {!film
                ? <Spinner/>
                : <>
                <Button onClickBtn={ onGoBackPage}/>
                <FilmInfo film={film} />
                </>
                }
            <Route path={`${url}/cast`}>
                <CastPage id={movieId }/>

            </Route>
            <Route path={`${url}/reviews`}>
                <ReviewsPage id={movieId }/>

            </Route>
            </>

    )

}