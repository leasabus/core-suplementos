import { products } from "../data/products";

export const getFilteredProducts = (selectedCategory: string) => {
  const filteredProducts =
    selectedCategory === "proteinas"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return filteredProducts;
};
