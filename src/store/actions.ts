import {createAction} from '@reduxjs/toolkit';
import {OfferData} from '../model/offer-data.ts';

export const switchCityAction = createAction('switchCity', (value: string) => ({
  payload: value
}));

export const fillOffersAction = createAction('fillOffers', (value: OfferData[]) => ({
  payload: value
}));
