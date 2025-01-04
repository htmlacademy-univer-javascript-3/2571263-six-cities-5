import CityTabs from '../components/cities.tsx';
import {useAppDispatch, useAppSelector} from '../store/hooks.ts';
import Spinner from '../components/spinner/spinner.tsx';
import CityOffers from '../components/city-offers.tsx';
import {switchCity} from '../store/slices/city.ts';

export default function MainPage() {
  const dispatch = useAppDispatch();

  const areOffersLoading = useAppSelector((state) => state.offers.areOffersLoading);
  const selectedCity = useAppSelector((state) => state.city.city);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <CityTabs selectedCity={selectedCity} onTabClick={(cityName) => dispatch(switchCity(cityName))} />
      <div className="cities">
        { areOffersLoading ? <Spinner /> : <CityOffers selectedCity={selectedCity} /> }
      </div>
    </main>
  );
}
