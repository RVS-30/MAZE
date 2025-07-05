
import { useState, useEffect, useCallback } from 'react';
import { GameState, Grid, Position, MoveDirection } from '../types';
import { generateMaze } from '../lib/maze';
import { useSounds } from './useSounds';
import { PREVIEW_DURATION_MS, INITIAL_GRID_SIZE, INITIAL_LIVES } from '../constants';

export const useGameLogic = () => {
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [grid, setGrid] = useState<Grid>([]);
  const [path, setPath] = useState<Position[]>([]);
  const [playerPosition, setPlayerPosition] = useState<Position>({ row: 0, col: 0 });
  const [gameState, setGameState] = useState<GameState>(GameState.StartScreen);
  const [highScore, setHighScore] = useState(0);
  const [revealedWrongTiles, setRevealedWrongTiles] = useState<Position[]>([]);
  const { playMoveSound, playWinSound, playLoseSound, playErrorSound, isMuted, toggleMute } = useSounds();
  
  useEffect(() => {
    const savedHighScore = localStorage.getItem('highScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
  }, []);

  const updateHighScore = useCallback((currentLevel: number) => {
    const score = currentLevel - 1;
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('highScore', score.toString());
    }
  }, [highScore]);

  const startLevel = useCallback((levelNum: number) => {
    setLevel(levelNum);
    setRevealedWrongTiles([]);
    const gridSize = INITIAL_GRID_SIZE + Math.floor((levelNum - 1) / 2);
    const { grid: newGrid, path: newPath } = generateMaze(gridSize, gridSize);

    setGrid(newGrid);
    setPath(newPath);
    setPlayerPosition(newPath[0]);
    setGameState(GameState.Preview);

    setTimeout(() => {
      setGameState(GameState.Playing);
    }, PREVIEW_DURATION_MS);
  }, []);

  const resetGame = useCallback(() => {
    updateHighScore(level);
    setLevel(1);
    setLives(INITIAL_LIVES);
    setGameState(GameState.StartScreen);
  }, [level, updateHighScore]);


  const movePlayer = useCallback((direction: MoveDirection) => {
    const { row, col } = playerPosition;
    let newPos: Position = { row, col };

    if (direction === MoveDirection.Up) newPos = { row: row - 1, col };
    else if (direction === MoveDirection.Down) newPos = { row: row + 1, col };
    else if (direction === MoveDirection.Left) newPos = { row, col: col - 1 };
    else if (direction === MoveDirection.Right) newPos = { row, col: col + 1 };
    
    // Check boundaries
    if (newPos.row < 0 || newPos.row >= grid.length || newPos.col < 0 || newPos.col >= grid[0].length) {
      playErrorSound();
      return;
    }

    const currentPathIndex = path.findIndex(p => p.row === row && p.col === col);
    const nextPathPos = path[currentPathIndex + 1];

    if (nextPathPos && nextPathPos.row === newPos.row && nextPathPos.col === newPos.col) {
      // Correct move
      setPlayerPosition(newPos);
      playMoveSound();

      if (grid[newPos.row][newPos.col].isFinish) {
        setGameState(GameState.Won);
        playWinSound();
        updateHighScore(level + 1);
      }
    } else {
      // Wrong move
      playErrorSound();
      setRevealedWrongTiles(prev => [...prev, newPos]);
      const newLives = lives - 1;
      setLives(newLives);
      if (newLives <= 0) {
        playLoseSound();
        setGameState(GameState.Lost);
        updateHighScore(level);
      }
    }

  }, [playerPosition, grid, path, lives, level, playMoveSound, playWinSound, playLoseSound, playErrorSound, updateHighScore]);

  return {
    level,
    lives,
    grid,
    path,
    playerPosition,
    gameState,
    highScore,
    revealedWrongTiles,
    startLevel,
    movePlayer,
    resetGame,
    isMuted,
    toggleMute
  };
};