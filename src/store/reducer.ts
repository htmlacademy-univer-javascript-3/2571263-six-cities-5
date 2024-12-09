import {createReducer} from '@reduxjs/toolkit';
import {
  changeSortingOrderAction,
  fillOffersAction,
  requireAuthorizationAction,
  setOffersLoadingStatusAction,
  switchCityAction
} from './actions.ts';
import {OfferCardData} from '../model/offer-data.ts';
import {SortingOrder} from '../constants/sorting-order.ts';
import {AuthStatus} from '../constants/auth-status.ts';

type State = {
  city: string;
  offers: OfferCardData[];
  order: SortingOrder;
  authStatus: AuthStatus;
  areOffersLoading: boolean;
};

const initialState: State = {
  city: 'Paris',
  offers: [],
  order: 'Popular',
  authStatus: AuthStatus.Unknown,
  areOffersLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(switchCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortingOrderAction, (state, action) => {
      state.order = action.payload;
    })
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setOffersLoadingStatusAction, (state, action) => {
      state.areOffersLoading = action.payload;
    });
});

