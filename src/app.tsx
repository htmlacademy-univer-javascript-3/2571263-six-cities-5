import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './pages/main-page.tsx';
import LoginPage from './pages/login-page.tsx';
import FavouritesPage from './pages/favourites-page.tsx';
import OfferPage from './pages/offer-page.tsx';
import NotFound from './not-found.tsx';
import PrivateRoute from './components/private-route.tsx';
import {AuthStatus} from './constants/auth-status.ts';
import {AppRoute} from './constants/app-route.ts';
import {useEffect} from 'react';
import {store} from './store';
import {fetchOffersAction} from './store/api-actions.ts';

export default function App() {
  useEffect(() => {
    store.dispatch(fetchOffersAction());
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage />}/>
          <Route path={AppRoute.Login} element={<LoginPage />}/>
          <Route element={<PrivateRoute authStatus={AuthStatus.Authenticated} />}>
            <Route path={AppRoute.Favorites} element={<FavouritesPage />} />
          </Route>
          <Route path={AppRoute.Offer} element={<OfferPage />}/>
        </Route>
        <Route path={AppRoute.Other} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
