import { FoodCategory } from '../types';

export const FOOD_LIST: FoodCategory[] = [
  {
    category: 'food',
    items: [
      { name: 'hot dog', price: 49 },
      { name: 'cheese burger', price: 79 },
      { name: 'fried chicken', price: 99 },
      { name: 'steak', price: 300 }
    ]
  },
  {
    category: 'drink',
    items: [
      { name: 'black tea', price: 50 },
      { name: 'green tea', price: 50 },
      { name: 'milk', price: 50 },
      { name: 'coffee', price: 90 }
    ]
  },
  {
    category: 'soup',
    items: [
      { name: 'corn soup', price: 55 },
      { name: 'tomato soup', price: 40 },
      { name: 'miso soup', price: 40 },
      { name: 'onion soup', price: 40 }
    ]
  },
  {
    category: 'dessert',
    items: [
      { name: 'chocolate cake', price: 79 },
      { name: 'cheese cake', price: 69 },
      { name: 'apple pie', price: 50 },
      { name: 'onion soup', price: 40 }
    ]
  }
];
