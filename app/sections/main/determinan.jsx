import { useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useMediaQuery } from "utils";

export function DeterminantCalculator() {
  const [matrixSize, setMatrixSize] = useState(2);
  const [matrix, setMatrix] = useState(() => createInitialMatrix(matrixSize));
  const [result, setResult] = useState(null);
  const [calculationSteps, setCalculationSteps] = useState([]);
  const [history, setHistory] = useState([]);
  const [inputError, setInputError] = useState(null);
  const [showHistory, setShowHistory] = useState(false);

  const isTabletUp = useMediaQuery("(min-width: 768px)");

  function createInitialMatrix(size) {
    return Array.from({ length: size }, () =>
      Array.from({ length: size }, () => "")
    );
  }

  const handleSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setMatrixSize(newSize);
    setMatrix(createInitialMatrix(newSize));
    setResult(null);
    setCalculationSteps([]);
    setInputError(null);
  };

  const handleMatrixChange = (row, col, value) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = value;
    setMatrix(newMatrix);
    setResult(null);
    setCalculationSteps([]);
    setInputError(null);
  };

  const calculateDeterminant = (matriks) => {
    const size = matriks.length;
    const steps = [];

    if (size === 2) {
      const det = matriks[0][0] * matriks[1][1] - matriks[0][1] * matriks[1][0];
      steps.push(
        `Det = (${matriks[0][0]} * ${matriks[1][1]}) - (${matriks[0][1]} * ${matriks[1][0]})`
      );
      steps.push(
        `Det = ${matriks[0][0] * matriks[1][1]} - ${
          matriks[0][1] * matriks[1][0]
        }`
      );
      steps.push(`Det = ${det}`);
      return { det, steps };
    }

    if (size === 3) {
      const det =
        matriks[0][0] *
          (matriks[1][1] * matriks[2][2] - matriks[1][2] * matriks[2][1]) -
        matriks[0][1] *
          (matriks[1][0] * matriks[2][2] - matriks[1][2] * matriks[2][0]) +
        matriks[0][2] *
          (matriks[1][0] * matriks[2][1] - matriks[1][1] * matriks[2][0]);
      steps.push(
        `Det = (${matriks[0][0]} * (${matriks[1][1]} * ${matriks[2][2]} - ${matriks[1][2]} * ${matriks[2][1]}))` +
          ` - (${matriks[0][1]} * (${matriks[1][0]} * ${matriks[2][2]} - ${matriks[1][2]} * ${matriks[2][0]}))` +
          ` + (${matriks[0][2]} * (${matriks[1][0]} * ${matriks[2][1]} - ${matriks[1][1]} * ${matriks[2][0]}))`
      );
      steps.push(
        `Det = (${matriks[0][0]} * ${matriks[1][1] * matriks[2][2]} - ${
          matriks[1][2] * matriks[2][1]
        })` +
          ` - (${matriks[0][1]} * ${matriks[1][0] * matriks[2][2]} - ${
            matriks[1][2] * matriks[2][0]
          })` +
          ` + (${matriks[0][2]} * ${matriks[1][0] * matriks[2][1]} - ${
            matriks[1][1] * matriks[2][0]
          })`
      );
      steps.push(`Det = ${det}`);
      return { det, steps };
    }

    throw new Error("Ukuran matriks tidak valid.");
  };

  const handleCalculate = () => {
    try {
      for (const row of matrix) {
        for (const cell of row) {
          if (isNaN(parseFloat(cell))) {
            throw new Error("Masukkan angka yang valid dalam matriks.");
          }
        }
      }

      const numericMatrix = matrix.map((row) =>
        row.map((cell) => parseFloat(cell))
      );
      const { det, steps } = calculateDeterminant(numericMatrix);
      setResult(det);
      setCalculationSteps(steps);

      const newHistory = [
        ...history,
        { matrixSize, matrix: numericMatrix, result: det },
      ];
      setHistory(newHistory);

      setInputError(null);
    } catch (error) {
      setInputError(error.message);
      setResult(null);
      setCalculationSteps([]);
    }
  };

  const handleToggleHistory = () => {
    setShowHistory((prevShowHistory) => !prevShowHistory);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div
        className="determinant-calculator mt-6 mx-auto px-4 py-8 rounded-lg shadow-lg"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-light">
          Kalkulator Determinan
        </h2>

        <div className="input-section mb-4 px-10 text-center">
          <label
            htmlFor="matrix-size"
            className="block mb-2 text-lg font-semibold text-center"
          >
            Pilih Ukuran Matriks:
          </label>
          <select
            id="matrix-size"
            value={matrixSize}
            onChange={handleSizeChange}
            className="p-2 text-center border rounded-lg w-48"
          >
            <option value={2}>2x2</option>
            <option value={3}>3x3</option>
          </select>
        </div>

        <div className="matrix-section flex flex-col items-center gap-4">
          {matrix.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="matrix-row flex space-x-2 justify-center"
            >
              {row.map((cell, colIndex) => (
                <input
                  key={colIndex}
                  type="number"
                  value={cell}
                  onChange={(e) =>
                    handleMatrixChange(rowIndex, colIndex, e.target.value)
                  }
                  className="matrix-cell md:w-28 w-20 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-light text-center"
                />
              ))}
            </div>
          ))}
        </div>

        <div className="action-section mt-6 text-center">
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
            <h3 className="text-2xl font-bold mb-2">Hasil:</h3>
            <p className="result text-2xl font-semibold">{result}</p>

            <h4 className="text-xl font-semibold mt-4">Langkah Perhitungan:</h4>
            <div className="calculation-steps text-lg">
              {calculationSteps.map((step, index) => (
                <p key={index} className="mt-2">
                  {step}
                </p>
              ))}
            </div>
          </m.div>
        )}

        <div className="history-section mt-6">
          <div className="flex flex-wrap justify-between items-center mb-6 space-x-2">
            <h3 className="text-xl mb-4 md:mb-0 font-bold text-blue-light">
              Riwayat:
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={handleToggleHistory}
                className="btn bg-blue-light text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                style={{
                  width: "auto",
                  padding: "8px 12px",
                }}
              >
                {showHistory ? "Sembunyikan" : "Tampilkan"}
              </button>
              <button
                onClick={handleClearHistory}
                className="btn bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                style={{
                  width: "auto",
                  padding: "8px 12px",
                }}
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
                    <p>
                      Ukuran Matriks: {entry.matrixSize}x{entry.matrixSize}
                    </p>
                    <p>Matriks:</p>
                    <div className="matrix-history-grid">
                      {entry.matrix.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex space-x-2">
                          {row.map((cell, colIndex) => (
                            <span
                              key={colIndex}
                              className="px-2 py-1 rounded-lg"
                            >
                              {cell}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                    <p>Hasil: {entry.result}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </LazyMotion>
  );
}

export default DeterminantCalculator;
