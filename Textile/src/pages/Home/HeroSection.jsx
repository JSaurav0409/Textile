import React from "react";
import HeroImage from "../../assets/images/hero-textile.jpg"; // Import the local image

const HeroSection = () => {
  const handleScroll = () => {
    const productSection = document.getElementById("product-list");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero bg-cover bg-center h-screen text-white p-10 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${HeroImage})`, // Use the imported image here
      }}
    >
      <div className="bg-black bg-opacity-40 p-6 rounded-lg">
        <h1 className="text-5xl font-bold mb-4 text-primary">
          Welcome to Our Textile Company
        </h1>
        <p className="text-lg mb-6 text-center">
          Explore high-quality fabrics, designed for every occasion.
        </p>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none"
            onClick={handleScroll} // Call the scroll function on click
          >
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
