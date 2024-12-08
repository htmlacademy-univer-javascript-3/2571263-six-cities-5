import {OfferDataMocks} from '../mocks/offer-data-mocks.ts';
import { createReducer } from '@reduxjs/toolkit';
import {changeSortingOrderAction, fillOffersAction, switchCityAction} from './actions.ts';
import {OfferData} from '../model/offer-data.ts';
import {SortingOrder} from '../constants/sorting-order.ts';

type State = {
  city: string;
  offers: OfferData[];
  order: SortingOrder;
};

const initialState: State = {
  city: 'Paris',
  offers: OfferDataMocks,
  order: 'Popular',
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortingOrderAction, (state, action) => {
      state.order = action.payload;
    });
});
