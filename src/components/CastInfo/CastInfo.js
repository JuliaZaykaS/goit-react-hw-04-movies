import s from './CastInfo.module.css';

export default function CastInfo({ actors }) {
  return (
    <ul>
      {actors &&
        actors.map(actor => (
          <li key={actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w300/${actor.profile_path}`}
                alt={actor.name}
              ></img>
            )}
            <p>{actor.name}</p>
            <p>Character:{actor.character}</p>
          </li>
        ))}
    </ul>
  );
}
