import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmDetails } from '../services/films-api';
import FilmInfo from '../components/FilmInfo/FilmInfo';


export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        getFilmDetails(movieId).then(setFilm)

    }, [movieId]);

    return (
        film && <FilmInfo film={film} />

    )

}