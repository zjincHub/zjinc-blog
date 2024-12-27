import React from 'react';
import ChessCell from './chess-cell';
import './chess-board.scss';

export type Piece = {
  color: 'black' | 'white';
} | null;

interface IChessBoardProps {
  board: (Piece | null)[][];
  onCellClick: (row: number, col: number) => void;
}

const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export default function ChessBoard({ board, onCellClick }: IChessBoardProps) {
  return (
    <div className="chess-board">
      {/* Column labels (A-H) - Top */}
      <div className="board-top">
        {COLUMNS.map((col) => (
          <span key={col} className="item">
            {col}
          </span>
        ))}
      </div>

      {/* Row labels (1-8) - Left */}
      <div className="board-left">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="item">
            {8 - i}
          </span>
        ))}
      </div>

      {/* Row labels (1-8) - Right */}
      <div className="board-right">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="item">
            {8 - i}
          </span>
        ))}
      </div>

      {/* Column labels (A-H) - Bottom */}
      <div className="board-bottom">
        {COLUMNS.map((col) => (
          <span key={col} className="item">
            {col}
          </span>
        ))}
      </div>

      {/* Chess board grid */}
      <div className="board-grid">
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
