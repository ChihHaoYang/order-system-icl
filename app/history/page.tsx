'use client';
import React from 'react';
import { useFoodState } from '../store';
import { LinkButton, Container } from '../components';
import Item from './item';

const History = () => {
  const { history } = useFoodState();

  function renderContent() {
    if (history.length === 0) {
      return (
        <div className='flex flex-col items-center mt-3'>
          <div className='mb-3'>There's no history</div>
        </div>
      );
    }

    return (
      <div className='w-full'>
        <ul>
          {history.map(item => {
            return <Item key={item.id} {...item} />;
          })}
        </ul>
      </div>
    );
  }

  return (
    <Container>
      <h2 className='font-bold mb-4'>History</h2>
      {renderContent()}
      <div className='mt-5'>
        <LinkButton href='menu'>Back to menu</LinkButton>
      </div>
    </Container>
  );
};

export default History;
