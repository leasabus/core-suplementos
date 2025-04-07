const Promotions = () => {
  return (
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
  );
};

export default Promotions;
