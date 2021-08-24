import { Route, Switch } from 'react-router-dom';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
// import FilmList from '../FilmList/FilmList';
// import SearchForm from '../SearchForm/SearchForm';
import HomePage from '../../views/HomePage';
import MoviesPage from '../../views/MoviesPage';

function App() {
  return (
    <>
      <Container>
        <Navigation />
        <Switch>

          <Route exact path="/">
            <HomePage/>
          {/* <FilmList /> */}
          </Route>
          <Route path="/movies">
            {/* <SearchForm /> */}
            <MoviesPage/>

          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
