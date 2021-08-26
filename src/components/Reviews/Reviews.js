import s from './Reviews.module.css';

export default function Reviews({reviews}) {
    return (
        <ul>
            {reviews && reviews.map(review =>
                <li key={review.id}>
                    <p>Author: { review.author}</p>
                    <p>{ review.content}</p>
                </li>
            )}

        </ul>
    )
}