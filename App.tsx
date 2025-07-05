
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Game from './components/Game';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans text-maze-gray-900 dark:text-maze-gray-100">
        <Game />
      </div>
    </ThemeProvider>
  );
};

export default App;