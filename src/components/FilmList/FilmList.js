import s from './FilmList.module.css';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

export default function FilmList({ films }) {
  const { url } = useRouteMatch();
  const location = useLocation();
  console.log(location);
  // const params = useRouteMatch();
  // console.log(params);
  return (
    <>
      {/* <h2>Trending Today</h2> */}
      <ul className={s.FilmList}>
        {films &&
          films.map(film => (
            <li key={film.id} className={s.filmListItem}>
              {/* <Link to={url === '/' ? `${url}movies/${film.id}` : `${url}/${film.id}`}> */}
              <Link
                // to={{
                //   pathname:
                //     url === '/'
                //       ? `${url}movies/${film.id}`
                //       : `${url}/${film.id}`,
                //   state: { from: location },
                // }}

                to={
                  url === '/'
                    ? {
                      pathname: `${url}movies/${film.id}`,
                      state: { from: location },
                    }
                    : {
                      pathname: `${url}/${film.id}`,
                      state: { from: location },
                    }
                }
              >
                {film.title || film.original_name || film.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
