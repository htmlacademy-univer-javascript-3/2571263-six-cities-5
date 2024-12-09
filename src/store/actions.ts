import {createAction} from '@reduxjs/toolkit';
import {OfferCardData} from '../model/offer-data.ts';
import {SortingOrder} from '../constants/sorting-order.ts';
import {AuthStatus} from '../constants/auth-status.ts';

export const switchCityAction = createAction<string>('switchCity');

export const fillOffersAction = createAction<OfferCardData[]>('fillOffers');

export const changeSortingOrderAction = createAction<SortingOrder>('changeSortingOrder');

export const requireAuthorizationAction = createAction<AuthStatus>('requireAuthorization');

export const setOffersLoadingStatusAction = createAction<boolean>('setOffersLoadingStatus');
