import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../pages/main-page.tsx';
import LoginPage from '../pages/login-page.tsx';
import FavouritesPage from '../pages/favourites-page.tsx';
import OfferPage from '../pages/offer-page.tsx';
import NotFoundPage from '../pages/not-found-page.tsx';
import PrivateRoute from './private-route.tsx';
import {AppRoute} from '../constants/app-route.ts';
import {useEffect} from 'react';
import {checkAuthAction, fetchFavoritesAction, fetchOffersAction} from '../store/api-actions.ts';
import {useAppDispatch} from '../hooks/store-hooks.ts';
import Layout from './layout.tsx';

export default function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthAction()).finally(() => {
      dispatch(fetchOffersAction());
      dispatch(fetchFavoritesAction());
    });
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path={AppRoute.Login} element={<LoginPage />}/>
          <Route element={<PrivateRoute />}>
            <Route path={AppRoute.Favorites} element={<FavouritesPage />} />
          </Route>
          <Route path={AppRoute.Offer} element={<OfferPage />}/>
        </Route>
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
