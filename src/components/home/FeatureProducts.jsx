import React from "react";
import { productsData } from "@/data/data";
import Container from "../commonUi/Container";
import Product from "../commonUi/Product";
export default function FeatureProducts() {
  return (
    <div className="py-10">
      <Container>
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-1.5">
            Discover our most popular items
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* 👈 productsData-কে ম্যাপ করা হচ্ছে */}
        {productsData.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            name={product.name}
            category={product.category}
            colorImages={product.colorImages}
            tag={product.tag}
          />
        ))}
      </div>
      </Container>
    </div>
  );
}
