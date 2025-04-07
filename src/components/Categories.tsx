import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const Categories = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="p-4 md:p-12 md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Los mejores suplementos, en tu casa.
        </h1>
        <div className="relative items-center max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Buscar producto"
            className="pl-10 pr-4 py-2 rounded-full bg-background border-primary w-full border"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
          <button className="category-button">Proteinas</button>
          <button className="category-button">Creatinas</button>
          <button className="category-button">Barras</button>
          <button className="category-button">Otros</button>
          <button className="category-button active">Ver todos</button>
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
