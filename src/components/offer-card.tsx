import {OfferCardData} from '../model/offer-data.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../constants/app-route.ts';
import {CardType} from '../model/card-types.ts';
import {Rating} from './rating.tsx';
import {RatingNester} from '../constants/rating-nesters.ts';

type OfferCardProps = {
  offerData: OfferCardData;
  cardType: CardType;
  onHover?: (id: string | null) => void;
  width: number;
  height: number;
}

export default function OfferCard({offerData, cardType, width, height, onHover}: OfferCardProps) {
  const offerPage = AppRoute.Offer.replace(':id', offerData.id);

  return (
    <article className={`${cardType}__card place-card`}
      onMouseOver={onHover ? () => onHover(offerData.id) : undefined}
      onMouseLeave={onHover ? () => onHover(null) : undefined}
    >
      {offerData.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerPage}>
          <img
            className="place-card__image"
            src={offerData.previewImage}
            width={width}
            height={height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${cardType === CardType.Favorite && 'favorites__card-info'}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offerData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${cardType === CardType.Favorite && 'place-card__bookmark-button--active '}button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offerData.isFavorite ? 'Already bookmarked' : 'Add to bookmarks'}</span>
          </button>
        </div>
        <Rating rating={offerData.rating} ratingNester={RatingNester.OfferCard} isValueHidden />
        <h2 className="place-card__name">
          <Link to={offerPage}>{offerData.title}</Link>
        </h2>
        <p className="place-card__type">{offerData.type}</p>
      </div>
    </article>
  );
}
