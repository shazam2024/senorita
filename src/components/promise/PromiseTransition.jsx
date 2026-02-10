import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ParticleField from '../ui/ParticleField';
import ScreenShell from '../ui/ScreenShell';
import useAudioFade from '../../hooks/useAudioFade';

const PromiseTransition = ({ onDone }) => {
  const [soundUnlocked, setSoundUnlocked] = useState(false);

  const { play, stop } = useAudioFade({
    src: '/songs/transition.mp3',
    loop: true,
    initialVolume: 0,
    maxVolume: 0.22,
  });

  useEffect(() => {
    return () => {
      stop({ fadeMs: 700 });
    };
  }, [stop]);

  const handleRingTap = () => {
    play({ fadeMs: 900 });
    setSoundUnlocked(true);
  };

  return (
    <ScreenShell variant="promise">
      <div className="absolute inset-0">
        <ParticleField count={16} type="glow" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold leading-tight"
          style={{
            color: 'rgba(255,255,255,0.92)',
            textShadow:
              '0 0 26px rgba(0,0,0,0.55), 0 0 18px rgba(255,215,160,0.55), 0 0 44px rgba(217,70,239,0.25)',
          }}
        >
          Today, I don&apos;t just say "Main tumse pyar karta hu"
          <br />
          I make you promises{' '}
          <span className="relative inline-block">
            <motion.button
              type="button"
              onClick={handleRingTap}
              aria-label="Tap ring to enable sound"
              className="relative inline-flex items-center justify-center align-baseline"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              animate={
                soundUnlocked
                  ? { filter: 'drop-shadow(0 0 0 rgba(0,0,0,0))' }
                  : {
                      filter: [
                        'drop-shadow(0 0 10px rgba(255,255,255,0.70)) drop-shadow(0 0 18px rgba(125,211,252,0.80)) drop-shadow(0 0 34px rgba(56,189,248,0.35))',
                        'drop-shadow(0 0 14px rgba(255,255,255,0.85)) drop-shadow(0 0 26px rgba(125,211,252,0.95)) drop-shadow(0 0 44px rgba(56,189,248,0.45))',
                        'drop-shadow(0 0 10px rgba(255,255,255,0.70)) drop-shadow(0 0 18px rgba(125,211,252,0.80)) drop-shadow(0 0 34px rgba(56,189,248,0.35))',
                      ],
                    }
              }
              transition={soundUnlocked ? { duration: 0.2 } : { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {!soundUnlocked && (
                <span
                  className="absolute -inset-2 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.45) 0%, rgba(125,211,252,0.22) 40%, rgba(56,189,248,0.0) 72%)',
                    filter: 'blur(1px)',
                  }}
                />
              )}
              <motion.span
                className="relative"
                animate={soundUnlocked ? { y: 0, rotate: 0 } : { y: [0, -3, 0], rotate: [0, -6, 6, 0] }}
                transition={soundUnlocked ? { duration: 0.2 } : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                💍
              </motion.span>
            </motion.button>
          </span>
        </motion.p>

        <motion.button
          type="button"
          onClick={() => {
            if (!soundUnlocked) play({ fadeMs: 500 });
            onDone();
          }}
          disabled={!soundUnlocked}
          whileHover={soundUnlocked ? { scale: 1.04 } : {}}
          whileTap={soundUnlocked ? { scale: 0.96 } : {}}
          className={`mt-12 px-8 py-3 rounded-full font-poppins font-semibold text-white shadow-2xl border backdrop-blur-md transition-all duration-300 ${
            soundUnlocked
              ? 'border-white/30 cursor-pointer'
              : 'border-white/10 cursor-not-allowed opacity-70'
          }`}
          style={{
            background: soundUnlocked
              ? 'linear-gradient(135deg, rgba(255,185,210,0.75) 0%, rgba(255,215,160,0.65) 45%, rgba(189,147,249,0.6) 100%)'
              : 'linear-gradient(135deg, rgba(255,185,210,0.35) 0%, rgba(255,215,160,0.3) 45%, rgba(189,147,249,0.25) 100%)',
            boxShadow: soundUnlocked
              ? '0 18px 50px rgba(255,185,210,0.25), 0 0 40px rgba(255,215,160,0.25)'
              : '0 8px 20px rgba(0,0,0,0.15)',
          }}
        >
          {soundUnlocked ? 'Continue →' : 'put your beautiful finger into the ring (tap)'}
        </motion.button>
      </motion.div>
    </ScreenShell>
  );
};

export default PromiseTransition;
