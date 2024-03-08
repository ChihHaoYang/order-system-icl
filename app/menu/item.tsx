import React, { memo } from 'react';
import { FoodItem } from '../types';

export interface ItemProps extends FoodItem {
  addToCart: () => void;
}

const Item = ({ id, name, price, addToCart }: ItemProps) => {
  console.log(`render: ${id}`);
  return (
    <li className='capitalize flex justify-between mb-1'>
      <div className='flex-1 whitespace-nowrap'>
        <div className='font-semibold text-base'>{name}</div>
        <div className='text-sm'>{`$${price}`}</div>
      </div>
      <div>
        <button
          className='bg-sky-600 text-white px-3 py-1 rounded-md hover:bg-sky-800'
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default memo(Item);
