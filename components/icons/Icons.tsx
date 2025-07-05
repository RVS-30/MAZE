
import React from 'react';

export const SunIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);

export const MoonIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
);

export const HeartIcon: React.FC<{ className?: string; broken?: boolean }> = ({ className = "w-6 h-6", broken = false }) => (
  broken ? (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A5.99 5.99 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zM10.5 10H13l-3 5v-3H7l3-5z"/></svg>
  ) : (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A5.99 5.99 0 0116.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
  )
);

export const TrophyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20.2,6H19V3c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1v3h-4V3c0-0.6-0.4-1-1-1H4C3.4,2,3,2.4,3,3v3H1.8C1.1,6,0.7,6.8,1.1,7.5l2.8,4.7 C4,12.4,4.2,12.5,4.5,12.5h1.2L5,20c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2l-0.7-7.5h1.2c0.3,0,0.5-0.1,0.7-0.3l2.8-4.7 C23.3,6.8,22.9,6,22.2,6H20.2z M17,4h1v2h-1V4z M10,4h4v2h-4V4z M6,4h1v2H6V4z M17.2,12H6.8l-2.1-3.5h14.5L17.2,12z" /></svg>
);

export const StartIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>
);

export const FinishIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M3 2h2v20H3z M6 2h2v20H6z M10.1 13.1L12 11.3l1.9 1.9 1.4-1.4-1.9-1.9 1.9-1.9-1.4-1.4-1.9 1.9-1.9-1.9-1.4 1.4 1.9 1.9-1.9 1.9z M22 2v20h-2V7.9l-3 2.9V6.1l3-2.9V2z"/></svg>
);

export const PlayerIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="6" r="3"/><path d="M17.8,10.2c-0.6-0.4-1.4-0.3-1.9,0.3l-1.6,2c-0.3,0.4-0.8,0.6-1.3,0.6h-2c-0.5,0-1-0.2-1.3-0.6l-1.6-2 c-0.5-0.6-1.4-0.7-1.9-0.3c-0.6,0.4-0.8,1.2-0.4,1.8l2.5,3.8c0.5,0.8,1.4,1.2,2.3,1.2h2c0.9,0,1.8-0.5,2.3-1.2l2.5-3.8 C18.6,11.4,18.4,10.6,17.8,10.2z"/><path d="M12,17c-1.1,0-2,0.9-2,2v1h4v-1C14,17.9,13.1,17,12,17z"/></svg>
);

export const FootstepsIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 512 512"><path d="M224 256c-6.8 0-13.4-1.5-19.4-4.3c-14.4-6.6-24.6-20.2-24.6-35.7V176c0-21.7 15-40.4 35.4-45.8l80-21.3c2.7-.7 5.4-1.1 8.1-1.1c16.5 0 30.8 10.3 36.3 25.8l21.3 60c3.4 9.6 2.3 20.3-2.9 28.9s-14.3 14-23.7 14H224zm144 112c-16.5 0-30.8-10.3-36.3-25.8l-21.3-60c-3.4-9.6-2.3-20.3 2.9-28.9s14.3-14 23.7-14h112c6.8 0 13.4 1.5 19.4 4.3c14.4 6.6 24.6 20.2 24.6 35.7V400c0 21.7-15 40.4-35.4 45.8l-80 21.3c-2.7.7-5.4 1.1-8.1 1.1zM96 368c-16.5 0-30.8-10.3-36.3-25.8l-21.3-60c-3.4-9.6-2.3-20.3 2.9-28.9s14.3-14 23.7-14h112c6.8 0 13.4 1.5 19.4 4.3c14.4 6.6 24.6 20.2 24.6 35.7V400c0 21.7-15 40.4-35.4 45.8l-80 21.3c-2.7.7-5.4 1.1-8.1 1.1z"/></svg>
);

export const RetryIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>
);

export const SoundOnIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
);

export const SoundOffIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
);