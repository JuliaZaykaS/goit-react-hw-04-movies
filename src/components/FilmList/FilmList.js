import s from './FilmList.module.css';
import { Link, useRouteMatch } from 'react-router-dom';

export default function FilmList({ films }) {
    const { url } = useRouteMatch();
    // const params = useRouteMatch();
    // console.log(params);
  return (
    <>
      {/* <h2>Trending Today</h2> */}
      <ul className={s.FilmList}>
        {films &&
          films.map(film => (
            <li key={film.id} className={s.filmListItem}>
              <Link to={url === '/' ? `${url}movies/${film.id}` : `${url}/${film.id}`}>
                {film.title || film.original_name || film.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
