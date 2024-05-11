import React, { useState } from "react";
import ArithmeticSeriesCalculator from "./SeriesCalculator";
import DeterminantCalculator from "./determinan";

const CalculatorSelector = () => {
  // State untuk menyimpan jenis kalkulator yang dipilih oleh pengguna
  const [calculatorType, setCalculatorType] = useState("arithmeticSeries");

  // Fungsi untuk mengubah jenis kalkulator yang dipilih
  const handleCalculatorChange = (type) => {
    setCalculatorType(type);
  };

  return (
    <div id="calculator" className="container mx-auto md:p-4">
      <div className="shadow-lg rounded-lg md:p-6 p-4">
        <h2 className="text-2xl font-bold mb-4">Pilih Kalkulator</h2>

        {/* Tombol untuk memilih kalkulator */}
        <div className="flex flex-wrap gap-4 mb-4">
          <button
            className={`py-2 px-4 rounded-lg transition ${
              calculatorType === "arithmeticSeries"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleCalculatorChange("arithmeticSeries")}
          >
            Deret Aritmatika
          </button>
          <button
            className={`py-2 px-4 rounded-lg transition ${
              calculatorType === "determinant"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleCalculatorChange("determinant")}
          >
            Determinan
          </button>
        </div>

        {/* Menampilkan kalkulator yang dipilih */}
        <div>
          {calculatorType === "arithmeticSeries" ? (
            <ArithmeticSeriesCalculator />
          ) : (
            <DeterminantCalculator />
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculatorSelector;
