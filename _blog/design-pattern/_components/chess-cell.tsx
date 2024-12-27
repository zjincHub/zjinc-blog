import React from 'react';
import { Crown } from 'lucide-react';
import './chess-cell.scss';

export type Piece = {
  color: 'black' | 'white';
} | null;

interface IChessCellProps {
  piece: Piece | null;
  isLight: boolean;
  onClick: () => void;
  coordinate: string;
}

export default function ChessCell({
  piece,
  isLight,
  onClick,
  coordinate,
}: IChessCellProps) {
  return (
    <button
      onClick={onClick}
      className="chess-cell"
      style={
        isLight
          ? { backgroundColor: '#fef3c7' }
          : { backgroundColor: '#78350f' }
      }>
      <span className="span">{coordinate}</span>
      {piece && (
        <div
          className="piece"
          style={
            piece.color === 'white'
              ? { backgroundColor: '#ffffff' }
              : { backgroundColor: '#111827' }
          }>
          <Crown
            className="icon"
            style={
              piece.color === 'white'
                ? { color: '#b45309' }
                : { color: '#fef3c7' }
            }
          />
        </div>
      )}
    </button>
  );
}
