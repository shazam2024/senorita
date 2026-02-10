import { useState, lazy, Suspense, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PromiseTransition from './components/promise/PromiseTransition';

const PromiseScroll = lazy(() => import('./components/promise/PromiseScroll'));
const FinalEmotional = lazy(() => import('./components/promise/FinalEmotional'));
const MemoryGarden = lazy(() => import('./components/promise/MemoryGarden'));

const screens = {
  PROMISE_TRANSITION: 'promise_transition',
  PROMISE_SCROLL: 'promise_scroll',
  FINAL_EMOTIONAL: 'final_emotional',
  MEMORY_GARDEN: 'memory_garden',
};

const slideVariants = {
  initial: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  in: {
    x: 0,
    opacity: 1,
  },
  out: (direction) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

const slideTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 35,
  mass: 0.6,
};

const componentLoader = {
  [screens.PROMISE_SCROLL]: () => import('./components/promise/PromiseScroll'),
  [screens.FINAL_EMOTIONAL]: () => import('./components/promise/FinalEmotional'),
  [screens.MEMORY_GARDEN]: () => import('./components/promise/MemoryGarden'),
};

const preloadedModules = new Map();

function preloadComponent(screenName) {
  if (preloadedModules.has(screenName)) return preloadedModules.get(screenName);
  const loadFn = componentLoader[screenName];
  if (!loadFn) return Promise.resolve(null);
  const promise = loadFn();
  preloadedModules.set(screenName, promise);
  return promise;
}

const screenOrder = [
  screens.PROMISE_TRANSITION,
  screens.PROMISE_SCROLL,
  screens.FINAL_EMOTIONAL,
  screens.MEMORY_GARDEN,
];

function App() {
  const [currentScreen, setCurrentScreen] = useState(screens.PROMISE_TRANSITION);
  const [direction, setDirection] = useState(1);

  const preloadNextComponent = useCallback((current) => {
    const currentIndex = screenOrder.indexOf(current);
    const nextIndex = currentIndex + 1;
    if (nextIndex < screenOrder.length) {
      const nextScreen = screenOrder[nextIndex];
      preloadComponent(nextScreen);
    }
  }, []);

  useEffect(() => {
    preloadNextComponent(currentScreen);
    
    // Eager preload all remaining components on mount for instant transitions
    const preloadAll = async () => {
      await Promise.all([
        import('./components/promise/PromiseScroll'),
        import('./components/promise/FinalEmotional'),
        import('./components/promise/MemoryGarden'),
      ]);
    };
    preloadAll();
  }, [currentScreen, preloadNextComponent]);

  const navigateTo = useCallback((nextScreen) => {
    const currentIndex = screenOrder.indexOf(currentScreen);
    const nextIndex = screenOrder.indexOf(nextScreen);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setCurrentScreen(nextScreen);
  }, [currentScreen]);

  const handlePromiseTransitionDone = useCallback(() => {
    navigateTo(screens.PROMISE_SCROLL);
  }, [navigateTo]);

  const handlePromisesSealed = useCallback(() => {
    navigateTo(screens.FINAL_EMOTIONAL);
  }, [navigateTo]);

  const handleHoldMyHand = useCallback(() => {
    navigateTo(screens.MEMORY_GARDEN);
  }, [navigateTo]);

  const handleReplay = useCallback(() => {
    navigateTo(screens.PROMISE_TRANSITION);
  }, [navigateTo]);

  return (
    <div className="h-screen w-full overflow-hidden bg-pastel-gradient">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentScreen}
          custom={direction}
          initial="initial"
          animate="in"
          exit="out"
          variants={slideVariants}
          transition={slideTransition}
          className="absolute inset-0 w-full h-full will-change-transform"
        >
          <Suspense fallback={<div className="w-full h-full will-change-transform" />}>
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
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
