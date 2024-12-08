import {OfferDataMocks} from '../mocks/offer-data-mocks.ts';
import { createReducer } from '@reduxjs/toolkit';
import {fillOffersAction, switchCityAction} from './actions.ts';

const initialState = {
  city: 'Paris',
  offers: OfferDataMocks
};

export const updateStore = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersAction, (state, action) => {
      state.offers = action.payload;
    });
});
