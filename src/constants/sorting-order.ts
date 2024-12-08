import {OfferData} from '../model/offer-data.ts';

export const sortingOrders = {
  'Popular': () => 0,
  'Price: low to high': (a: OfferData, b: OfferData) => a.price - b.price,
  'Price: high to low': (a: OfferData, b: OfferData) => b.price - a.price,
  'Top rated first': (a: OfferData, b: OfferData) => b.rating - a.rating
};

export type SortingOrder = keyof typeof sortingOrders;
