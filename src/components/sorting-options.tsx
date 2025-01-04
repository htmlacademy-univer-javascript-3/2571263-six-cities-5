﻿import {useAppDispatch, useAppSelector} from '../hooks/store-hooks.ts';
import {useState} from 'react';
import {SortingOrder, SortingOrders} from '../constants/sorting-order.ts';
import {changeSortingOrder} from '../store/slices/offers.ts';

export default function SortingOptions() {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const selectedOrder = useAppSelector((state) => state.offers.order);

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
        {Object.keys(SortingOrders).map((order) => (
          <li
            key={order}
            className={`places__option${order === selectedOrder ? ' places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              dispatch(changeSortingOrder(order as SortingOrder));
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
