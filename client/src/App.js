import React, { useEffect, useState } from "react";
import "./App.scss";
import { gameSubject, initGame } from "./utils/Game";
import Board from "./components/Board";

function App() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    initGame();
    const { unsubscribe } = gameSubject.subscribe((game) => {
      setBoard(game.board);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <div className="app__board">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
