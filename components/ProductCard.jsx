"use client";

import { useState } from "react";
import RecyclingCard from "./RecyclingCard";
import recyclingCenters from "../data/recyclingCenters";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const [showCenters, setShowCenters] = useState(false);

  // Filter centers based on product category (example)
  const nearbyCenters = recyclingCenters.filter(center => center.categories?.includes(product.category) || true);

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{product.category}</p>
      <span
        className={`inline-block mt-2 px-3 py-1 text-sm rounded-full font-semibold ${
          product.recyclable
            ? "bg-green-200 dark:bg-green-700 text-green-800 dark:text-green-100"
            : "bg-red-200 dark:bg-red-700 text-red-800 dark:text-red-100"
        }`}
      >
        {product.recyclable ? "✅ Recyclable" : "❌ Non-Recyclable"}
      </span>

      <button
        className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium underline"
        onClick={() => setShowCenters(!showCenters)}
      >
        {showCenters ? "Hide Nearby Recycling Centers" : "Show Nearby Recycling Centers"}
      </button>

      {showCenters && (
        <div className="mt-2 space-y-2">
          {nearbyCenters.map((center) => (
            <RecyclingCard key={center.id} center={center} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
