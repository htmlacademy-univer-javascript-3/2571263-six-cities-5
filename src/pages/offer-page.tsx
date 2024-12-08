import {Link, useParams} from 'react-router-dom';
import {OfferData} from '../model/offer-data.ts';
import {AppRoute} from '../constants/app-route.ts';
import NotFound from '../not-found.tsx';
import {Rating} from '../components/rating.tsx';
import {RatingNester} from '../constants/rating-nesters.ts';
import ReviewForm from '../components/review-form.tsx';
import CardList from '../components/card-list.tsx';
import {CardType} from '../model/card-types.ts';
import {useState} from 'react';
import {ReviewList} from '../components/review-list.tsx';
import Map from '../components/map.tsx';

type OfferPageProps = {
  offers: OfferData[];
}

export default function OfferPage({offers}: OfferPageProps) {
  const params = useParams();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const offer = offers.find((o) => o.id === params.id);
  const nearbyOffers = offers.filter((o) => o.id !== offer?.id);
  if (!offer) {
    return <NotFound />;
  }
  return (
    <div className="page" id={hoveredId?.toString()}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Main}>
                <img className="header__logo" src="../../markup/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer?.images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Location photo"/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium &&
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className={`offer__bookmark-button ${offer.isFavorite ? 'offer__bookmark-button--active ' : ''}button`} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? 'Already in bookmarks' : 'Add to bookmarks'}</span>
                </button>
              </div>
              <Rating rating={offer.rating} ratingNester={RatingNester.OfferPage} />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.residencyType}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedroomCount} Bedroom{offer.bedroomCount > 1 ? 's' : ''}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adult{offer.maxAdults > 1 ? 's' : ''}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.features.map((f) => (
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
                    <img className="offer__avatar user__avatar" src={offer.host.avatar} width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {offer.host.status}
                  </span>
                </div>
                <div className="offer__description">
                  {offer.description.map((p) => (
                    <p className="offer__text" key={p.slice(0, 10)}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <section className="offer__reviews reviews">
                <ReviewList reviews={offer.reviews} />
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map location={nearbyOffers[0].location} points={nearbyOffers.map((o) => o.location)} currentPoint={nearbyOffers.find((nearbyOffer) => nearbyOffer.id === hoveredId)?.location} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardList offers={nearbyOffers} listType={CardType.NearPlaces} onItemHover={setHoveredId} />
          </section>
        </div>
      </main>
    </div>
  );
}
