export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  principal: boolean;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  active: boolean;
}
