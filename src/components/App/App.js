import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import Spinner from '../Loader/Loader';

const HomePage = lazy(() =>
  import('../../views/HomePage' /*webpackChunkName:"homePage"*/),
);
const MoviesPage = lazy(() =>
  import('../../views/MoviesPage' /*webpackChunkName:"moviesPage"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../views/MovieDetailsPage' /*webpackChunkName:"MovieDetailsPage"*/
  ),
);
const NotFoundPage = lazy(() =>
  import('../../views/NotFoundPage.js' /*webpackChunkName:"NotFoundPage"*/),
);

function App() {
  return (
    <>
      <Container>
        <Navigation />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route path="/movies/:movieId">
              <MovieDetailsPage />
            </Route>
            <Route>
              <NotFoundPage massage="Page not found" />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
