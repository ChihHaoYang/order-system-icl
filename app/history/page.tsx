'use client';
import React from 'react';
import { useFoodState } from '../store';
import { LinkButton } from '../components';

const History = () => {
  const { history } = useFoodState();
  console.log(history);
  return <LinkButton href='menu'>Back to menu</LinkButton>;
};

export default History;
