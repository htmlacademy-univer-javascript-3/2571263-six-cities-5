import {useAppDispatch, useAppSelector} from '../store/hooks.ts';
import {useState} from 'react';
import {SortingOrder, sortingOrders} from '../constants/sorting-order.ts';
import {changeSortingOrderAction} from '../store/actions.ts';

export default function SortingOptions() {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const selectedOrder = useAppSelector((state) => state.order);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
        {selectedOrder}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom${ isOpen ? ' places__options--opened' : ''}`}>
        {Object.keys(sortingOrders).map((order) => (
          <li
            key={order}
            className={`places__option${order === selectedOrder ? ' places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              dispatch(changeSortingOrderAction(order as SortingOrder));
              setIsOpen(false);
            }}
          >
            {order}
          </li>
        ))}
      </ul>
    </form>
  );
}
