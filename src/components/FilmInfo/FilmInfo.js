import s from './FilmInfo.module.css';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import NotFound from '../../images/not-found-image.jpg';
export default function FilmInfo({ film }) {
  const { id, poster_path, original_title, popularity, overview, genres } =
    film;
  const location = useLocation();

  return (
    <div>
      <div className={s.mainFilmInfo}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : NotFound
          }
          alt={original_title}
        ></img>
        <div>
          <h3>{original_title}</h3>
          <p>
            User Score: <span>{Math.round(popularity)}%</span>
          </p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres.map(el => el.name).join(', ')}</p>
        </div>
      </div>

      <div className={s.additionalInfo}>
        <h4>Additional information</h4>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${id}/cast`,
                state: {
                  from: location?.state?.from ?? '/',
                },
              }}
              className={s.link}
              activeClassName={s.linkActive}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `/movies/${id}/reviews`,
                state: {
                  from: location?.state?.from ?? '/',
                },
              }}
              className={s.link}
              activeClassName={s.linkActive}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

FilmInfo.propTypes = {
  id: PropTypes.number,
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  popularity: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
