const validateBoard = (board) => {
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    const column = new Set();
    const square = new Set();
    for (let j = 0; j < 9; j++) {
      const _row = board[i][j];
      const _column = board[j][i];
      const _square =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          ((i * 3) % 9) + (j % 3)
        ];
      if (_row !== 0) {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_column !== 0) {
        if (column.has(_column)) return false;
        column.add(_column);
      }
      if (_square !== 0) {
        if (square.has(_square)) return false;
        square.add(_square);
      }
    }
  }
  return true;
};

export default validateBoard;
