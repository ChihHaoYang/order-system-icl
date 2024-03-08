'use client';
import React, { Fragment, useCallback } from 'react';
import Link from 'next/link';
import Item from './item';
import { MENU } from '../constants';
import { useFoodState } from '../store';
import { useShallow } from 'zustand/react/shallow';
import { LinkButton } from '../components';

const Menu = () => {
  const updateItem = useFoodState(state => state.updateItem);

  const addToCart = useCallback((id: number) => {
    return () => updateItem(id, 1);
  }, []);

  // console.log(cartItemLength);

  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      <div className='w-80 flex justify-center'>
        <ul className='w-full'>
          {MENU.map(food => {
            return (
              <Fragment key={food.category.id}>
                <li className='capitalize font-bold text-lg'>
                  {food.category.name}
                </li>
                <ul className='indent-5 mb-2'>
                  {food.items.map(item => (
                    <Item
                      key={item.id}
                      {...item}
                      addToCart={addToCart(item.id)}
                    />
                  ))}
                </ul>
                <div className='w-full h-px bg-gray-400' />
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className='mt-3'>
        <LinkButton href='/cart'>Go to cart</LinkButton>
      </div>
    </div>
  );
};

export default Menu;
