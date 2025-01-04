import React, {FormEvent, useRef, useState} from 'react';
import {useAppDispatch} from '../store/hooks.ts';
import {sendReviewAction} from '../store/api-actions.ts';

export default function ReviewForm() {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const [reviewData, setReviewData] = useState({
    rating: 0,
    review: ''
  });
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setReviewData({ ...reviewData, rating: Number(value) });
  };

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setReviewData({ ...reviewData, review: value });
  };
  const sendReview = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (reviewData.review.length < 50 || reviewData.rating === 0) {
      return;
    }
    dispatch(sendReviewAction(reviewData));
    setReviewData({rating: 0, review: ''});
    formRef.current?.reset();
  };

  return (
    <form className="reviews__form form" onSubmit={sendReview} ref={formRef}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value={5} id="5-stars"
          type="radio" onChange={handleRatingChange}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value={4} id="4-stars"
          type="radio" onChange={handleRatingChange}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value={3} id="3-stars"
          type="radio" onChange={handleRatingChange}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value={2} id="2-stars"
          type="radio" onChange={handleRatingChange}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value={1} id="1-star"
          type="radio" onChange={handleRatingChange}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" onChange={handleReviewChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      {reviewData.review.length < 50 && <p className="reviews__error">Comment too short</p>}
      {reviewData.rating === 0 && <p className="reviews__error">Rating not set</p>}
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe
        your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
}
