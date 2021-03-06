import s from './FilmList.module.css';
import PropTypes from 'prop-types';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

export default function FilmList({ films }) {
  const { url } = useRouteMatch();
  const location = useLocation();

  return (
    <>
      <ul className={s.FilmList}>
        {films &&
          films.map(film => {
            const { id, title, original_name, original_title } = film;
            return (
              <li key={id} className={s.filmListItem}>
                <Link
                  to={{
                    pathname:
                      url === '/' ? `${url}movies/${id}` : `${url}/${id}`,
                    state: { from: location },
                  }}
                >
                  {title || original_name || original_title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      original_name: PropTypes.string,
      original_title: PropTypes.string,
    }),
  ),
};
