import React from "react";
import "../styles/board.scss";
import BoardSquare from "./BoardSquare";

export default function Board({ board }) {
  const getCoords = (i) => {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7);
    return [x, y];
  };

  const isBlack = (i) => {
    const [x, y] = getCoords(i);
    return (x + y) % 2 === 0;
  };

  const getPos = (i) => {
    const [x, y] = getCoords(i);
    const letter = ["a", "b", "c", "d", "e", "f", "g", "h"][x];
    return `${letter}${y + 1}`;
  };

  return (
    <div className="board">
      {board.flat().map((piece, i) => (
        <BoardSquare piece={piece} black={isBlack(i)} position={getPos(i)} />
      ))}
    </div>
  );
}
