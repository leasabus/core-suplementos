import banner from "../assets/product-images/core-banner.png";

const HeroSection = () => {
  return (
    <section className="my-4 overflow-hidden">
      <div className="w-full h-full">
        <img
          src={banner || "/placeholder.svg"}
          alt="Headphones"
          className="w-full h-full object-cover rounded-none"
        />
      </div>
    </section>
  );
};

export default HeroSection;
