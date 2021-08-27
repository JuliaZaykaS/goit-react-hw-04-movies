import s from './Reviews.module.css';
import PropTypes from 'prop-types';

export default function Reviews({reviews}) {
    return (
        <ul className={s.reviewsList}>
            {reviews && reviews.map(({ id, content, author }) =>
                <li key={id}>
                    <p className={s.author}><span className={s.authorTitle} >Author:</span> { author}</p>
                    <p>{ content}</p>
                </li>
            )}

        </ul>
    )
}
Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }

    ))

}
// export default function Reviews({reviews}) {
//     return (
//         <ul className={s.reviewsList}>
//             {reviews && reviews.map(review =>
//                 <li key={review.id}>
//                     <p className={s.author}><span className={s.authorTitle} >Author:</span> { review.author}</p>
//                     <p>{ review.content}</p>
//                 </li>
//             )}

//         </ul>
//     )
// }