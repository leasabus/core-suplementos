import { Facebook, Search, Twitter } from "lucide-react";

const HeroSection = () => {
  return (
    <div>
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
    </div>
  );
};

export default HeroSection;
