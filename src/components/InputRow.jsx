import React from "react";
import "./InputRow.css";

const InputRow = () => {
  const inputs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="input-row">
      {inputs.map((input, index) => (
        <div
          key={input}
          className={`input-cell ${
            index != 8 ? "border-right" : "border-transparent"
          }`}
        >
          {input}
        </div>
      ))}
    </div>
  );
};

export default InputRow;
