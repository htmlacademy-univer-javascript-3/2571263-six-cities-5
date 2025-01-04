import {useNavigate, useParams} from 'react-router-dom';
import {AppRoute} from '../constants/app-route.ts';
import {Rating} from '../components/rating.tsx';
import {RatingNester} from '../constants/rating-nesters.ts';
import ReviewForm from '../components/review-form.tsx';
import CardList from '../components/card-list.tsx';
import {CardType} from '../model/card-types.ts';
import {useEffect, useState} from 'react';
import {ReviewList} from '../components/review-list.tsx';
import Map from '../components/map.tsx';
import {useAppDispatch, useAppSelector} from '../store/hooks.ts';
import {fetchCurrentOfferAction} from '../store/api-actions.ts';
import Spinner from '../components/spinner/spinner.tsx';
import {AuthStatus} from '../constants/auth-status.ts';

export default function OfferPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id?: string }>();
  const [isOfferLoading, setIsOfferLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      navigate(AppRoute.NotFound);
      return;
    }
    dispatch(fetchCurrentOfferAction(id))
      .unwrap()
      .catch(() => navigate(AppRoute.NotFound))
      .then((offer) => {
        if (offer === null) {
          navigate(AppRoute.NotFound);
        }
      })
      .finally(() => setIsOfferLoading(false));
  }, [id, dispatch, navigate]);

  const offer = useAppSelector((state) => state.currentOffer.currentOffer);
  const reviews = useAppSelector((state) => state.currentOffer.reviews);
  const nearbyOffers = useAppSelector((state) => state.currentOffer.nearbyOffers.slice(0, 3));
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  return (isOfferLoading ?
    <Spinner/>
    :
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offer!.images.map((image) => (
              <div className="offer__image-wrapper" key={image}>
                <img className="offer__image" src={image} alt="Location photo"/>
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offer!.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offer!.title}
              </h1>
              <button
                className={`offer__bookmark-button ${offer!.isFavorite ? 'offer__bookmark-button--active ' : ''}button`}
                type="button"
              >
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span
                  className="visually-hidden"
                >{offer!.isFavorite ? 'Already in bookmarks' : 'Add to bookmarks'}
                </span>
              </button>
            </div>
            <Rating rating={offer!.rating} ratingNester={RatingNester.OfferPage}/>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offer!.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offer!.bedrooms} Bedroom{offer!.bedrooms > 1 ? 's' : ''}
              </li>
              <li className="offer__feature offer__feature--adults">
                  Max {offer!.maxAdults} adult{offer!.maxAdults > 1 ? 's' : ''}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer!.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {offer!.goods.map((f) => (
                  <li className="offer__inside-item" key={f}>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={offer!.host.avatarUrl} width="74" height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">
                  {offer!.host.name}
                </span>
                {offer!.host.isPro &&
                    <span className="offer__user-status">
                    Pro
                    </span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {offer!.description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <ReviewList reviews={reviews}/>
              {authStatus === AuthStatus.Authenticated && <ReviewForm/>}
            </section>
          </div>
        </div>
        <section className="offer__map map">
          <Map location={offer!.location} points={[...nearbyOffers.map((o) => o.location), offer!.location]}
            currentPoint={offer!.location}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <CardList offers={nearbyOffers} listType={CardType.NearPlaces} />
        </section>
      </div>
    </main>
  );
}
