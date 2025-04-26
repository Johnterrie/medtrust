import Image from "next/image";
import React from "react";

const products = [
  { id: 1, name: "Product 1", price: "$99", image: "/product1.jpg" },
  { id: 2, name: "Product 2", price: "$129", image: "/product2.jpg" },
  { id: 3, name: "Product 3", price: "$149", image: "/product3.jpg" },
  { id: 4, name: "Product 4", price: "$149", image: "/product3.jpg" },
  { id: 5, name: "Product 5", price: "$149", image: "/product3.jpg" },
  { id: 6, name: "Product 6", price: "$149", image: "/product3.jpg" },
  { id: 7, name: "Product 7", price: "$149", image: "/product3.jpg" },
  { id: 8, name: "Product 8", price: "$149", image: "/product3.jpg" },
  { id: 9, name: "Product 9", price: "$149", image: "/product3.jpg" },
  { id: 10, name: "Product 10", price: "$149", image: "/product3.jpg" },
  { id: 11, name: "Product 11", price: "$149", image: "/product3.jpg" },
  { id: 12, name: "Product 12", price: "$149", image: "/product3.jpg" },
];

export default function ecoms() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ProTech</h1>
        <ul className="flex space-x-4">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 bg-white">
        <h2 className="text-4xl font-semibold">Minimalist Tech Gadgets</h2>
        <p className="text-gray-600 mt-2">High-quality, modern, and affordable.</p>
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-md">Shop Now</button>
      </header>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
            <Image src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-medium mt-2">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
            <button className="mt-2 px-4 py-2 bg-black text-white rounded-md w-full">Buy Now</button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white shadow-md mt-6">
        <p className="text-gray-500">&copy; 2025 ProTech. All rights reserved.</p>
      </footer>
    </div>
  );
}
