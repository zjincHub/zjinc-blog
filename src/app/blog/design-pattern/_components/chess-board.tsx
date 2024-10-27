import React from 'react';
import ChessCell from './chess-cell';

export type Piece = {
  color: 'black' | 'white';
} | null;

interface ChessBoardProps {
  board: (Piece | null)[][];
  onCellClick: (row: number, col: number) => void;
}

const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export default function ChessBoard({ board, onCellClick }: ChessBoardProps) {
  return (
    <div className="relative bg-amber-200 p-8 rounded-xl shadow-xl">
      {/* Column labels (A-H) - Top */}
      <div className="absolute top-2 left-8 right-8 flex justify-between px-3">
        {COLUMNS.map((col) => (
          <span key={col} className="text-amber-900 font-medium text-sm">
            {col}
          </span>
        ))}
      </div>

      {/* Row labels (1-8) - Left */}
      <div className="absolute top-8 bottom-8 left-2 flex flex-col justify-between py-1.5">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-amber-900 font-medium text-sm">
            {8 - i}
          </span>
        ))}
      </div>

      {/* Row labels (1-8) - Right */}
      <div className="absolute top-8 bottom-8 right-2 flex flex-col justify-between py-1.5">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-amber-900 font-medium text-sm">
            {8 - i}
          </span>
        ))}
      </div>

      {/* Column labels (A-H) - Bottom */}
      <div className="absolute bottom-2 left-8 right-8 flex justify-between px-3">
        {COLUMNS.map((col) => (
          <span key={col} className="text-amber-900 font-medium text-sm">
            {col}
          </span>
        ))}
      </div>

      {/* Chess board grid */}
      <div className="grid grid-cols-8 gap-0.5 bg-amber-900 p-0.5 rounded-lg">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <ChessCell
              key={`${rowIndex}-${colIndex}`}
              piece={cell}
              isLight={(rowIndex + colIndex) % 2 === 0}
              onClick={() => onCellClick(rowIndex, colIndex)}
              coordinate={`${COLUMNS[colIndex]}${8 - rowIndex}`}
            />
          ))
        )}
      </div>
    </div>
  );
}
