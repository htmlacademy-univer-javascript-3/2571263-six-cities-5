import { createSlice } from '@reduxjs/toolkit';
import {
  changeSortingOrderAction,
  fillOffersAction,
  setOffersLoadingStatusAction,
} from '../actions.ts';
import {OfferCardData} from '../../model/offer-data.ts';
import {SortingOrder} from '../../constants/sorting-order.ts';

type OffersState = {
  offers: OfferCardData[];
  order: SortingOrder;
  areOffersLoading: boolean;
}
const initialState: OffersState = {
  offers: [],
  order: 'Popular',
  areOffersLoading: false,
};
export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fillOffersAction, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(changeSortingOrderAction, (state, action) => {
        state.order = action.payload;
      })
      .addCase(setOffersLoadingStatusAction, (state, action) => {
        state.areOffersLoading = action.payload;
      });
  }
});

export const offersReducer = offersSlice.reducer;
