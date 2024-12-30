import React from 'react';
import classNames from 'classnames';
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
      className={classNames('chess-cell', {
        'chess-cell-bg-1': isLight,
        'chess-cell-bg-2': !isLight,
      })}>
      {/* 棋盘格子标识 */}
      <span className="span">{coordinate}</span>
      {piece && (
        <div
          className={classNames('piece', {
            'chess-piece-bg-1': piece.color === 'white',
            'chess-piece-bg-2': piece.color !== 'white',
          })}>
          <Crown
            className={classNames('icon', {
              'chess-piece-color-1': piece.color === 'white',
              'chess-piece-color-2': piece.color !== 'white',
            })}
          />
        </div>
      )}
    </button>
  );
}
