import { ChevronLeft, ChevronRight } from "lucide-react";

import React from "react";

const Categories = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
          <button className="category-button">Electronics</button>
          <button className="category-button">Cosmetics</button>
          <button className="category-button">Cloths</button>
          <button className="category-button">Books</button>
          <button className="category-button">Furniture</button>
          <button className="category-button active">See all</button>
        </div>
        <div className="flex space-x-2">
          <button className="p-1 border rounded">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="p-1 border rounded">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;

{
  /* Categories */
}
