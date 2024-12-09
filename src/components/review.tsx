import {Review} from '../model/review.ts';
import {Rating} from './rating.tsx';
import {RatingNester} from '../constants/rating-nesters.ts';

type ReviewItemProps = Review;

export function ReviewItem({user, rating, comment, date}: ReviewItemProps){
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating rating={rating} ratingNester={RatingNester.Review} isValueHidden />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{date}</time>
      </div>
    </li>
  );
}
