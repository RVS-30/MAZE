
import { useState } from 'react';
import { MoveDirection } from '../types';

type SwipeCallback = (direction: MoveDirection) => void;

export const useSwipe = (onSwipe: SwipeCallback) => {
  const [touchStart, setTouchStart] = useState<[number, number] | null>(null);
  const [touchEnd, setTouchEnd] = useState<[number, number] | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart([e.targetTouches[0].clientX, e.targetTouches[0].clientY]);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd([e.targetTouches[0].clientX, e.targetTouches[0].clientY]);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const [startX, startY] = touchStart;
    const [endX, endY] = touchEnd;

    const distanceX = startX - endX;
    const distanceY = startY - endY;
    
    if (Math.abs(distanceX) < minSwipeDistance && Math.abs(distanceY) < minSwipeDistance) return;

    if (Math.abs(distanceX) > Math.abs(distanceY)) {
      onSwipe(distanceX > 0 ? MoveDirection.Left : MoveDirection.Right);
    } else {
      onSwipe(distanceY > 0 ? MoveDirection.Up : MoveDirection.Down);
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};