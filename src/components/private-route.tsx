import {Navigate, Outlet} from 'react-router-dom';
import {AuthStatus} from '../constants/auth-status.ts';
import {AppRoute} from '../constants/app-route.ts';
import {useAppSelector} from '../hooks/store-hooks.ts';

type PrivateRouteProps = {
  redirect?: string;
};

export default function PrivateRoute({redirect}: PrivateRouteProps) {
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  return authStatus === AuthStatus.Authenticated
    ? <Outlet />
    : <Navigate to={redirect ?? AppRoute.Login} />;
}
