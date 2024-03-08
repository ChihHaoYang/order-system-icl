export type FoodItem = {
  name: string;
  price: number;
};

export type FoodCategory = {
  category: string;
  items: FoodItem[];
};
