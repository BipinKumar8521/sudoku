import React, { useState } from "react";
import "./Board.css";
import validateBoard from "../tools/validateSudoku";
const Board = () => {
  const [selectedCell, setSelectedCell] = useState([null, null]);

  const board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];

  const isActive = (row, cell) => {
    if (selectedCell[0] === row && selectedCell[1] === cell) return 0;
    if (selectedCell[0] === row || selectedCell[1] === cell) return 1;
    return -1;
  };

  const handleBoardClick = (row, cell) => {
    setSelectedCell([row, cell]);
  };

  console.log(validateBoard(board), selectedCell);

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`board-row ${
            rowIndex !== 8 && rowIndex % 3 == 2 ? "border-bottom" : ""
          }`}
        >
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`board-cell ${
                cellIndex !== 8 && cellIndex % 3 == 2 ? "border-right" : ""
              } ${cell === 0 ? "empty" : "filled"}  ${
                isActive(rowIndex, cellIndex) === 1
                  ? "active-cell"
                  : isActive(rowIndex, cellIndex) === 0
                  ? "clicked-cell"
                  : ""
              }`}
              onClick={() => handleBoardClick(rowIndex, cellIndex)}
            >
              {cell || ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
