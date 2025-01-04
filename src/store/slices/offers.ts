import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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
  reducers: {
    fillOffers(state, action: PayloadAction<OfferCardData[]>) {
      state.offers = action.payload;
    },
    changeSortingOrder(state, action: PayloadAction<SortingOrder>) {
      state.order = action.payload;
    },
    setOffersLoadingStatus(state, action: PayloadAction<boolean>) {
      state.areOffersLoading = action.payload;
    }
  }
});

export const { fillOffers, changeSortingOrder, setOffersLoadingStatus } = offersSlice.actions;
export const offersReducer = offersSlice.reducer;
