"use client";

import { motion } from "framer-motion";

export default function RecyclingCard({ center }) {
  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 p-3 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="font-semibold">{center.name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
        📍 {center.address}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1">
        ☎️ {center.phone}
      </p>
    </motion.div>
  );
}
