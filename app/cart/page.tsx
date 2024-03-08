'use client';
import React from 'react';
import { useFoodState } from '../store';
import { LinkButton } from '../components';

export type CartProps = {
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
};

const Cart = () => {
  const { cartItems, updateItem, submit } = useFoodState();
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col'>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => {
          return (
            <li key={item.id}>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>
                <input value={item.quantity} />
              </div>
            </li>
          );
        })}
      </ul>
      <LinkButton
        onClick={() => {
          submit();
        }}
        href='history'
      >
        Submit
      </LinkButton>
    </div>
  );
};

export default Cart;
