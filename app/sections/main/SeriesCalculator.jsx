import React, { useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

export function ArithmeticSeriesCalculator() {
  const [firstTerm, setFirstTerm] = useState("");
  const [commonDifference, setCommonDifference] = useState("");
  const [termNumber, setTermNumber] = useState("");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [inputError, setInputError] = useState(null);

  const handleCalculate = () => {
    const a = parseFloat(firstTerm);
    const d = parseFloat(commonDifference);
    const n = parseInt(termNumber);

    if (isNaN(a) || isNaN(d) || isNaN(n) || n <= 0) {
      setInputError(
        "Masukkan angka yang valid untuk a, d, dan n (n harus lebih besar dari 0)"
      );
      setResult(null);
      return;
    }

    const nthTerm = a + (n - 1) * d;
    const sum = (n / 2) * (2 * a + (n - 1) * d);
    const calculationDetail = `Suku ke-${n} (Un): ${nthTerm}`;
    const sumDetail = `Jumlah ${n} suku pertama (Sn): ${sum}`;

    const newResult = `${calculationDetail}, ${sumDetail}`;
    setResult(newResult);
    setInputError(null);

    const newHistory = [
      ...history,
      { firstTerm: a, commonDifference: d, termNumber: n, result: newResult },
    ];
    setHistory(newHistory);
  };

  const handleToggleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="container mx-auto p-0 md:p-4 md:max-w-lg">
        <div className="shadow-lg rounded-lg p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-light">
            Kalkulator Deret Aritmatika
          </h2>

          {/* Input Section */}
          <div className="input-section mb-4">
            <div className="mb-4 text-center">
              <label
                htmlFor="firstTerm"
                className="block text-lg font-semibold text-center"
              >
                Suku Pertama (a):
              </label>
              <input
                type="number"
                id="firstTerm"
                className="md:w-56 w-20 px-3 py-2 border rounded-lg dark:text-gray-50 text-center focus:outline-none focus:ring-2 focus:ring-blue-light"
                value={firstTerm}
                onChange={(e) => setFirstTerm(e.target.value)}
              />
            </div>

            <div className="mb-4 text-center">
              <label
                htmlFor="commonDifference"
                className="block text-lg font-semibold text-center"
              >
                Beda (d):
              </label>
              <input
                type="number"
                id="commonDifference"
                className="md:w-56 w-20 px-3 py-2 border rounded-lg dark:text-gray-50 text-center focus:outline-none focus:ring-2 focus:ring-blue-light"
                value={commonDifference}
                onChange={(e) => setCommonDifference(e.target.value)}
              />
            </div>

            <div className="mb-4 text-center">
              <label
                htmlFor="termNumber"
                className="block text-lg font-semibold text-center"
              >
                Suku ke-n (n):
              </label>
              <input
                type="number"
                id="termNumber"
                className="md:w-56 w-20 px-3 py-2 border rounded-lg dark:text-gray-50 text-center focus:outline-none focus:ring-2 focus:ring-blue-light"
                value={termNumber}
                onChange={(e) => setTermNumber(e.target.value)}
              />
            </div>
          </div>

          {/* Button Section */}
          <div className="action-section text-center mt-10 md:mt-6">
            <button
              onClick={handleCalculate}
              className="btn bg-blue-light px-8 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Hitung
            </button>
          </div>

          {inputError && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="input-error mt-4 text-center text-red-600"
            >
              <p>{inputError}</p>
            </m.div>
          )}

          {result !== null && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="result-section mt-4 text-center"
            >
              <h3 className="md:text-2xl text-xl font-bold mb-2">Hasil:</h3>
              <p className="result md:text-xl text-md font-medium">{result}</p>
            </m.div>
          )}

          {/* History Section */}
          <div className="history-section mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-blue-light">Riwayat:</h3>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                <button
                  onClick={handleToggleHistory}
                  className="btn bg-blue-light px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  {showHistory ? "Sembunyikan" : "Tampilkan"}
                </button>
                <button
                  onClick={handleClearHistory}
                  className="btn bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Bersihkan
                </button>
              </div>
            </div>

            {showHistory && (
              <div className="history-list p-4 rounded-lg">
                {history.length === 0 ? (
                  <p className="">Tidak ada riwayat perhitungan.</p>
                ) : (
                  history.map((entry, index) => (
                    <div key={index} className="history-item mb-2">
                      <h4 className="text-lg font-semibold">
                        Perhitungan {index + 1}:
                      </h4>
                      <p>Suku Pertama (a): {entry.firstTerm}</p>
                      <p>Beda (d): {entry.commonDifference}</p>
                      <p>Suku ke-n (n): {entry.termNumber}</p>
                      <p>Hasil: {entry.result}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}

export default ArithmeticSeriesCalculator;
