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
  },
});

export const { setCurrentOffer, fillNearbyOffers, fillReviews } = currentOfferSlice.actions;

export const currentOfferReducer = currentOfferSlice.reducer;
