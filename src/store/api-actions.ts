import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from './state';
import {dropToken, saveToken} from '../services/token';
import {OfferCardData, OfferPageData} from '../model/offer-data.ts';
import {APIRoute} from '../constants/api-route.ts';
import {AuthStatus} from '../constants/auth-status.ts';
import {AuthData, User, UserCredentials} from '../model/user.ts';
import JoinUrls from '../services/join-urls.ts';
import {Review} from '../model/review.ts';

import {fillNearbyOffers, fillReviews, setCurrentOffer} from './slices/current-offer.ts';
import {requireAuthorization, setUser} from './slices/auth.ts';
import {fillOffers, setOffersLoadingStatus} from './slices/offers.ts';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<OfferCardData[]>(APIRoute.Offers);
    dispatch(fillOffers(data));
    dispatch(setOffersLoadingStatus(false));
  },
);

export const fetchCurrentOfferAction = createAsyncThunk<OfferPageData | null, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'fetchCurrentOffer',
  async (offerId, {dispatch, extra: api}) => {
    const {data: offer} = await api.get<OfferPageData>(JoinUrls(APIRoute.Offers, offerId));
    dispatch(setCurrentOffer(offer));
    const {data: nearbyOffers} = await api.get<OfferCardData[]>(JoinUrls(APIRoute.Offers, offerId, 'nearby'));
    dispatch(fillNearbyOffers(nearbyOffers));
    const {data: reviews} = await api.get<Review[]>(JoinUrls(APIRoute.Reviews, offerId));
    dispatch(fillReviews(reviews));
    return offer;
  },
);

export const sendReviewAction = createAsyncThunk<
  void,
  {
    rating: number;
    review: string;
  },
  {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'sendReview',
  async ({rating, review: comment}, {dispatch, getState, rejectWithValue, extra: api}) => {
    if (getState().auth.authStatus !== AuthStatus.Authenticated) {
      rejectWithValue('Unauthorized');
    }
    const offerId = getState().currentOffer.currentOffer!.id;
    const {data: review} = await api.post<Review>(JoinUrls(APIRoute.Reviews, offerId), {rating, comment});
    dispatch(fillReviews([...getState().currentOffer.reviews,review]));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data: user} = await api.get<User>(APIRoute.Login);
      dispatch(requireAuthorization(AuthStatus.Authenticated));
      dispatch(setUser(user));
    } catch {
      dispatch(requireAuthorization(AuthStatus.Unauthenticated));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserCredentials>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthStatus.Authenticated));
    dispatch(checkAuthAction());
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthStatus.Unauthenticated));
    dispatch(setUser(null));
  },
);
