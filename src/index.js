module.exports = function solveSudoku(matrix) {
  let size = 9;

  let test = (matrix, row, col, numb) => {
    for (let i = 0; i < size; i++) {
      if (matrix[row][i] == numb || matrix[i][col] == numb)
        return false
    }

    let rowB = row - row % 3;
    let colB = col - col % 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrix[i + rowB][j + colB] === numb)
          return false
      }
    }
    return true
  }

  let solve = (matrix, row, col) => {
    if (row == size - 1 && col == size)
      return true;
    if (col == size) {
      col = 0
      row += 1
    }
    if (matrix[row][col] > 0) {
      return solve(matrix, row, col + 1)
    }
    for (let numb = 1; numb < size + 1; numb++) {
      if (test(matrix, row, col, numb)) {
        matrix[row][col] = numb;
        if (solve(matrix, row, col + 1))
          return true;
      }
      matrix[row][col] = 0
    }
    return false

  }

  solve(matrix, 0, 0)
  return matrix;
}
