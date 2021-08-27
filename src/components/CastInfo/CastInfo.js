import s from './CastInfo.module.css';
import PropTypes from 'prop-types';

export default function CastInfo({ actors }) {
  return (
    <ul className={s.castList}>
      {actors &&
        actors.map(({id, profile_path, name, character}) => (
          <li key={id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={name}
              ></img>
            )}
            <p className={s.actor}>{name}</p>
            <p ><span className={s.character}>Character:</span> {character}</p>
          </li>
        ))}
    </ul>
  );
}
// export default function CastInfo({ actors }) {
//   return (
//     <ul className={s.castList}>
//       {actors &&
//         actors.map(actor => (
//           <li key={actor.id}>
//             {actor.profile_path && (
//               <img
//                 src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
//                 alt={actor.name}
//               ></img>
//             )}
//             <p className={s.actor}>{actor.name}</p>
//             <p ><span className={s.character}>Character:</span> {actor.character}</p>
//           </li>
//         ))}
//     </ul>
//   );
// }

CastInfo.propTypes = {
  id: PropTypes.number,
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,

}
