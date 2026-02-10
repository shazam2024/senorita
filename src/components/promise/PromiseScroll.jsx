import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import ParticleField from '../ui/ParticleField';
import ScreenShell from '../ui/ScreenShell';
import useAudioFade from '../../hooks/useAudioFade';

const promises = [
  'I promise to choose you every day ❤️',
  'I promise to stand by you in every storm 🌧️',
  'I promise to respect your dreams 🌙',
  'I promise to make you laugh when you cry 😌',
  'I promise to love you endlessly ♾️',
];

const TypeLine = ({ text, startDelayMs = 0, onDone }) => {
  const [shown, setShown] = useState('');
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    let cancelled = false;
    let timeoutId;

    const start = () => {
      let i = 0;
      const tick = () => {
        if (cancelled) return;
        i += 1;
        setShown(text.slice(0, i));
        if (i < text.length) {
          timeoutId = window.setTimeout(tick, 16 + Math.random() * 16);
        } else {
          const cb = onDoneRef.current;
          if (cb) timeoutId = window.setTimeout(cb, 110);
        }
      };
      tick();
    };

    timeoutId = window.setTimeout(start, startDelayMs);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [text, startDelayMs]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="text-base md:text-lg font-poppins text-white leading-relaxed"
      style={{ textShadow: '0 0 22px rgba(0,0,0,0.45), 0 0 18px rgba(255,215,160,0.18)' }}
    >
      {shown}
      {shown.length < text.length && (
        <span className="inline-block w-[10px] align-middle ml-1 opacity-70 animate-pulse">|</span>
      )}
    </motion.p>
  );
};

const PromiseScroll = ({ onSealed }) => {
  const [opened, setOpened] = useState(false);
  const [lineIndex, setLineIndex] = useState(-1);
  const [sealState, setSealState] = useState('idle');

  const { play, stop } = useAudioFade({
    src: '/songs/promise_scroll.mp3',
    loop: true,
    initialVolume: 0,
    maxVolume: 0.22,
  });

  useEffect(() => {
    play({ fadeMs: 1100 });
    return () => {
      stop({ fadeMs: 700 });
    };
  }, [play, stop]);

  useEffect(() => {
    const t = window.setTimeout(() => setOpened(true), 150);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!opened) return;
    const t = window.setTimeout(() => setLineIndex(0), 400);
    return () => window.clearTimeout(t);
  }, [opened]);

  const handleSeal = () => {
    if (sealState !== 'idle') return;
    setSealState('melting');
    window.setTimeout(() => {
      setSealState('burst');
      window.setTimeout(() => {
        if (onSealed) onSealed();
      }, 900);
    }, 850);
  };

  return (
    <ScreenShell variant="promise" allowScroll={false}>
      <div className="absolute inset-0">
        <ParticleField count={20} type="firefly" />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            className="rounded-2xl border border-white/20 overflow-hidden"
            animate={opened ? { scaleY: 1 } : { scaleY: 0.25 }}
            initial={{ scaleY: 0.25 }}
            transition={{ duration: 1.2, ease: [0.2, 0.9, 0.2, 1] }}
            style={{
              transformOrigin: 'top',
              background:
                'linear-gradient(135deg, rgba(255, 238, 210, 0.22) 0%, rgba(255, 215, 170, 0.12) 35%, rgba(205, 170, 255, 0.12) 100%)',
              backdropFilter: 'blur(14px)',
              boxShadow:
                '0 20px 80px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(255,255,255,0.10)',
            }}
          >
            <div className="px-5 sm:px-6 md:px-10 py-8 sm:py-10 md:py-12">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-3xl md:text-5xl font-playfair font-bold text-center"
                style={{
                  color: 'rgba(255,255,255,0.92)',
                  textShadow:
                    '0 0 20px rgba(255,215,160,0.45), 0 0 42px rgba(255,120,190,0.20)',
                }}
              >
                My Promises To You
              </motion.h2>

              <div className="mt-8 sm:mt-10 space-y-5 min-h-[220px] sm:min-h-[260px] md:min-h-[300px]">
                {promises.map((p, idx) => (
                  <AnimatePresence key={p}>
                    {lineIndex >= idx && (
                      <TypeLine
                        text={`${idx + 1}. ${p}`}
                        onDone={() => {
                          if (idx === lineIndex && lineIndex < promises.length - 1) {
                            setLineIndex((v) => v + 1);
                          }
                        }}
                      />
                    )}
                  </AnimatePresence>
                ))}
              </div>

              <div className="mt-12 flex flex-col items-center">
                <motion.button
                  type="button"
                  onClick={handleSeal}
                  className="relative select-none"
                  whileHover={sealState === 'idle' ? { scale: 1.06 } : undefined}
                  whileTap={sealState === 'idle' ? { scale: 0.96 } : undefined}
                  aria-label="Wax heart seal"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    animate={
                      sealState === 'idle'
                        ? {
                            boxShadow: [
                              '0 0 24px rgba(255,120,190,0.35), 0 0 0 1px rgba(255,255,255,0.18) inset',
                              '0 0 36px rgba(255,215,160,0.35), 0 0 0 1px rgba(255,255,255,0.18) inset',
                              '0 0 24px rgba(255,120,190,0.35), 0 0 0 1px rgba(255,255,255,0.18) inset',
                            ],
                          }
                        : sealState === 'melting'
                          ? { scale: [1, 1.1, 0.9], rotate: [0, 6, -6, 0] }
                          : { scale: 0.6, opacity: 0 }
                    }
                    transition={
                      sealState === 'idle'
                        ? { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
                        : { duration: 0.85, ease: 'easeOut' }
                    }
                    style={{
                      background:
                        'radial-gradient(circle at 35% 35%, rgba(255, 185, 210, 0.95) 0%, rgba(219, 39, 119, 0.95) 55%, rgba(136, 19, 55, 0.95) 100%)',
                    }}
                  >
                    <span className="text-2xl">💗</span>
                  </motion.div>

                  <AnimatePresence>
                    {sealState === 'burst' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1.2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      >
                        <div className="spark-burst" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-4 text-sm font-poppins text-white/80"
                >
                  Tap the heart seal
                </motion.p>
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {sealState === 'burst' && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="scroll-dissolve" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </ScreenShell>
  );
};

export default PromiseScroll;
