export interface FoodItem {
  id: number;
  name: string;
  price: number;
}

export interface MenuCategory {
  category: {
    id: number;
    name: string;
  };
  items: FoodItem[];
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface HistoryItem {
  id: number;
  items: CartItem[];
  total: number;
}
