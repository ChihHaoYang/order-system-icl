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
