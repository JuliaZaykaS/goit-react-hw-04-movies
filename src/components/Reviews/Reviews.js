import s from './Reviews.module.css';

export default function Reviews({reviews}) {
    return (
        <ul className={s.reviewsList}>
            {reviews && reviews.map(review =>
                <li key={review.id}>
                    <p className={s.author}><span className={s.authorTitle} >Author:</span> { review.author}</p>
                    <p>{ review.content}</p>
                </li>
            )}

        </ul>
    )
}