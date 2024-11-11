import {Link} from 'react-router-dom';
import {OfferData} from '../model/offer-data.ts';
import CardList from './card-list.tsx';
import {CardType} from '../model/card-types.ts';

type FavoritesListProps = {
  offers: OfferData[];
  onItemHover: (id: string | null) => void;
};

export function FavoritesList({offers, onItemHover}: FavoritesListProps){
  const cities = Array.from(new Set(offers.map((o) => o.location.name).toSorted()));

  return (
    <ul className="favorites__list">
      {cities.map((cityName) => (
        <li className="favorites__locations-items" key={cityName}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>{cityName}</span>
              </Link>
            </div>
          </div>
          <CardList offers={offers} listType={CardType.Favorite} onItemHover={onItemHover}/>
        </li>
      ))}
    </ul>
  );
}
