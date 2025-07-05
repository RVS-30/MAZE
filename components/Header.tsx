
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon, TrophyIcon, HeartIcon, SoundOnIcon, SoundOffIcon } from './icons/Icons';

interface HeaderProps {
  level: number;
  lives: number;
  highScore: number;
  isMuted: boolean;
  toggleMute: () => void;
}

const Header: React.FC<HeaderProps> = ({ level, lives, highScore, isMuted, toggleMute }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full p-4 bg-white/50 dark:bg-maze-gray-900/50 backdrop-blur-sm rounded-xl shadow-md flex justify-between items-center">
      <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
        <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-purple-600 dark:text-purple-400">Lvl {level}</span>
        </div>
        <div className="flex items-center gap-2" title="Lives remaining">
          <HeartIcon className="w-5 h-5 text-red-500" />
          <span className="font-semibold">{lives}</span>
        </div>
        <div className="flex items-center gap-2" title="High Score">
          <TrophyIcon className="w-5 h-5 text-yellow-500" />
          <span className="font-semibold">{highScore}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
            onClick={toggleMute}
            className="p-2 rounded-full text-maze-gray-600 dark:text-maze-gray-300 hover:bg-maze-gray-200 dark:hover:bg-maze-gray-700 transition-colors"
            aria-label="Toggle sound"
          >
            {isMuted ? <SoundOffIcon /> : <SoundOnIcon />}
          </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-maze-gray-600 dark:text-maze-gray-300 hover:bg-maze-gray-200 dark:hover:bg-maze-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;