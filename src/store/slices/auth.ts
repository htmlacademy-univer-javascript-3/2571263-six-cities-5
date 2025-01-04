import {AuthStatus} from '../../constants/auth-status.ts';
import {User} from '../../model/user.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
  reducers: {
    requireAuthorization(state, action: PayloadAction<AuthStatus>) {
      state.authStatus = action.payload;
    },
    setUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },
  }
});

export const { requireAuthorization, setUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
