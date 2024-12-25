function getSpiralMatrix(size) {
  let matrix = [];
  for (let i = 0; i < size; i++) {
    let innerRow = [];
    for (let j = 0; j < size; j++) {
      innerRow[j] = 0;
    }
    matrix = [...matrix, innerRow];
  }

  let count = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (count <= size * size) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = count++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = count++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = count++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = count++;
    }
    left++;
  }

  return matrix;
}

// Примеры использования:
console.log(getSpiralMatrix(3));
// [
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5]
// ]

console.log(getSpiralMatrix(4));
// [
//   [1,  2,  3,  4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10, 9,  8,  7]
// ]


