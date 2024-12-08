import {createAction} from '@reduxjs/toolkit';
import {OfferData} from '../model/offer-data.ts';
import {SortingOrder} from '../constants/sorting-order.ts';

export const switchCityAction = createAction('switchCity', (value: string) => ({
  payload: value
}));

export const fillOffersAction = createAction('fillOffers', (value: OfferData[]) => ({
  payload: value
}));

export const changeSortingOrderAction = createAction('changeSortingOrder', (value: SortingOrder) => ({
  payload: value
}));
