'use client';

import React, { useState } from 'react';
import ChessBoard from './chess-board';

export type Piece = {
  color: 'black' | 'white';
} | null;

function App() {
  const [board, setBoard] = useState<(Piece | null)[][]>(
    Array(8)
      .fill(null)
      .map(() => Array(8).fill(null))
  );
  const [currentColor, setCurrentColor] = useState<'black' | 'white'>('white');

  const handleCellClick = (row: number, col: number) => {
    const newBoard = [...board.map((row) => [...row])];
    if (newBoard[row][col]) {
      newBoard[row][col] = null;
    } else {
      newBoard[row][col] = { color: currentColor };
    }
    setBoard(newBoard);
    setCurrentColor((current) => (current === 'white' ? 'black' : 'white'));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-lg w-full space-y-6">
        <ChessBoard board={board} onCellClick={handleCellClick} />
      </div>
    </div>
  );
}

export default App;
