import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import Spinner from '../Loader/Loader';
// import s from './App.module.css';
// import FilmList from '../FilmList/FilmList';
// import SearchForm from '../SearchForm/SearchForm';
// import HomePage from '../../views/HomePage';
// import MoviesPage from '../../views/MoviesPage';
// import MovieDetailsPage from '../../views/MovieDetailsPage';
const HomePage = lazy(() => import('../../views/HomePage' /*webpackChunkName:"homePage"*/));
const MoviesPage = lazy(() => import('../../views/MoviesPage' /*webpackChunkName:"moviesPage"*/));
const MovieDetailsPage = lazy(() => import('../../views/MovieDetailsPage' /*webpackChunkName:"MovieDetailsPage"*/));
const NotFoundPage = lazy(() => import('../../views/NotFoundPage.js' /*webpackChunkName:"NotFoundPage"*/));

function App() {
  return (
    // <div className={s.App}>
    <>
      <Container>
        <Navigation />
        <Suspense fallback={<Spinner/>}>

        <Switch>

          <Route exact path="/">
            <HomePage/>
          {/* <FilmList /> */}
          </Route>
          <Route path="/movies" exact>
          {/* <Route path="/movies/:searchMovie" exact> */}
          {/* <Route path="/movies/:searchMovie"> */}
            {/* <SearchForm /> */}
            <MoviesPage/>

          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage/>
            </Route>
            <Route>
              <NotFoundPage massage='Page not found'/>
            </Route>
        </Switch>
        </Suspense>
      </Container>
      {/* </div> */}
      </>
  );
}

export default App;
