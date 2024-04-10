export function printSpiral(matrix) {
  let result = [];
  let topRow = 0;
  let bottomRow = matrix.length - 1;
  let leftCol = 0;
  let rightCol = matrix[0].length - 1;

  while (topRow <= bottomRow && leftCol <= rightCol) {
    // Print top row
    for (let i = leftCol; i <= rightCol; i++) {
      result.push(matrix[topRow][i]);
    }
    topRow++;

    // Print right column
    for (let i = topRow; i <= bottomRow; i++) {
      result.push(matrix[i][rightCol]);
    }
    rightCol--;

    // Print bottom row
    if (topRow <= bottomRow) {
      for (let i = rightCol; i >= leftCol; i--) {
        result.push(matrix[bottomRow][i]);
      }
      bottomRow--;
    }

    // Print left column
    if (leftCol <= rightCol) {
      for (let i = bottomRow; i >= topRow; i--) {
        result.push(matrix[i][leftCol]);
      }
      leftCol++;
    }
  }

  return result.join(' ');
}
