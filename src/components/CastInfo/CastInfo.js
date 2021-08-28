import s from './CastInfo.module.css';
import PropTypes from 'prop-types';
import NotFound from '../../images/not-found-image.jpg';
export default function CastInfo({ actors }) {
  return (
    <ul className={s.castList}>
      {actors &&
        actors.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={name}
              ></img>
            ) : (
              <img src={NotFound} alt={name}></img>
            )}
            <p className={s.actor}>{name}</p>
            <p>
              <span className={s.character}>Character:</span> {character}
            </p>
          </li>
        ))}
    </ul>
  );
}

CastInfo.propTypes = {
  id: PropTypes.number,
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
