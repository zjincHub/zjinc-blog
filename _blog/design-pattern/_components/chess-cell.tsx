import React from 'react';
import { Crown } from 'lucide-react';

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
      className={`
        aspect-square relative
        ${isLight ? 'bg-amber-50' : 'bg-amber-800'}
        hover:opacity-90 transition-opacity
        flex items-center justify-center
        group
      `}>
      <span className="absolute bottom-0.5 right-1 text-xs opacity-30 group-hover:opacity-100 transition-opacity">
        {coordinate}
      </span>

      {piece && (
        <div
          className={`
          absolute inset-3
          rounded-full
          ${piece.color === 'white' ? 'bg-white' : 'bg-gray-900'}
          shadow-lg
          flex items-center justify-center
          transition-transform hover:scale-95
        `}>
          <Crown
            className={`w-6 h-6 ${
              piece.color === 'white' ? 'text-amber-900' : 'text-amber-50'
            }`}
          />
        </div>
      )}
    </button>
  );
}
