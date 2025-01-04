import {Link} from 'react-router-dom';
import CardList from './card-list.tsx';
import {CardType} from '../model/card-types.ts';
import {useAppSelector} from '../hooks/store-hooks.ts';

export function FavoritesList(){
  const offers = useAppSelector((state) => state.offers.favourites);
  const cities = Array.from(new Set(offers.map((o) => o.city.name).toSorted()));

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
          <CardList offers={offers.filter((offer) => offer.city.name === cityName)} listType={CardType.Favorite} />
        </li>
      ))}
    </ul>
  );
}
