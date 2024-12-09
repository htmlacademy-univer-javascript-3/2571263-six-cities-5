import {Navigate, Outlet} from 'react-router-dom';
import {AuthStatus} from '../constants/auth-status.ts';
import {AppRoute} from '../constants/app-route.ts';

type PrivateRouteProps = {
  redirect?: string;
  authStatus: AuthStatus;
};

export default function PrivateRoute({authStatus, redirect}: PrivateRouteProps) {
  return authStatus === AuthStatus.Authenticated
    ? <Outlet />
    : <Navigate to={redirect ?? AppRoute.Login} />;
}
