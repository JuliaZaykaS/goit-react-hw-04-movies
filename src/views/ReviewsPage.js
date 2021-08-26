import { useState, useEffect } from 'react';
import { getFilmReviews } from '../services/films-api';
import Reviews from '../components/Reviews/Reviews';

export default function ReviewsPage({ id }) {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    getFilmReviews(id).then(setReviews);
  }, [id]);
  return <Reviews reviews={reviews} />;
}
