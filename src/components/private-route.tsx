import {Navigate, Route} from 'react-router-dom';
import {AuthStatus} from '../constants/auth-status.ts';
import React, {ReactNode} from 'react';

type PrivateRouteProps = {
  path?: string;
  redirect?: string;
  index?: false;
  element?: React.JSX.Element;
  authStatus: AuthStatus;
  children?: ReactNode;
};

export default function PrivateRoute({authStatus, element, index, path, children, redirect}: PrivateRouteProps) {
  return authStatus === AuthStatus.Authenticated
    ? <Route element={element} index={index} path={path}>{children}</Route>
    : <Navigate to={redirect ?? '/login'} />;
}
