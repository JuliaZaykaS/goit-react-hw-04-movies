import { Route } from 'react-router-dom';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import FilmList from '../FilmList/FilmList';

function App() {
  return (
    <>
      <Container>
        <Navigation />
        <Route exact path="/">
          <FilmList />
        </Route>
      </Container>
    </>
  );
}

export default App;
