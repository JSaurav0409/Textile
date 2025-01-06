import React from "react";
import ProductCard from "./ProductCard";
import Cotton from "../../assets/images/cotton.jpg";
import Silk from "../../assets/images/silk.jpg";
import Polyester from "../../assets/images/polyester.jpg";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Cotton Fabric",
      image: Cotton,
    },
    {
      id: 2,
      name: "Silk Fabric",
      image: Silk,
    },
    {
      id: 3,
      name: "Polyester Fabric",
      image: Polyester,
    },
    // Add more products here
  ];

  return (
    <section id="product-list" className="product-list p-10 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center underline">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
