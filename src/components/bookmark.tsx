import cn from 'classnames';
import {useAppDispatch} from '../store/hooks.ts';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../constants/app-route.ts';
import {changeFavoriteStatusAction} from '../store/api-actions.ts';

type BookmarkProps = {
  offerId: string;
  isFavourite: boolean;
}

function Bookmark({ offerId, isFavourite, type }: BookmarkProps & { type: string }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const changeFavouriteStatus = () => {
    dispatch(changeFavoriteStatusAction({offerId, isFavourite: !isFavourite}))
      .unwrap()
      .catch(() => navigate(AppRoute.Login));
  };
  return (
    <button
      className={cn('button', `${type}__bookmark-button`, {
        [`${type}__bookmark-button--active`]: isFavourite,
      })}
      type="button"
      onClick={changeFavouriteStatus}
    >
      <svg className={`${type}__bookmark-icon`} width={18} height={19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavourite ? 'Already bookmarked' : 'Add to bookmarks'}</span>
    </button>);
}

export function CardBookmark(props: BookmarkProps) {
  return <Bookmark {...props} type='place-card' />;
}

export function OfferBookmark(props: BookmarkProps) {
  return <Bookmark {...props} type='offer' />;
}
