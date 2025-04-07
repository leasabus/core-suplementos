import { Link } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingCart,
  Facebook,
  Twitter,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-primary">E</span>-shop
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link
            to="/products"
            className="text-sm font-medium hover:text-primary"
          >
            Products
          </Link>
          <Link
            to="/service"
            className="text-sm font-medium hover:text-primary"
          >
            Service
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Wishlist">
            <Heart className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card rounded-3xl mx-4 my-4 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="p-8 md:p-12 md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                  Get the best product at your home
                </h1>
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search your favorite product"
                    className="pl-10 pr-4 py-2 rounded-full bg-background border-primary w-full border"
                  />
                </div>
              </div>
              <div className="md:w-1/2 flex">
                <div className="relative w-full h-64 md:h-80">
                  <img
                    src="https://placehold.co/300x300/ffff00/ffff00"
                    alt="Headphones"
                    className="object-contain bg-yellow-300 rounded-tl-3xl w-full h-full"
                  />
                </div>
                <div className="hidden md:block relative w-24 h-80">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-100 gap-4">
                    <button className="p-1 rounded-full bg-primary">
                      <Search className="h-4 w-4 text-primary-foreground" />
                    </button>
                    <button className="p-1 rounded-full bg-primary">
                      <Facebook className="h-4 w-4 text-primary-foreground" />
                    </button>
                    <button className="p-1 rounded-full bg-primary">
                      <Twitter className="h-4 w-4 text-primary-foreground" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0">
                    <img
                      src="https://placehold.co/100x150"
                      alt="Perfume"
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
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

        {/* Products Row 1 */}
        <section className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product 1 */}
            <div className="bg-card rounded-lg p-4 relative">
              <div className="aspect-square flex items-center justify-center mb-4">
                <img
                  src="https://placehold.co/100x200"
                  alt="Samsung Mobile"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="text-sm font-medium">Samsung Mobile</h3>
              <p className="text-sm font-semibold text-primary">750.00$</p>
            </div>

            {/* Product 2 */}
            <div className="bg-card rounded-lg p-4 relative">
              <div className="aspect-square flex items-center justify-center mb-4">
                <img
                  src="https://placehold.co/150x150"
                  alt="Men's hand watch"
                  className="object-contain h-full"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium">Men's hand watch</h3>
                  <p className="text-sm font-semibold text-primary">150.00$</p>
                </div>
                <button className="text-primary">
                  <Heart className="h-5 w-5 fill-primary" />
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-card rounded-lg p-4 relative">
              <div className="aspect-square flex items-center justify-center mb-4">
                <img
                  src="https://placehold.co/150x150"
                  alt="Table wing chair"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="text-sm font-medium">Table wing chair</h3>
              <p className="text-sm font-semibold text-primary">120.00$</p>
            </div>
          </div>
        </section>

        {/* Products Row 2 */}
        <section className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product 4 */}
            <div className="bg-card rounded-lg p-4 relative">
              <div className="absolute -left-0 top-6 bg-destructive text-white px-3 py-1 text-xs font-bold z-10">
                OUT
              </div>
              <div className="aspect-square flex items-center justify-center mb-4">
                <img
                  src="https://placehold.co/150x150"
                  alt="Men jacket"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="text-sm font-medium">Men jacket</h3>
              <p className="text-sm font-semibold text-primary">50.00$</p>
            </div>

            {/* Product 5 */}
            <div className="bg-card rounded-lg p-4 relative">
              <div className="aspect-square flex items-center justify-center mb-4">
                <img
                  src="https://placehold.co/150x150"
                  alt="Ladies hand bag"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="text-sm font-medium">Ladies hand bag</h3>
              <p className="text-sm font-semibold text-primary">135.00$</p>
            </div>

            {/* Product 6 */}
            <div className="bg-card rounded-lg p-4 relative">
              <div className="aspect-square flex items-center justify-center mb-4">
                <img
                  src="https://placehold.co/150x150"
                  alt="White stag book"
                  className="object-contain h-full"
                />
              </div>
              <h3 className="text-sm font-medium">White stag book</h3>
              <p className="text-sm font-semibold text-primary">85.00$</p>
            </div>
          </div>
        </section>

        {/* Shoe Promotion */}
        <section className="container mx-auto px-4 py-8 my-8">
          <div className="bg-card rounded-lg p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-1 text-primary">
                Latest stylish shoe
              </h2>
              <p className="text-sm mb-6">Men 2020 collection shoe</p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md">
                See all
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://placehold.co/400x300"
                alt="Blue Nike Shoe"
                className="object-contain"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card text-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="text-2xl font-bold mb-4 inline-block">
                <span className="text-primary">E</span>-shop
              </Link>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <p className="text-xs mt-4 text-muted-foreground">
                Designed by samed khan
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Location
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold mb-4">Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Summer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Book
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Cosmetics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      Furnitures
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-muted-foreground">
                    +2 38 125 453
                  </li>
                  <li className="text-sm text-muted-foreground">
                    eshop@gmail.com
                  </li>
                  <li className="text-sm text-muted-foreground">
                    123 Lon, London, UK
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
