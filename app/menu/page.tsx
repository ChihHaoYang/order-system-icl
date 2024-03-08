import React, { Fragment, useState } from 'react';
import { FOOD_LIST } from '../constants';
import Item from './item';

const Menu = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <ul className='w-80'>
        {FOOD_LIST.map(food => {
          return (
            <Fragment key={food.category}>
              <li className='capitalize font-bold'>{food.category}</li>
              <ul className='indent-5 mb-2'>
                {food.items.map(item => (
                  <Item {...item} />
                ))}
              </ul>
              <div className='w-full h-px bg-gray-400' />
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
