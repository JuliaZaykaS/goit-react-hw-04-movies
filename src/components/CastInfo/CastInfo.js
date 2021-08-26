import s from './CastInfo.module.css';

export default function CastInfo({ actors }) {
  return (
    <ul className={s.castList}>
      {actors &&
        actors.map(actor => (
          <li key={actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              ></img>
            )}
            <p className={s.actor}>{actor.name}</p>
            <p ><span className={s.character}>Character:</span> {actor.character}</p>
          </li>
        ))}
    </ul>
  );
}
