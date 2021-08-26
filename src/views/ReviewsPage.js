import { useState, useEffect } from 'react';
import { getFilmReviews } from '../services/films-api';
import Reviews from '../components/Reviews/Reviews';
import Spinner from '../components/Loader/Loader';

export default function ReviewsPage({ id }) {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    getFilmReviews(id).then(setReviews);
  }, [id]);
  return (
    !reviews
    ? <Spinner />
      : (
        // reviews && reviews.length === 0
        reviews.length === 0
        ? <p>We don't have any reviews of this movie</p>
        : <Reviews reviews={reviews} />
    )
    // // !reviews && <Spinner />
    // reviews !== [] ? (
    //   <Reviews reviews={reviews} />
    // ) : (
    //   <p>We don't have any reviews of this movie</p>
    // )
  );
}
