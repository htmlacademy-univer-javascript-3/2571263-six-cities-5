import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type CityState = {
  city: string;
}
const initialState: CityState = {
  city: 'Paris'
};
export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    switchCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    }
  }
});

export const { switchCity } = citySlice.actions;

export const cityReducer = citySlice.reducer;
