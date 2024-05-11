import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ArithmeticSeriesCalculator from "./SeriesCalculator";
import DeterminantCalculator from "./determinan";

const CalculatorSelector = () => {
  const [calculatorType, setCalculatorType] = useState("arithmeticSeries");
  const [ref, inView] = useInView({ triggerOnce: true });

  const handleCalculatorChange = (type) => {
    setCalculatorType(type);
  };

  useEffect(() => {
    if (inView) {
      const animationVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
      };

      setAnimation(animationVariants.visible);
    }
  }, [inView]);

  const [animation, setAnimation] = useState({ opacity: 0, scale: 0.5 });

  return (
    <div id="calculator" className="container mx-auto md:p-4" ref={ref}>
      <motion.div
        className="shadow-lg rounded-lg md:p-6 p-4"
        initial="hidden"
        animate={animation}
      >
        <h2 className="text-2xl font-bold mb-4">Pilih Kalkulator</h2>

        <div className="flex flex-wrap gap-4 mb-4">
          <motion.button
            className={`py-2 px-4 rounded-lg transition ${
              calculatorType === "arithmeticSeries"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCalculatorChange("arithmeticSeries")}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            Deret Aritmatika
          </motion.button>
          <motion.button
            className={`py-2 px-4 rounded-lg transition ${
              calculatorType === "determinant"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCalculatorChange("determinant")}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            Determinan
          </motion.button>
        </div>

        {/* Menggunakan AnimatePresence untuk menangani animasi saat transisi */}
        <AnimatePresence>
          {calculatorType === "arithmeticSeries" ? (
            <motion.div
              key="arithmeticSeries"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArithmeticSeriesCalculator />
            </motion.div>
          ) : (
            <motion.div
              key="determinant"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DeterminantCalculator />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CalculatorSelector;
