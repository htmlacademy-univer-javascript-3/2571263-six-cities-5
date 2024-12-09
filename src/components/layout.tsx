import {Outlet, useLocation} from 'react-router-dom';
import cn from 'classnames';
import {AppRoute} from '../constants/app-route.ts';
import Header from './header.tsx';

export default function Layout() {
  const location = useLocation();
  const className = cn('page', {
    'page--gray page--main': location.pathname === AppRoute.Main as string,
    'page--gray page--login': location.pathname === AppRoute.Login as string,
  });

  return (
    <div className={className}>
      <Header />
      <Outlet />
    </div>
  );
}
