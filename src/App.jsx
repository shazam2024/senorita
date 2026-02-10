import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  PromiseTransition,
  PromiseScroll,
  FinalEmotional,
  MemoryGarden,
} from './components/promise';

const screens = {
  PROMISE_TRANSITION: 'promise_transition',
  PROMISE_SCROLL: 'promise_scroll',
  FINAL_EMOTIONAL: 'final_emotional',
  MEMORY_GARDEN: 'memory_garden',
};

function App() {
  const [currentScreen, setCurrentScreen] = useState(screens.PROMISE_TRANSITION);

  const handlePromiseTransitionDone = () => {
    setCurrentScreen(screens.PROMISE_SCROLL);
  };

  const handlePromisesSealed = () => {
    setCurrentScreen(screens.FINAL_EMOTIONAL);
  };

  const handleHoldMyHand = () => {
    setCurrentScreen(screens.MEMORY_GARDEN);
  };

  const handleReplay = () => {
    setCurrentScreen(screens.PROMISE_TRANSITION);
  };

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
    <div className="min-h-screen bg-pastel-gradient">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {currentScreen === screens.PROMISE_TRANSITION && (
            <PromiseTransition onDone={handlePromiseTransitionDone} />
          )}
          {currentScreen === screens.PROMISE_SCROLL && (
            <PromiseScroll onSealed={handlePromisesSealed} />
          )}
          {currentScreen === screens.FINAL_EMOTIONAL && (
            <FinalEmotional name="Senorita" onNext={handleHoldMyHand} />
          )}
          {currentScreen === screens.MEMORY_GARDEN && (
            <MemoryGarden onReplay={handleReplay} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
