import * as Chess from "chess.js";
import { BehaviorSubject } from "rxjs";

const chess = new Chess();

export const gameSubject = new BehaviorSubject();

export const initGame = () => {
  updateGame();
};

export const handleMove = (from, to) => {
  const promotions = chess
    .moves({ verbose: true })
    .filter((move) => move.promotion);

  if (promotions.some((p) => p.from === from && p.to === to)) {
    const pendingPromotion = { from, to, color: promotions[0].color };
    updateGame(pendingPromotion);
  }

  const { pendingPromotion } = gameSubject.getValue();

  if (!pendingPromotion) {
    move(from, to);
  }
};

export const move = (from, to) => {
  const legalMove = chess.move({ from, to });
  if (legalMove) {
    updateGame();
  }
};

const updateGame = () => {
  const newGame = {
    board: chess.board(),
    // pendingPromotion,
  };

  gameSubject.next(newGame);
};
