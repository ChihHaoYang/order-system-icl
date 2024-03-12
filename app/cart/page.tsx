'use client';
import React from 'react';
import { useFoodState, updateItem } from '../store';
import { LinkButton, Container } from '../components';
import Item from './item';

export type CartProps = {
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
};

const Cart = () => {
  const { cartItems, submit } = useFoodState();

  function renderContent() {
    if (cartItems.length === 0) {
      return (
        <div className='flex flex-col items-center mt-3'>
          <div className='mb-3'>There's no item in your cart</div>
          <LinkButton href='menu'>Back to menu</LinkButton>
        </div>
      );
    }

    const total: number = cartItems.reduce((acc, current) => {
      return acc + current.price * current.quantity;
    }, 0);

    return (
      <div className='w-full'>
        <ul>
          {cartItems.map(item => {
            return <Item key={item.id} {...item} />;
          })}
        </ul>
        <div className='flex justify-end mt-4'>Total: ${total}</div>
        <div className='flex justify-between mt-5'>
          <LinkButton href='menu'>Add more items</LinkButton>
          <LinkButton
            onClick={() => {
              submit();
            }}
            href='history'
          >
            Submit
          </LinkButton>
        </div>
      </div>
    );
  }

  return (
    <Container>
      <h2 className='font-bold mb-4'>Cart</h2>
      {renderContent()}
    </Container>
  );
};

export default Cart;
