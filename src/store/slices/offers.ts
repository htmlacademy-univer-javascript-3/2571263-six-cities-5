import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OfferCardData} from '../../model/offer-data.ts';
import {SortingOrder} from '../../constants/sorting-order.ts';

type OffersState = {
  offers: OfferCardData[];
  favourites: OfferCardData[];
  order: SortingOrder;
  areOffersLoading: boolean;
}
const initialState: OffersState = {
  offers: [],
  favourites: [],
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
    fillFavourites(state, action: PayloadAction<OfferCardData[]>) {
      state.favourites = action.payload;
    },
    changeSortingOrder(state, action: PayloadAction<SortingOrder>) {
      state.order = action.payload;
    },
    setOffersLoadingStatus(state, action: PayloadAction<boolean>) {
      state.areOffersLoading = action.payload;
    },
    changeFavoriteStatus(state, action: PayloadAction<{offerId: string; isFavourite: boolean}>) {
      const offer = state.offers.find((x) => x.id === action.payload.offerId);
      if (offer) {
        offer.isFavorite = action.payload.isFavourite;
        if (action.payload.isFavourite && !state.favourites.find((x) => x.id === action.payload.offerId)) {
          state.favourites.push(offer);
        } else {
          state.favourites = state.favourites.filter((x) => x.id !== action.payload.offerId);
        }
      }
    }
  }
});

export const {
  fillOffers,
  fillFavourites,
  changeSortingOrder,
  setOffersLoadingStatus,
  changeFavoriteStatus
} = offersSlice.actions;
export const offersReducer = offersSlice.reducer;
