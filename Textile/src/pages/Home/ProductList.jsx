import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Cotton Fabric",
      image: "../../assets/images/cotton.jpg",
    },
    { id: 2, name: "Silk Fabric", image: "/images/silk-fabric.jpg" },
    { id: 3, name: "Polyester Fabric", image: "/images/polyester-fabric.jpg" },
    // Add more products here
  ];

  return (
    <section className="product-list p-10 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
