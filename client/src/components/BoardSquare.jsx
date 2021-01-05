import React from "react";
import Piece from "./Piece";
import Square from "./Square";
import { useDrop } from "react-dnd";
import { handleMove } from "../utils/Game";

export default function BoardSquare({ piece, black, position }) {
  const [_, drop] = useDrop({
    accept: "piece",
    drop: (item) => {
      const fromPosition = item.id.split("_")[0];
      handleMove(fromPosition, position);
    },
  });

  return (
    <div ref={drop} className="board-square">
      <Square black={black}>
        {piece && <Piece position={position} piece={piece} />}
      </Square>
    </div>
  );
}
