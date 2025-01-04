import {Review} from '../model/review.ts';
import {ReviewItem} from './review.tsx';

type ReviewListProps = {
  reviews: Review[];
}

export function ReviewList({reviews}: ReviewListProps) {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.toSorted((l, r) =>
          new Date(r.date).getTime() - new Date(l.date).getTime())
          .slice(0, 10)
          .map((c) => (
            <ReviewItem {...c} key={c.id}/>
          ))}
      </ul>
    </>
  );
}
