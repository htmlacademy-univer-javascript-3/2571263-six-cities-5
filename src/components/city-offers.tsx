import SortingOptions from './sorting-options.tsx';
import CardList from './card-list.tsx';
import {CardType} from '../model/card-types.ts';
import Map from './map.tsx';
import {useState} from 'react';
import {useAppSelector} from '../store/hooks.ts';
import {offersSelector} from '../store/selectors.ts';
import cn from 'classnames';
import MainEmpty from './main-empty.tsx';

type OfferScreenProps = {
  selectedCity: string;
}

export default function CityOffers({ selectedCity }: OfferScreenProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const offers = useAppSelector(offersSelector);
  const locations = offers.map((offer) => offer.location);
  return(
    <div className={cn('cities__places-container', 'container', {
      'cities__places-container--empty': offers.length === 0,
    })}
    >
      {offers.length > 0 ?
        <>
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {selectedCity}</b>
            <SortingOptions/>
            <CardList offers={offers} listType={CardType.City} onItemHover={setHoveredId}/>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map location={offers[0].city.location} points={locations}
                currentPoint={offers.find((offer) => offer.id === hoveredId)?.location}
              />
            </section>
          </div>
        </>
        :
        <MainEmpty />}
    </div>);
}
