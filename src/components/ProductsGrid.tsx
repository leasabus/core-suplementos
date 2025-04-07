import { Heart } from "lucide-react";
import { products } from "../data/products";

const ProductsGrid = () => {
  return (
    <section className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-card rounded-lg p-4 relative">
            <div className="w-full mb-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto object-contains rounded-lg"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-sm font-semibold text-primary">
                  {product.price}
                </p>
              </div>
              <button className="text-primary bg-[#0f1011] border-none">
                <Heart className="h-5 w-5 fill-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;
