import { create } from 'zustand';
import { MENU } from '../constants';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export interface FoodState {
  foodDic: Record<number, Omit<CartItem, 'quantity'>>;
  cartItems: CartItem[];
  history: CartItem[][];
  updateItem: (id: number, delta: number) => void;
  submit: () => void;
}

export const useFoodState = create<FoodState>()(set => ({
  foodDic: MENU.reduce((acc, category) => {
    category.items.forEach(item => {
      acc[item.id] = item;
    });
    return acc;
  }, {} as Record<number, Omit<CartItem, 'quantity'>>),
  cartItems: [],
  history: [],
  updateItem: (id, delta) =>
    set(state => {
      const { cartItems } = state;
      const index = cartItems.findIndex(e => e.id === id);
      if (index > -1) {
        const data = cartItems[index];
        const { quantity } = data;
        const newQty = quantity + delta;

        if (newQty <= 0) {
          // Remove from the cart
          return {
            cartItems: [
              ...cartItems.slice(0, index),
              ...cartItems.slice(index + 1)
            ]
          };
        }

        return {
          cartItems: [
            ...cartItems.slice(0, index),
            { ...data, quantity: newQty },
            ...cartItems.slice(index + 1)
          ]
        };
      }

      if (delta < 0) {
        // Not in the list with negative qty
        return state;
      }

      // Add to list
      return {
        cartItems: [
          ...state.cartItems,
          { ...state.foodDic[id], quantity: delta }
        ]
      };
    }),
  submit: () =>
    set(state => {
      return {
        history: [...state.history, [...state.cartItems]],
        cartItems: []
      };
    })
}));