
import { useState, useCallback, useEffect } from 'react';

// Using free, publicly available sound effects in MP3 format for better browser compatibility.
const MOVE_SOUND_URL = 'https://cdn.jsdelivr.net/gh/kool-koder/static-files@latest/sounds/move.mp3';
const WIN_SOUND_URL = 'https://cdn.jsdelivr.net/gh/kool-koder/static-files@latest/sounds/win.mp3';
const LOSE_SOUND_URL = 'https://cdn.jsdelivr.net/gh/kool-koder/static-files@latest/sounds/lose.mp3';
const ERROR_SOUND_URL = 'https://cdn.jsdelivr.net/gh/kool-koder/static-files@latest/sounds/error.mp3';

export const useSounds = () => {
  const [isMuted, setIsMuted] = useState(false);
  
  useEffect(() => {
      const savedMuteState = localStorage.getItem('isMuted');
      if (savedMuteState) {
          setIsMuted(JSON.parse(savedMuteState));
      }
  }, []);

  const toggleMute = useCallback(() => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    localStorage.setItem('isMuted', JSON.stringify(newMuteState));
  }, [isMuted]);

  const playSound = useCallback((soundUrl: string) => {
    if (isMuted || typeof Audio === 'undefined') {
      return;
    }
    const audio = new Audio(soundUrl);
    audio.play().catch(error => {
        // This error can happen if the user hasn't interacted with the page yet,
        // or if there's an issue with the audio source itself.
        console.error(`Audio play failed for ${soundUrl}:`, error);
    });
  }, [isMuted]);

  const playMoveSound = useCallback(() => playSound(MOVE_SOUND_URL), [playSound]);
  const playWinSound = useCallback(() => playSound(WIN_SOUND_URL), [playSound]);
  const playLoseSound = useCallback(() => playSound(LOSE_SOUND_URL), [playSound]);
  const playErrorSound = useCallback(() => playSound(ERROR_SOUND_URL), [playSound]);

  return { playMoveSound, playWinSound, playLoseSound, playErrorSound, isMuted, toggleMute };
};