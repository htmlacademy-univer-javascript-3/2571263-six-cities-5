import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OfferCardData, OfferPageData} from '../../model/offer-data.ts';
import {Review} from '../../model/review.ts';

type CurrentOfferState = {
  currentOffer: OfferPageData | null;
  nearbyOffers: OfferCardData[];
  reviews: Review[];
}

const initialState: CurrentOfferState = {
  currentOffer: null,
  nearbyOffers: [],
  reviews: [],
};

export const currentOfferSlice = createSlice({
  name: 'currentOffer',
  initialState,
  reducers: {
    setCurrentOffer(state, action: PayloadAction<OfferPageData | null>) {
      state.currentOffer = action.payload;
    },
    fillNearbyOffers(state, action: PayloadAction<OfferCardData[]>) {
      state.nearbyOffers = action.payload;
    },
    fillReviews(state, action: PayloadAction<Review[]>) {
      state.reviews = action.payload;
    },
    changeCurrentOfferFavouriteStatus(state, action: PayloadAction<{offerId: string; isFavourite: boolean}>) {
      if (state.currentOffer && state.currentOffer.id === action.payload.offerId) {
        state.currentOffer.isFavorite = action.payload.isFavourite;
      }
    },
    changeNearbyFavouriteStatus(state, action: PayloadAction<{offerId: string; isFavourite: boolean}>) {
      const offer = state.nearbyOffers.find((x) => x.id === action.payload.offerId);
      if (offer) {
        offer.isFavorite = action.payload.isFavourite;
      }
    },
  },
});

export const {
  setCurrentOffer,
  fillNearbyOffers,
  fillReviews,
  changeCurrentOfferFavouriteStatus,
  changeNearbyFavouriteStatus
} = currentOfferSlice.actions;

export const currentOfferReducer = currentOfferSlice.reducer;
