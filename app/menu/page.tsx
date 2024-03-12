'use client';
import React, { Fragment } from 'react';
import Item from './item';
import { MENU } from '../constants';
import { useFoodState, updateItem } from '../store';
import { LinkButton, Container } from '../components';
import { useShallow } from 'zustand/react/shallow';

const Menu = () => {
  const itemCount = useFoodState(useShallow(state => state.cartItems.length));

  return (
    <Container>
      <ul className='w-full'>
        {MENU.map(food => {
          return (
            <Fragment key={food.category.id}>
              <li
                data-testid={`category-${food.category.id}`}
                className='capitalize font-bold text-lg'
              >
                {food.category.name}
              </li>
              <ul className='indent-5 mb-2'>
                {food.items.map(item => (
                  <Item
                    key={item.id}
                    {...item}
                    addToCart={() => updateItem(item.id, 1)}
                  />
                ))}
              </ul>
              <div className='w-full h-px bg-gray-400' />
            </Fragment>
          );
        })}
      </ul>
      <div className='mt-3'>
        <LinkButton href='/cart'>{`Go to cart (${itemCount})`}</LinkButton>
      </div>
    </Container>
  );
};

export default Menu;
