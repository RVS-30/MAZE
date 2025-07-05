
import React from 'react';
import { CellData, GameState } from '../types';
import { StartIcon, FinishIcon, FootstepsIcon, PlayerIcon } from './icons/Icons';

interface CellProps {
  data: CellData;
  isPlayerHere: boolean;
  isRevealed: boolean;
  isCurrentPath: boolean;
  gameState: GameState;
}

const Cell: React.FC<CellProps> = ({ data, isPlayerHere, isRevealed, isCurrentPath, gameState }) => {
  const { isStart, isFinish } = data;

  const getCellClasses = () => {
    const base = 'w-full h-full flex items-center justify-center rounded transition-all duration-300 ease-in-out';
    
    if (gameState === GameState.Lost && isPlayerHere) {
      return `${base} bg-red-500/80 animate-shake`;
    }

    if (isPlayerHere) {
       return `${base} bg-blue-400 dark:bg-blue-500 scale-110 shadow-lg`;
    }

    if (isRevealed) {
        if (isCurrentPath) {
             return `${base} bg-purple-300 dark:bg-purple-800/70`;
        } else {
             return `${base} bg-red-400/80 dark:bg-red-800/70`;
        }
    }
    
    if (gameState === GameState.Preview && isCurrentPath) {
        return `${base} bg-purple-400 dark:bg-purple-500 animate-glow`;
    }
    
    return `${base} bg-maze-gray-300 dark:bg-maze-gray-700 hover:bg-maze-gray-400 dark:hover:bg-maze-gray-600`;
  };

  const renderIcon = () => {
    const iconBaseClass = `w-3/5 h-3/5 transition-opacity duration-300`;

    if (isPlayerHere) {
      return <PlayerIcon className={`${iconBaseClass} text-white`} />;
    }
    if (gameState === GameState.Preview || isRevealed) {
        if (isStart) return <StartIcon className={`${iconBaseClass} text-green-800 dark:text-green-300`} />;
        if (isFinish) return <FinishIcon className={`${iconBaseClass} text-yellow-800 dark:text-yellow-300`} />;
    } else {
        if (isStart) return <StartIcon className={`${iconBaseClass} text-green-600 dark:text-green-500`} />;
        if (isFinish) return <FinishIcon className={`${iconBaseClass} text-yellow-600 dark:text-yellow-500`} />;
    }
    
    if (isRevealed && isCurrentPath && !isStart && !isFinish) {
        return <FootstepsIcon className={`${iconBaseClass} opacity-50 text-purple-800 dark:text-purple-300`} />
    }
    
    return null;
  };

  return (
    <div className={getCellClasses()}>
      {renderIcon()}
    </div>
  );
};

export default Cell;