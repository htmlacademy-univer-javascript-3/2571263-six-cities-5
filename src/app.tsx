import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './pages/main-page.tsx';
import LoginPage from './pages/login-page.tsx';
import FavouritesPage from './pages/favourites-page.tsx';
import OfferPage from './pages/offer-page.tsx';
import NotFound from './not-found.tsx';
import PrivateRoute from './components/private-route.tsx';
import {AuthStatus} from './constants/auth-status.ts';

type AppProps = {
  offersCount: number;
}

export default function App({offersCount}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage offersCount={offersCount} />}/>
          <Route path="/login" element={<LoginPage />}/>
          <PrivateRoute path="/favorites" element={<FavouritesPage />} authStatus={AuthStatus.Authenticated} />
          <Route path="/offer/:id" element={<OfferPage />}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
