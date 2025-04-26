
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const productData = [
  {
    id: 1,
    name: "Cool Shoes",
    image: "/products/shoes.jpg",
  },
  {
    id: 2,
    name: "Stylish Watch",
    image: "/products/watch.jpg",
  },
  {
    id: 3,
    name: "Trendy Backpack",
    image: "/products/backpack.jpg",
  },
  {
    id: 4,
    name: "Cool Shoes",
    image: "/products/shoes.jpg",
  },
  {
    id: 5,
    name: "Stylish Watch",
    image: "/products/watch.jpg",
  },
  {
    id: 6,
    name: "Trendy Backpack",
    image: "/products/backpack.jpg",
  },
  {
    id: 7,
    name: "Cool Shoes",
    image: "/products/shoes.jpg",
  },
  {
    id: 8,
    name: "Stylish Watch",
    image: "/products/watch.jpg",
  },
  {
    id: 9,
    name: "Trendy Backpack",
    image: "/products/backpack.jpg",
  },
  {
    id: 10,
    name: "Cool Shoes",
    image: "/products/shoes.jpg",
  },
  {
    id: 11,
    name: "Stylish Watch",
    image: "/products/watch.jpg",
  },
  {
    id: 12,
    name: "Trendy Backpack",
    image: "/products/backpack.jpg",
  },
  {
    id: 13,
    name: "Cool Shoes",
    image: "/products/shoes.jpg",
  },
  {
    id: 14,
    name: "Stylish Watch",
    image: "/products/watch.jpg",
  },
  {
    id: 15,
    name: "Trendy Backpack",
    image: "/products/backpack.jpg",
  },
  {
    id: 16,
    name: "Cool Shoes",
    image: "/products/shoes.jpg",
  },
  {
    id: 17,
    name: "Stylish Watch",
    image: "/products/watch.jpg",
  },
  {
    id: 18,
    name: "Trendy Backpack",
    image: "/products/backpack.jpg",
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? productData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === productData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-[600px] flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
        Buy our Products
      </h1>

      <div className="relative w-full max-w-xl h-72 flex items-center justify-center overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {productData.map((product) => (
            <div
              key={product.id}
              className="min-w-full flex flex-col items-center justify-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="object-cover border border-amber-600 rounded-lg mb-4"
              />
              <h2 className="text-xl font-medium">{product.name}</h2>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ArrowRight />
        </button>
      </div>

      <button className="mt-8 bg-blue-600 text-white flex items-center px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
        Click here to buy our Products
      </button>
    </section>
  );
};

export default Products;

