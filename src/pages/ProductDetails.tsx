// src/pages/ProductDetails.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Product } from "../types/product";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] =  useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-6xl p-6">
        <div className="flex flex-col lg:flex-row rounded border bg-white">
          <div className="lg:w-1/2">
            <img src={product.thumbnail} alt={product.title} className="w-full h-96 object-cover" />
          </div>
          <div className="p-6 lg:w-1/2">
            <h2 className="text-3xl font-bold">{product.title}</h2>
            <p className="text-sm text-gray-500">Category: {product.category}</p>
            <p className="my-4">{product.description}</p>
            <p className="text-2xl font-semibold">${product.price}</p>
            <button className="mt-6 w-full bg-blue-500 py-2 rounded text-white hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
