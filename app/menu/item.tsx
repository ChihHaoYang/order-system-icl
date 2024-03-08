import React, { memo } from 'react';
import { FoodItem } from '../types';

const Item = ({ name, price }: FoodItem) => {
  return (
    <li className='capitalize cursor-pointer hover:bg-gray-200'>{name}</li>
  );
};

export default memo(Item);
