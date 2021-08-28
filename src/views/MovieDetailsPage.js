import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Route, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { getFilmDetails } from '../services/films-api';
import FilmInfo from '../components/FilmInfo/FilmInfo';
// import CastPage from './CastPage';
// import ReviewsPage from './ReviewsPage';
import Button from '../components/Button/Button';
import Spinner from '../components/Loader/Loader';

const CastPage = lazy(() => import('./CastPage' /*webpackChunkName:"castPage"*/));
const ReviewsPage = lazy(() => import('./ReviewsPage' /*webpackChunkName:"ReviewsPage"*/));

export default function MovieDetailsPage() {
    const { url } = useRouteMatch();
    // const { url, path } = useRouteMatch();
    const { movieId } = useParams();
    const [film, setFilm] = useState(null);
    const history = useHistory();
    const location = useLocation();
    // const location = useLocation();
    // const firstLocation = location.state.from;
    // console.log(firstLocation);
    // console.log(location.state.from);

    // console.log(history);
    console.log(location);


    // console.log(path);
    // console.log(url);
    // console.log(movieId);
    const onGoBackPage = () => {
        // console.log(location.state.from);
        // history.push(location?.state?.from ?? '/')
        // history.push(location?.state?.from?.firstLocation ?? location.state.from)
        // console.log();
        // if (location.state.from.location) {

        // }
        // history.push(location?.state?.from?.location ?? '/')
        // history.push(location?.state?.from?.location ?? location?.state?.from ?? '/')
        if (!location.state) {
            history.push('/');
        };
        // history.push(location?.state?.from?.location ?? location?.state?.from);
        history.push(location?.state?.from);
        // if (location?.state?.from?.location) {
        //     history.push(location.state.from.location)
        // } else if (!location?.state?.from?.location) {
        //     history.push(location?.state?.from)
        // } else {history.push('/')}
        // history.push(location?.state?.from?.location ?? location?.state?.from ?? '/')
        // if (location.state.from.location) {
            // history.push(location.state.from.location)
        // } else if (location.state.from) {
            // history.push(location.state.from)
        // }
        // } else { history.push('/') };
        // } else { history.push(firstLocation) };
        // history.push(location?.state?.from)
        // console.log(123);
        // console.log(history);
        // history.goBack();
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
            <Suspense fallback={<Spinner/>}>

            <Route path={`${url}/cast`}>
                <CastPage id={movieId }/>

            </Route>
            <Route path={`${url}/reviews`}>
                <ReviewsPage id={movieId }/>

            </Route>
            </Suspense>
            </>

    )

}