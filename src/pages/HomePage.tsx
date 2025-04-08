import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import ProductsGrid from "../components/ProductsGrid";
import Promotions from "../components/Promotions";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { getFilteredProducts } from "../utils/filterProductsByCategory";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("proteinas");

  console.log("Selected category", selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />

        <Categories onCategoryChange={setSelectedCategory} />

        <ProductsGrid products={getFilteredProducts(selectedCategory)} />

        <Promotions />
      </main>

      <Footer />
    </div>
  );
}
