import { createSlice } from '@reduxjs/toolkit';
import {switchCityAction} from '../actions.ts';

type CityState = {
  city: string;
}
const initialState: CityState = {
  city: 'Paris'
};
export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(switchCityAction, (state, action) => {
        state.city = action.payload;
      });
  }
});

export const cityReducer = citySlice.reducer;
