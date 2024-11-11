import {Review} from '../model/review.ts';
import {ReviewItem} from './review.tsx';

type CommentListProps = {
  reviews: Review[];
}

export function CommentList({reviews}: CommentListProps) {
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.toSorted((f, s) =>
          new Date(f.date).getTime() - new Date(s.date).getTime())
          .map((c) => (
            <ReviewItem {...c} key={c.id}/>
          ))}
      </ul>
    </>
  );
}
