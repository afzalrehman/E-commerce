// src/pages/Home.tsx
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Product } from "../types/product";



const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#F4F4F4] text-center py-10">
        <h1 className="text-3xl md:text-4xl font-semibold">
          All-in-One E-commerce App
        </h1>
        <p className="mt-4 text-lg">Discover premium products and enjoy shopping with us.</p>
      </div>

      <div className="container mx-auto p-6">
        <h2 className="mb-6 text-3xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
