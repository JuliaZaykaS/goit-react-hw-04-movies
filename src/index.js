import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import {fetchPopularFilms, fetchSearchFilm, getFilmDetails, getFilmCredits, getFilmReviews} from './services/films-api';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// fetchPopularFilms();
fetchSearchFilm('batman');
getFilmDetails('268');
getFilmCredits('268');
getFilmReviews('268');