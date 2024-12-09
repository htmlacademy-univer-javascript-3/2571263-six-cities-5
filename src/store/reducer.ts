import {createReducer} from '@reduxjs/toolkit';
import {
  changeSortingOrderAction, clearUserAction,
  fillOffersAction,
  requireAuthorizationAction,
  setOffersLoadingStatusAction, setUserAction,
  switchCityAction
} from './actions.ts';
import {OfferCardData} from '../model/offer-data.ts';
import {SortingOrder} from '../constants/sorting-order.ts';
import {AuthStatus} from '../constants/auth-status.ts';
import {User} from '../model/user.ts';

type State = {
  city: string;
  offers: OfferCardData[];
  order: SortingOrder;
  authStatus: AuthStatus;
  user?: User;
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
    })
    .addCase(setUserAction, (state, action) => {
      state.user = action.payload;
    })
    .addCase(clearUserAction, (state) => {
      state.user = undefined;
    });
});

