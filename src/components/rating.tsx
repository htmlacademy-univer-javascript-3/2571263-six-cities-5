import {RatingNester} from '../constants/rating-nesters.ts';

type RatingStarsProps = {
  rating: number;
  ratingNester: RatingNester;
  isValueHidden?: true;
};

export function Rating({rating, ratingNester, isValueHidden}: RatingStarsProps) {
  return (
    <div className={`${ratingNester}__rating rating`}>
      <div className={`${ratingNester}__stars rating__stars`}>
        <span style={{width: `${(rating * 100) / 5}%`}}/>
        <span className="visually-hidden">Rating</span>
      </div>
      {!isValueHidden && <span className={`${ratingNester}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
}
