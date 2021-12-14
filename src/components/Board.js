import React from "react";
import Cell from "./Cell";

const boardStyle = {
  display: "grid",
  width: "600px",
  height: "calc(100%)",
  grid: "auto-flow dense / 1fr 1fr 1fr",
  gridAutoRows: "auto"
};

const Board = ({ board, joueur, changePlayerValue, blockClick}) => (
  <div style={boardStyle}>
    {
      board.map((x, i) => {
        return <Cell player={joueur}  value={x} indice={i} changePlayerValue={changePlayerValue} blockClick={blockClick}></Cell>
      })
    }
  </div>
);

export default Board;
