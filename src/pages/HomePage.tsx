import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import ProductsGrid from "../components/ProductsGrid";
import Promotions from "../components/Promotions";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <HeroSection />

        <Categories />

        <ProductsGrid />

        <Promotions />
      </main>

      <Footer />
    </div>
  );
}
