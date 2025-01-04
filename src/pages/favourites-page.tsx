import {FavoritesList} from '../components/favorites-list.tsx';
import {useAppSelector} from '../hooks/store-hooks.ts';

export default function FavouritesPage() {
  const favouritesCount = useAppSelector((state) => state.offers.favourites.length);
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {favouritesCount > 0
          ?
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList />
          </section>
          :
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future
                trips.
              </p>
            </div>
          </section>}
      </div>
    </main>
  );
}
