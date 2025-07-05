
import React from 'react';
import { Grid as GridType, GameState, Position } from '../types';
import Cell from './Cell';

interface GridProps {
  grid: GridType;
  gameState: GameState;
  playerPosition: Position;
  path: Position[];
  revealedWrongTiles: Position[];
}

const Grid: React.FC<GridProps> = ({ grid, gameState, playerPosition, path, revealedWrongTiles }) => {
    // Find the player's current index on the path. This is crucial for revealing the traversed path correctly.
    const playerPathIndex = path.findIndex(p => p.row === playerPosition.row && p.col === playerPosition.col);

    return (
        <div
        className="grid bg-maze-gray-200 dark:bg-maze-gray-800 p-2 rounded-lg shadow-inner gap-1"
        style={{
            gridTemplateColumns: `repeat(${grid.length}, minmax(0, 1fr))`,
            width: 'clamp(300px, 90vw, 500px)',
            height: 'clamp(300px, 90vw, 500px)',
        }}
        >
        {grid.map((row, rowIndex) =>
            row.map((cellData, colIndex) => {
                const cellPathIndex = path.findIndex(p => p.row === rowIndex && p.col === colIndex);
                const isTraversedPath = cellPathIndex !== -1 && playerPathIndex !== -1 && cellPathIndex <= playerPathIndex;

                return (
                    <Cell
                        key={`${rowIndex}-${colIndex}`}
                        data={cellData}
                        isPlayerHere={playerPosition.row === rowIndex && playerPosition.col === colIndex}
                        isRevealed={
                            (gameState === GameState.Preview && cellData.isPath) ||
                            (revealedWrongTiles.some(p => p.row === rowIndex && p.col === colIndex)) ||
                            (gameState !== GameState.Preview && isTraversedPath)
                        }
                        isCurrentPath={cellPathIndex !== -1}
                        gameState={gameState}
                    />
                );
            })
        )}
        </div>
    );
};

export default Grid;