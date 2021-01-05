import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";

export default function Piece({ piece: { type, color }, black, position }) {
  const pieceImage = require(`../assets/pieces/${type}_${color}.png`);

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: "piece", id: `${position}_${type}_${color}` },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });

  return (
    <React.Fragment>
      <DragPreviewImage connect={preview} src={pieceImage} />
      <div style={{ opacity: isDragging ? 0 : 1 }} className="piece" ref={drag}>
        <img src={pieceImage} alt="" />
      </div>
    </React.Fragment>
  );
}
