'use client';

import React, { useState } from 'react';
import ChessBoard from './chess-board';
import './chess.scss';

export type Piece = {
  color: 'black' | 'white';
} | null;

function App() {
  const [currentColor, setCurrentColor] = useState<'black' | 'white'>('white');
  const [board, setBoard] = useState<(Piece | null)[][]>(
    Array(8)
      .fill(null)
      .map(() => Array(8).fill(null))
  );

  const handleCellClick = (row: number, col: number) => {
    const newBoard = [...board.map((row) => [...row])];
    if (!newBoard[row][col]) {
      newBoard[row][col] = { color: currentColor };
      setBoard(newBoard);
      setCurrentColor((current) => (current === 'white' ? 'black' : 'white'));
    }
  };

  return (
    <div className="chess">
      <div className="chess-board-wrapper">
        <ChessBoard board={board} onCellClick={handleCellClick} />
      </div>
    </div>
  );
}

export default App;
