import React from "react";
import ProductCard from "../Home/ProductCard";

const Products = () => {
  return (
    <div className="products p-10">
      <h1 className="text-3xl font-bold">Our Products</h1>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* Map over product data to display ProductCard */}
      </div>
    </div>
  );
};

export default Products;
