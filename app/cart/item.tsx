import React, { memo } from 'react';
import { setItemValue } from '../store';
import { CartItem } from '../types';

const Item = ({ id, name, price, quantity }: CartItem) => {
  return (
    <li
      data-testid={`cart-item-${id}`}
      className='capitalize flex justify-between border-b-2 mb-2 pb-2'
    >
      <div className='flex-1 flex'>
        <div>{`${name} ($${price})`}</div>
      </div>
      <div>
        <input
          value={quantity}
          type='number'
          onChange={e => {
            const newValue = +e.target.value;
            if (newValue <= 0) {
              const confirm = window.confirm(
                'Remove this item from your cart?'
              );
              if (!confirm) {
                return;
              }
            }
            setItemValue(id, +e.target.value);
          }}
          className='w-24 border text-right'
        />
      </div>
    </li>
  );
};

export default memo(Item);
