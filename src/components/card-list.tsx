import OfferCard from './offer-card.tsx';
import {OfferCardData} from '../model/offer-data.ts';
import {CardType} from '../model/card-types.ts';

type CardListProps = {
  offers: OfferCardData[];
  listType: CardType;
  onItemHover?: (id: string | null) => void;
}

export default function CardList({offers, listType, onItemHover}: CardListProps) {
  let className: string;
  let width: number;
  let height: number;
  switch (listType) {
    case CardType.City:
      className = 'cities__places-list places__list tabs__content';
      [width, height] = [260, 200];
      break;
    case CardType.Favorite:
      className = 'favorites__places';
      [width, height] = [150, 110];
      break;
    default:
      className = 'near-places__list places__list tabs__content';
      [width, height] = [260, 200];
      break;
  }
  return (
    <div className={className}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offerData={offer}
          width={width}
          height={height}
          cardType={listType}
          onHover={(id) => onItemHover && onItemHover(id)}
        />
      ))}
    </div>
  );
}
