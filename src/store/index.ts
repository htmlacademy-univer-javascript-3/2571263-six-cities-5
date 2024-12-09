import {configureStore} from '@reduxjs/toolkit';
import {createApi} from '../services/api.ts';
import {authReducer} from './slices/auth.ts';
import {offersReducer} from './slices/offers.ts';
import {cityReducer} from './slices/city.ts';

const api = createApi();
export const store = configureStore({
  reducer: {
    city: cityReducer,
    offers: offersReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
