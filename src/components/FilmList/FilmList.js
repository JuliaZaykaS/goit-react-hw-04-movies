import s from './FilmList.module.css';
import { Link, useRouteMatch } from 'react-router-dom';

export default function FilmList({ films }) {
    const { url } = useRouteMatch();
    // console.log(url);
  return (
    <>
      {/* <h2>Trending Today</h2> */}
      <ul>
        {films &&
          films.map(film => (
            <li key={film.id}>
              <Link to={`${url}/${film.id}`}>
                {film.title || film.original_name || film.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
