"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calc2Course } from "./calc2course";
import { Calculus2Content } from "./calccourse";

export default function Page() {
  const [selectedContent, setSelectedContent] = useState("Calculus2Content");

  const handleSelect = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="container md:container-md mx-auto py-4">
      <div className="flex m-10 space-x-4 mb-4">
        <motion.button
          className={`py-3 px-5 rounded ${
            selectedContent === "Calculus2Content"
              ? "bg-blue-light text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          whileHover={{ scale: 1.05 }} // animasi saat tombol dihover
          onClick={() => handleSelect("Calculus2Content")}
        >
          Determinan
        </motion.button>
        <motion.button
          className={`py-2 px-4 rounded ${
            selectedContent === "Calc2Course"
              ? "bg-blue-light text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          whileHover={{ scale: 1.05 }} // animasi saat tombol dihover
          onClick={() => handleSelect("Calc2Course")}
        >
          Barisan dan Deret
        </motion.button>
      </div>

      <AnimatePresence>
        {selectedContent === "Calculus2Content" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            key="Calculus2Content"
          >
            <Calculus2Content />
          </motion.div>
        )}
        {selectedContent === "Calc2Course" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            key="Calc2Course"
          >
            <Calc2Course />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
