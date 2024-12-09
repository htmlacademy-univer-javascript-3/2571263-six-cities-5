import {sortingOrders} from '../constants/sorting-order.ts';
import {State} from './state.ts';
import {createSelector} from '@reduxjs/toolkit';

export const offersSelector = createSelector(
  [
    (state: State) => state.offers.offers,
    (state: State) => state.offers.order,
    (state: State) => state.city.city,
  ],
  (offers, order, city) =>
    offers.filter((o) => o.city.name === city).sort(sortingOrders[order])
);
