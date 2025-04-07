import { Heart, Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/product-images/logo.png";

const Navbar = () => {
  return (
    <header className="container mx-auto py-4 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src={logo} className="h-[100px]" alt="" />
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-sm font-medium hover:text-primary">
          Home
        </Link>
        <Link to="/products" className="text-sm font-medium hover:text-primary">
          Productos
        </Link>
        <Link to="/service" className="text-sm font-medium hover:text-primary">
          Servicios
        </Link>
        <Link to="/contact" className="text-sm font-medium hover:text-primary">
          Contacto
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <button className="btn-navbar" aria-label="Search">
          <Search className="h-5 w-5" />
        </button>
        <button className="btn-navbar" aria-label="Wishlist">
          <Heart className="h-5 w-5" />
        </button>
        <button aria-label="Cart" className="relative btn-navbar">
          <ShoppingCart className="h-5 w-5" />
          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
            2
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
