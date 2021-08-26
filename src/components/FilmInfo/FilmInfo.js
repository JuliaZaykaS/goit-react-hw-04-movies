import s from './FilmInfo.module.css';
import { Route, NavLink, useRouteMatch } from 'react-router-dom';
// import Button from '../Button/Button';

export default function FilmInfo({ film }) {
//   const { url, path } = useRouteMatch();
  return (
    <div>
      {/* <Button/> */}
      <div className={s.mainFilmInfo}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt={film.original_title}
        ></img>
        <div>

        <h3>{film.original_title}</h3>
        {/* <p>User Score: <span>{film.popularity}%</span></p> */}
        <p>
          User Score: <span>{Math.round(film.popularity)}%</span>
        </p>
        <h4>Overview</h4>
        <p>{film.overview}</p>
        <h4>Genres</h4>
        <p>{film.genres.map(el => el.name).join(', ')}</p>
        </div>
      </div>
      {/* <Route path="/movies/:movieId"> */}
      {/* path={`${path}/:authorId`}> */}
      <div className={s.additionalInfo}>

          <h4>Additional information</h4>
      {/* <Route path={`${path}/:movieId`}> */}
        <ul>
          {/* <NavLink to={`${url}/${author.id}`}>{author.name}</NavLink> */}
          <li>
            <NavLink
            //   to="/movies/:movieId/cast"
                      to={`/movies/${film.id}/cast`}
              className={s.link}
              activeClassName={s.linkActive}
            >
              {/* <NavLink to={`${url}/${movieId}/cast`} className={s.link} activeClassName={s.linkActive}> */}
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
            to={`/movies/${film.id}/reviews`}
              className={s.link}
              activeClassName={s.linkActive}
            >
              Reviews
            </NavLink>

          </li>
        </ul>
      </div>
      {/* </Route> */}
    {/* //   <Route path={`${path}/:movieId/cast`}>
    //       {authors && <AuthorSubView authors={authors} />}
    //     </Route>
      <Route >

      </Route> */}
      </div>
  );
}
