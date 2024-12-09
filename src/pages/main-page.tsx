import CityTabs from '../components/cities.tsx';
import {useAppDispatch, useAppSelector} from '../store/hooks.ts';
import {switchCityAction} from '../store/actions.ts';
import Spinner from '../components/spinner/spinner.tsx';
import OfferScreen from '../components/offer-screen.tsx';

export default function MainPage() {
  const dispatch = useAppDispatch();

  const areOffersLoading = useAppSelector((state) => state.areOffersLoading);
  const selectedCity = useAppSelector((state) => state.city);

  return (
    <body>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="../../markup/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <CityTabs selectedCity={selectedCity} onTabClick={(cityName) => dispatch(switchCityAction(cityName))} />
          <div className="cities">
            <div className="cities__places-container container">
              { areOffersLoading ? <Spinner /> : <OfferScreen selectedCity={selectedCity} /> }
            </div>
          </div>
        </main>
      </div>
    </body>
  );
}
