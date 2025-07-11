import { useEffect, useRef, useState } from 'react';

const asciiLogo = `
██████╗ ██████╗  ██████╗ 
██╔══██╗██╔══██╗██╔═══██╗
██████╔╝██████╔╝██║   ██║
██╔═══╝ ██╔══██╗██║   ██║
██║     ██║  ██║╚██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ 
`;

const typingText = 'Welcome to PRO — Your Ultimate Sport Statistics App';

export default function TerminalIntro({ onFinish }) {
  const [typed, setTyped] = useState('');
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const intervalRef = useRef();

  // Typing animation
  useEffect(() => {
    let i = 0;
    intervalRef.current = setInterval(() => {
      if (i <= typingText.length) {
        setTyped(typingText.slice(0, i));
        i++;
      } else {
        clearInterval(intervalRef.current);
        setTimeout(() => animateProgress(), 500);
      }
    }, 40);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Progress bar animation
  function animateProgress() {
    let p = 0;
    const progInt = setInterval(() => {
      setProgress(++p);
      if (p >= 100) {
        clearInterval(progInt);
        setTimeout(() => {
          setDone(true);
          setTimeout(onFinish, 700);
        }, 700);
      }
    }, 12);
  }

  return (
    <div className="fixed inset-0 z-50 bg-pink-950 flex flex-col items-center justify-center text-pink-100 font-mono transition-all duration-700">
      <pre className="text-2xl md:text-5xl leading-none mb-6 text-pink-300 select-none" style={{fontFamily: 'monospace'}}>
        {asciiLogo}
      </pre>
      <div className="h-8 min-h-8 text-lg md:text-2xl mb-4 w-full max-w-2xl mx-auto">
        <span>{typed}</span>
        {!done && <span className="animate-pulse">|</span>}
      </div>
      <div style={{ height: '3rem' }} />
      <div className="w-full max-w-2xl h-4 bg-pink-900 rounded mb-8 overflow-hidden border border-pink-700">
        <div
          className="h-full bg-pink-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
} 