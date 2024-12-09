import {OfferCardData} from '../model/offer-data.ts';

export const sortingOrders = {
  'Popular': () => 0,
  'Price: low to high': (a: OfferCardData, b: OfferCardData) => a.price - b.price,
  'Price: high to low': (a: OfferCardData, b: OfferCardData) => b.price - a.price,
  'Top rated first': (a: OfferCardData, b: OfferCardData) => b.rating - a.rating
};

export type SortingOrder = keyof typeof sortingOrders;
