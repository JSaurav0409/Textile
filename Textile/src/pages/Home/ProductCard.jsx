import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.image} // Display the image for each product
        alt={product.name}
        className="w-full h-48 object-cover" // Adjust image size and styling
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
