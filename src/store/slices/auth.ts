import {AuthStatus} from '../../constants/auth-status.ts';
import {User} from '../../model/user.ts';
import { createSlice } from '@reduxjs/toolkit';
import {requireAuthorizationAction, setUserAction} from '../actions.ts';

type AuthState = {
  authStatus: AuthStatus;
  user: User | null;
}
const initialState: AuthState = {
  authStatus: AuthStatus.Unknown,
  user: null
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requireAuthorizationAction, (state, action) => {
        state.authStatus = action.payload;
      })
      .addCase(setUserAction, (state, action) => {
        state.user = action.payload;
      });
  }
});

export const authReducer = authSlice.reducer;
