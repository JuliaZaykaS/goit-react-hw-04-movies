import s from './FilmList.module.css';

export default function FilmList({films}) {
    return (
        <>
            {/* <h2>Trending Today</h2> */}
            <ul>
                {films && films.map(film =>
                    <li key={film.id}>{ film.title || film.original_name || film.original_title}</li>
                )}

            </ul>
            </>
    )
}