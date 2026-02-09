import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Envelope from './components/Envelope';
import Letter from './components/Letter';
import FinalMessage from './components/FinalMessage';

const screens = {
  ENVELOPE: 'envelope',
  LETTER: 'letter',
  FINAL: 'final',
};

function App() {
  const [currentScreen, setCurrentScreen] = useState(screens.ENVELOPE);

  const handleEnvelopeOpen = () => {
    setCurrentScreen(screens.LETTER);
  };

  const handleLetterContinue = () => {
    setCurrentScreen(screens.FINAL);
  };

  const handleReplay = () => {
    setCurrentScreen(screens.ENVELOPE);
  };

  // Background music (optional - will need audio file)
  useEffect(() => {
    if (currentScreen === screens.FINAL) {
      // Auto-play background music when final screen appears
      // Note: Browser policies may prevent auto-play without user interaction
      const audio = new Audio('/romantic-music.mp3');
      audio.loop = true;
      audio.volume = 0.3;
      
      // Try to play (may be blocked by browser)
      audio.play().catch(() => {
        console.log('Audio autoplay blocked by browser');
      });
    }
  }, [currentScreen]);

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.2,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <div className="min-h-screen bg-pastel-gradient overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {currentScreen === screens.ENVELOPE && (
            <Envelope onOpen={handleEnvelopeOpen} />
          )}
          {currentScreen === screens.LETTER && (
            <Letter onContinue={handleLetterContinue} />
          )}
          {currentScreen === screens.FINAL && (
            <FinalMessage onReplay={handleReplay} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
