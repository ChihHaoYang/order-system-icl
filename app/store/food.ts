import { create } from 'zustand';
import { MENU } from '../constants';
import { CartItem, HistoryItem } from '../types';

export interface FoodState {
  foodDic: Record<number, Omit<CartItem, 'quantity'>>;
  cartItems: CartItem[];
  history: HistoryItem[];
}

export const useFoodState = create<FoodState>()(set => ({
  foodDic: MENU.reduce((acc, category) => {
    category.items.forEach(item => {
      acc[item.id] = item;
    });
    return acc;
  }, {} as Record<number, Omit<CartItem, 'quantity'>>),
  cartItems: [],
  history: []
}));

export const setItemValue = (id: number, newValue: number) => {
  useFoodState.setState(state => {
    if (newValue <= 0) {
      return {
        cartItems: state.cartItems.filter(e => e.id !== id)
      };
    }
    return {
      cartItems: state.cartItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: newValue
          };
        }

        return item;
      })
    };
  });
};

export const updateItem = (id: number, by: number) => {
  useFoodState.setState(state => {
    const { cartItems } = state;
    const index = cartItems.findIndex(e => e.id === id);
    if (index > -1) {
      const data = cartItems[index];
      const { quantity } = data;
      const newQty = quantity + by;

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

    if (by < 0) {
      // Not in the list with negative qty
      return state;
    }

    // Add to list
    return {
      cartItems: [...state.cartItems, { ...state.foodDic[id], quantity: by }]
    };
  });
};

export const submit = () => {
  useFoodState.setState(state => {
    return {
      history: [
        ...state.history,
        {
          id: state.history.length,
          items: state.cartItems,
          total: state.cartItems.reduce(
            (acc, current) => acc + current.price * current.quantity,
            0
          )
        }
      ],
      cartItems: []
    };
  });
};

export const removeFromHistory = (id: number) => {
  useFoodState.setState(state => {
    return {
      history: state.history.filter(e => e.id !== id)
    };
  });
};
