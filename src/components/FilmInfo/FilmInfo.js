import s from './FilmInfo.module.css';

export default function FilmInfo({ film }) {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.original_title} ></img>
            <h3>{ film.original_title}</h3>
            {/* <p>User Score: <span>{film.popularity}%</span></p> */}
            <p>User Score: <span>{ (Math.round(film.popularity))}%</span></p>
            <h4>Overview</h4>
            <p>{ film.overview}</p>
            <h4>Genres</h4>
            <p>{(film.genres.map(el =>el.name).join(', '))}</p>
            <ul>
                <li>Cast</li>
                <li>Reviews</li>
            </ul>





        </div>
    )
}