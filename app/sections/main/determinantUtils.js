export function calculateDeterminant(matrix) {
  const size = matrix.length;
  const steps = [];

  if (size === 2) {
    const det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    steps.push(
      `Det = (${matrix[0][0]} * ${matrix[1][1]}) - (${matrix[0][1]} * ${matrix[1][0]})`
    );
    steps.push(
      `Det = ${matrix[0][0] * matrix[1][1]} - ${matrix[0][1] * matrix[1][0]}`
    );
    steps.push(`Det = ${det}`);
    return { det, steps };
  }

  if (size === 3) {
    const det =
      matrix[0][0] *
        (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
      matrix[0][1] *
        (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
      matrix[0][2] *
        (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);
    steps.push(
      `Det = (${matrix[0][0]} * (${matrix[1][1]} * ${matrix[2][2]} - ${matrix[1][2]} * ${matrix[2][1]}))` +
        ` - (${matrix[0][1]} * (${matrix[1][0]} * ${matrix[2][2]} - ${matrix[1][2]} * ${matrix[2][0]}))` +
        ` + (${matrix[0][2]} * (${matrix[1][0]} * ${matrix[2][1]} - ${matrix[1][1]} * ${matrix[2][0]}))`
    );
    steps.push(
      `Det = (${matrix[0][0]} * ${matrix[1][1] * matrix[2][2]} - ${
        matrix[1][2] * matrix[2][1]
      })` +
        ` - (${matrix[0][1]} * ${matrix[1][0] * matrix[2][2]} - ${
          matrix[1][2] * matrix[2][0]
        })` +
        ` + (${matrix[0][2]} * ${matrix[1][0] * matrix[2][1]} - ${
          matrix[1][1] * matrix[2][0]
        })`
    );
    steps.push(`Det = ${det}`);
    return { det, steps };
  }

  throw new Error("Ukuran matriks tidak valid.");
}
