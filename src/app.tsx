import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './pages/main-page.tsx';
import LoginPage from './pages/login-page.tsx';
import FavouritesPage from './pages/favourites-page.tsx';
import OfferPage from './pages/offer-page.tsx';
import NotFound from './not-found.tsx';
import PrivateRoute from './components/private-route.tsx';
import {AuthStatus} from './constants/auth-status.ts';
import {AppRoute} from './constants/app-route.ts';
import {OfferData} from './model/offer-data.ts';

type AppProps = {
  offers: OfferData[];
}

export default function App({offers}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage offers={offers} />}/>
          <Route path={AppRoute.Login} element={<LoginPage />}/>
          <Route element={<PrivateRoute authStatus={AuthStatus.Authenticated} />}>
            <Route path={AppRoute.Favorites} element={<FavouritesPage offers={offers} />} />
          </Route>
          <Route path={AppRoute.Offer} element={<OfferPage offers={offers}/>}/>
        </Route>
        <Route path={AppRoute.Other} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
