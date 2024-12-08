import {cities} from '../constants/cities.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../constants/app-route.ts';

type cityTabsProps = {
  selectedCity: string;
  onTabClick: (cityName: string) => void;
}

export default function CityTabs({ selectedCity, onTabClick }: cityTabsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((cityName) => (
            <li className="locations__item" key={cityName}>
              <Link
                to={AppRoute.Main}
                className={`locations__item-link tabs__item${ cityName === selectedCity ? ' tabs__item--active' : ''}`}
                onClick={() => onTabClick(cityName)}
              >
                <span>{cityName}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>);
}
