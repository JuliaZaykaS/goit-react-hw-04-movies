import s from './FilmInfo.module.css';
import PropTypes from 'prop-types';
// import { Route, NavLink, useRouteMatch, useLocation } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import NotFound from '../../images/not-found-image.jpg';
// import { string } from 'yargs';
// import Button from '../Button/Button';

export default function FilmInfo({ film }) {
  const { id, poster_path, original_title, popularity, overview, genres } =
    film;
  //   const { url, path } = useRouteMatch();
  const location = useLocation();
  // console.log(location);
  // console.log(location.state);
  // console.log(location.state.from);
  return (
    <div>
      {/* <Button/> */}
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
          {/* <p>User Score: <span>{film.popularity}%</span></p> */}
          <p>
            User Score: <span>{Math.round(popularity)}%</span>
          </p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres.map(el => el.name).join(', ')}</p>
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
              // to={location?.state?.from ?? '/movies'}
              //   to="/movies/:movieId/cast"
              // to={`/movies/${film.id}/cast`}
              to={{
                pathname: `/movies/${id}/cast`,
                // pathname: `/movies/${film.id}/cast`,
                state: {
                  // from: {
                  from: location?.state?.from ?? '/',
                  // firstLocation:location,
                  // location: `/movies`
                  // location: location?.state?.from?.location ?? '/movies',
                  // firstLocation: location.state.from,

                  // location: location?.state?.from ?? '/',
                  // location: location?.state?.from ?? '/',
                  // location: location?.state ?? '/',
                  // location: { ...location?.state?.from } ?? '/',
                  // location: location?.state?.from?.location,
                  // secondLocation: location?.state?.from?.location,
                  // location: location?.state?.from,
                },
                // },
              }}
              className={s.link}
              activeClassName={s.linkActive}
            >
              {/* <NavLink to={`${url}/${movieId}/cast`} className={s.link} activeClassName={s.linkActive}> */}
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              // to={`/movies/${film.id}/reviews`}
              to={{
                pathname: `/movies/${id}/reviews`,
                // pathname: `/movies/${film.id}/reviews`,
                state: {
                  from: location?.state?.from ?? '/',
                  // from: {
                  // location: `/movies`
                  // location: location?.state?.from?.location ?? '/movies',
                  // location: location?.state?.from?.location,
                  // location: location?.state?.from,
                  // firstLocation: location.state.from,
                  // location: location?.state?.from ?? '/',
                  // location: { ...location?.state?.from } ?? '/',
                  // secondLocation: location?.state?.from?.location,
                  // },
                },
              }}
              // to={{
              //   pathname: `/movies/${film.id}/reviews`,
              //   state:{from:location}

              // }

              // }
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

// FilmInfo.propTypes = {
//   // id: PropTypes.number.isRequired,
//   poster_path:PropTypes.string,
//   original_title:PropTypes.string.isRequired,
//   popularity:PropTypes.number.isRequired,
//   overview:PropTypes.string.isRequired,
//   genres:PropTypes.arrayOf(PropTypes.string),
// }
// import s from './FilmInfo.module.css';
// import PropTypes from 'prop-types';
// import { Route, NavLink, useRouteMatch, useLocation } from 'react-router-dom';
// // import Button from '../Button/Button';

// export default function FilmInfo({ film }) {
//   //   const { url, path } = useRouteMatch();
//   const location = useLocation();
//   console.log(location);
//   return (
//     <div>
//       {/* <Button/> */}
//       <div className={s.mainFilmInfo}>
//         <img
//           src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
//           alt={film.original_title}
//         ></img>
//         <div>
//           <h3>{film.original_title}</h3>
//           {/* <p>User Score: <span>{film.popularity}%</span></p> */}
//           <p>
//             User Score: <span>{Math.round(film.popularity)}%</span>
//           </p>
//           <h4>Overview</h4>
//           <p>{film.overview}</p>
//           <h4>Genres</h4>
//           <p>{film.genres.map(el => el.name).join(', ')}</p>
//         </div>
//       </div>
//       {/* <Route path="/movies/:movieId"> */}
//       {/* path={`${path}/:authorId`}> */}
//       <div className={s.additionalInfo}>
//         <h4>Additional information</h4>
//         {/* <Route path={`${path}/:movieId`}> */}
//         <ul>
//           {/* <NavLink to={`${url}/${author.id}`}>{author.name}</NavLink> */}
//           <li>
//             <NavLink
//               // to={location?.state?.from ?? '/movies'}
//               //   to="/movies/:movieId/cast"
//               // to={`/movies/${film.id}/cast`}
//               to={{
//                 pathname: `/movies/${film.id}/cast`,
//                 state: {
//                   from: {
//                     // location: `/movies`
//                     // location: location?.state?.from?.location ?? '/movies',
//                     location: location?.state?.from,
//                   },
//                 },
//               }}
//               className={s.link}
//               activeClassName={s.linkActive}
//             >
//               {/* <NavLink to={`${url}/${movieId}/cast`} className={s.link} activeClassName={s.linkActive}> */}
//               Cast
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               // to={`/movies/${film.id}/reviews`}
//               to={{
//                 pathname: `/movies/${film.id}/reviews`,
//                 state: {
//                   from: {
//                     // location: `/movies`
//                     // location: location?.state?.from?.location ?? '/movies',
//                     // location: location?.state?.from?.location,
//                     location: location?.state?.from,
//                   },
//                 },
//               }}
//               // to={{
//               //   pathname: `/movies/${film.id}/reviews`,
//               //   state:{from:location}

//               // }

//               // }
//               className={s.link}
//               activeClassName={s.linkActive}
//             >
//               Reviews
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       {/* </Route> */}
//       {/* //   <Route path={`${path}/:movieId/cast`}>
//     //       {authors && <AuthorSubView authors={authors} />}
//     //     </Route>
//       <Route >

//       </Route> */}
//     </div>
//   );
// }

FilmInfo.propTypes = {
  id: PropTypes.number,
  poster_path: PropTypes.string,
  original_title: PropTypes.string,
  popularity: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
