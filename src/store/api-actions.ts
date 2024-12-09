import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from './state';
import {saveToken, dropToken} from '../services/token';
import {OfferCardData} from '../model/offer-data.ts';
import {APIRoute} from '../constants/api-route.ts';
import {fillOffersAction, requireAuthorizationAction, setOffersLoadingStatusAction} from './actions.ts';
import {AuthStatus} from '../constants/auth-status.ts';
import {AuthData, UserCredentials} from '../model/user.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatusAction(true));
    const {data} = await api.get<OfferCardData[]>(APIRoute.Offers);
    dispatch(setOffersLoadingStatusAction(false));
    dispatch(fillOffersAction(data));
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
      await api.get(APIRoute.Login);
      dispatch(requireAuthorizationAction(AuthStatus.Authenticated));
    } catch {
      dispatch(requireAuthorizationAction(AuthStatus.Unauthenticated));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserCredentials>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorizationAction(AuthStatus.Authenticated));
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
    dispatch(requireAuthorizationAction(AuthStatus.Unauthenticated));
  },
);
