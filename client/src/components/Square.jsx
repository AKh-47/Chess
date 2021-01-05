import React from "react";

export default function Square({ children, black }) {
  const bgClass = black ? "board-square--black" : "board-square--white";

  return <div className={["square", bgClass].join(" ")}>{children}</div>;
}
