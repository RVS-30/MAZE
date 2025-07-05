
export interface Position {
  row: number;
  col: number;
}

export interface CellData {
  pos: Position;
  isPath: boolean;
  isStart: boolean;
  isFinish: boolean;
}

export type Grid = CellData[][];

export enum GameState {
  StartScreen,
  Preview,
  Playing,
  Won,
  Lost,
}

export enum MoveDirection {
  Up,
  Down,
  Left,
  Right,
}