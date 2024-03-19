import React from "react";
import Board from "../components/Board";
import InputRow from "../components/InputRow";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-container">
      <div className="heading">
        <h1>Sudoku Game</h1>
      </div>
      <div className="board-container">
        <Board />
      </div>
      <div className="input-container">
        <InputRow />
      </div>
    </div>
  );
};

export default Home;
