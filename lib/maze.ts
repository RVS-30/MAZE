
import { Grid, Position } from '../types';

export const generateMaze = (width: number, height: number): { grid: Grid; path: Position[] } => {
  // Initialize grid
  const grid: Grid = Array.from({ length: height }, (_, row) =>
    Array.from({ length: width }, (_, col) => ({
      pos: { row, col },
      isPath: false,
      isStart: false,
      isFinish: false,
    }))
  );

  // Generate path using a random walk
  const path: Position[] = [];
  const visited: boolean[][] = Array.from({ length: height }, () => Array(width).fill(false));
  
  // Start at top-left
  let currentPos: Position = { row: 0, col: 0 };
  path.push(currentPos);
  visited[currentPos.row][currentPos.col] = true;

  const pathLength = Math.max(width, height) + Math.floor(Math.random() * (width / 2));

  for (let i = 0; i < pathLength * 2 && path.length < pathLength; i++) {
    const directions = [
      { row: -1, col: 0 }, // Up
      { row: 1, col: 0 },  // Down
      { row: 0, col: -1 }, // Left
      { row: 0, col: 1 },  // Right
    ].sort(() => Math.random() - 0.5); // Shuffle directions

    let moved = false;
    for (const dir of directions) {
      const nextPos = { row: currentPos.row + dir.row, col: currentPos.col + dir.col };

      if (
        nextPos.row >= 0 && nextPos.row < height &&
        nextPos.col >= 0 && nextPos.col < width &&
        !visited[nextPos.row][nextPos.col]
      ) {
        currentPos = nextPos;
        path.push(currentPos);
        visited[currentPos.row][currentPos.col] = true;
        moved = true;
        break;
      }
    }
    if (!moved) {
        // Simple backtrack if stuck
        if(path.length > 1) {
            path.pop();
            currentPos = path[path.length - 1];
        } else {
            break; // Should not happen with this logic
        }
    }
  }

  // Mark path on grid
  path.forEach((pos, index) => {
    grid[pos.row][pos.col].isPath = true;
    if (index === 0) {
      grid[pos.row][pos.col].isStart = true;
    }
    if (index === path.length - 1) {
      grid[pos.row][pos.col].isFinish = true;
    }
  });

  return { grid, path };
};