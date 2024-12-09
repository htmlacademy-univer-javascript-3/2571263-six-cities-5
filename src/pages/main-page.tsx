import CityTabs from '../components/cities.tsx';
import {useAppDispatch, useAppSelector} from '../store/hooks.ts';
import {switchCityAction} from '../store/actions.ts';
import Spinner from '../components/spinner/spinner.tsx';
import CityOffers from '../components/city-offers.tsx';

export default function MainPage() {
  const dispatch = useAppDispatch();

  const areOffersLoading = useAppSelector((state) => state.areOffersLoading);
  const selectedCity = useAppSelector((state) => state.city);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CityTabs selectedCity={selectedCity} onTabClick={(cityName) => dispatch(switchCityAction(cityName))} />
      <div className="cities">
        { areOffersLoading ? <Spinner /> : <CityOffers selectedCity={selectedCity} /> }
      </div>
    </main>
  );
}
