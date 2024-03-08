import { MenuCategory } from '../types';

export const MENU: MenuCategory[] = [
  {
    category: {
      id: 0,
      name: 'food'
    },
    items: [
      { id: 0, name: 'hot dog', price: 49 },
      { id: 1, name: 'cheese burger', price: 79 },
      { id: 2, name: 'fried chicken', price: 99 },
      { id: 3, name: 'steak', price: 300 }
    ]
  },
  {
    category: {
      id: 1,
      name: 'drink'
    },
    items: [
      { id: 100, name: 'black tea', price: 50 },
      { id: 101, name: 'green tea', price: 50 },
      { id: 102, name: 'milk', price: 50 },
      { id: 103, name: 'coffee', price: 90 }
    ]
  },
  {
    category: {
      id: 2,
      name: 'soup'
    },
    items: [
      { id: 200, name: 'corn soup', price: 55 },
      { id: 201, name: 'tomato soup', price: 40 },
      { id: 202, name: 'miso soup', price: 40 },
      { id: 203, name: 'onion soup', price: 40 }
    ]
  },
  {
    category: {
      id: 3,
      name: 'dessert'
    },
    items: [
      { id: 300, name: 'chocolate cake', price: 79 },
      { id: 301, name: 'cheese cake', price: 69 },
      { id: 302, name: 'apple pie', price: 50 },
      { id: 303, name: 'onion soup', price: 40 }
    ]
  }
];
