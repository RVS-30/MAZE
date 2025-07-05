
import React, { useEffect, useCallback } from 'react';
import { GameState, MoveDirection } from '../types';
import { useGameLogic } from '../hooks/useGameLogic';
import { useSwipe } from '../hooks/useSwipe';
import Grid from './Grid';
import Header from './Header';
import Modal from './Modal';
import { StartIcon, TrophyIcon, HeartIcon, RetryIcon } from './icons/Icons';

const Game: React.FC = () => {
  const {
    gameState,
    grid,
    level,
    lives,
    highScore,
    playerPosition,
    path,
    revealedWrongTiles,
    startLevel,
    movePlayer,
    resetGame,
    isMuted,
    toggleMute,
  } = useGameLogic();

  const handleMove = useCallback((direction: MoveDirection) => {
    if (gameState === GameState.Playing) {
      movePlayer(direction);
    }
  }, [gameState, movePlayer]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let direction: MoveDirection | null = null;
      if (e.key === 'ArrowUp') direction = MoveDirection.Up;
      else if (e.key === 'ArrowDown') direction = MoveDirection.Down;
      else if (e.key === 'ArrowLeft') direction = MoveDirection.Left;
      else if (e.key === 'ArrowRight') direction = MoveDirection.Right;
      
      if (direction !== null) {
        e.preventDefault();
        handleMove(direction);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleMove]);

  const swipeHandlers = useSwipe(handleMove);

  const getStatusMessage = () => {
    switch (gameState) {
      case GameState.Preview:
        return 'Memorize the path...';
      case GameState.Playing:
        return 'Find your way to the goal!';
      case GameState.Won:
        return 'Level Complete!';
      case GameState.Lost:
        return 'Game Over!';
      default:
        return 'Memory Maze';
    }
  };

  return (
    <div {...swipeHandlers} className="flex flex-col items-center justify-center min-h-screen p-4 touch-none bg-maze-gray-50 dark:bg-maze-gray-950">
      <div className="w-full max-w-2xl mx-auto">
        <Header 
          level={level} 
          lives={lives}
          highScore={highScore}
          isMuted={isMuted}
          toggleMute={toggleMute}
        />
        <main className="mt-6 flex flex-col items-center">
            <p className="text-lg font-medium text-purple-500 dark:text-purple-400 h-8">
                {getStatusMessage()}
            </p>
            <div className="relative mt-4">
               {grid.length > 0 && (
                 <Grid
                    grid={grid}
                    gameState={gameState}
                    playerPosition={playerPosition}
                    path={path}
                    revealedWrongTiles={revealedWrongTiles}
                 />
               )}
            </div>
        </main>
      </div>

       <Modal isOpen={gameState === GameState.StartScreen} onClose={() => {}}>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-purple-600 dark:text-purple-400">Memory Maze</h1>
            <p className="mt-4 text-maze-gray-600 dark:text-maze-gray-300">
              Memorize the glowing path, then navigate the maze from memory. Use arrow keys or swipe to move.
            </p>
            <button
              onClick={() => startLevel(1)}
              className="mt-8 flex items-center gap-2 px-8 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
            >
              <StartIcon />
              Start Game
            </button>
          </div>
       </Modal>
       
       <Modal isOpen={gameState === GameState.Won} onClose={() => startLevel(level + 1)}>
          <div className="flex flex-col items-center text-center">
            <TrophyIcon className="w-16 h-16 text-yellow-400"/>
            <h2 className="text-3xl font-bold mt-4">Level {level} Complete!</h2>
            <p className="mt-2 text-maze-gray-600 dark:text-maze-gray-300">Ready for the next challenge?</p>
            <button
              onClick={() => startLevel(level + 1)}
              className="mt-6 px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800"
            >
              Next Level
            </button>
          </div>
       </Modal>

      <Modal isOpen={gameState === GameState.Lost} onClose={resetGame}>
          <div className="flex flex-col items-center text-center">
             <div className="flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/50 rounded-full">
                <HeartIcon className="w-10 h-10 text-red-500 animate-pulse" broken />
            </div>
            <h2 className="text-3xl font-bold mt-4">Game Over</h2>
            <p className="mt-2 text-maze-gray-600 dark:text-maze-gray-300">Your final score: <span className="font-bold text-purple-500">{level - 1}</span></p>
            <p className="mt-1 text-maze-gray-500 dark:text-maze-gray-400">High Score: <span className="font-bold text-yellow-500">{highScore}</span></p>
            <button
              onClick={resetGame}
              className="mt-6 flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <RetryIcon />
              Play Again
            </button>
          </div>
       </Modal>
    </div>
  );
};

export default Game;