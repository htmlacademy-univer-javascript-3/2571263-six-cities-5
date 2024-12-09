import {sortingOrders} from '../constants/sorting-order.ts';
import {State} from './state.ts';
import {createSelector} from '@reduxjs/toolkit';


// export const offersSelector = (state: State) => state.offers
//   .filter((offer) => offer.location.name === state.city)
//   .sort(sortingOrders[state.order]);

export const offersSelector = createSelector(
  [
    (state: State) => state.offers,
    (state: State) => state.order,
    (state: State) => state.city,
  ],
  (offers, order, city) =>
    offers.filter((o) => o.city.name === city).sort(sortingOrders[order])
);
