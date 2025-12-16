"use client";

import { FaSearch } from "react-icons/fa";

export default function FilterBar({ search, setSearch, category, setCategory }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
      <div className="relative flex-1">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-10 px-4 py-2 border rounded-xl dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-xl dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 transition"
      >
        <option value="">All Categories</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Battery">Battery</option>
      </select>
    </div>
  );
}
