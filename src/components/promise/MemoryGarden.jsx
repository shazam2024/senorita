import { motion } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import ParticleField from '../ui/ParticleField';
import ScreenShell from '../ui/ScreenShell';
import useAudioFade from '../../hooks/useAudioFade';

const MemoryGarden = ({ onReplay }) => {
  const frames = useMemo(
    () =>
      new Array(6).fill(0).map((_, i) => ({
        id: i,
        left: 10 + Math.random() * 80,
        top: 14 + Math.random() * 70,
        rot: -8 + Math.random() * 16,
        delay: Math.random() * 1.2,
      })),
    []
  );

  const { play, stop } = useAudioFade({
    src: '/songs/memory_garden.mp3',
    loop: true,
    initialVolume: 0,
    maxVolume: 0.28,
  });

  useEffect(() => {
    play({ fadeMs: 1600 });
    return () => {
      stop({ fadeMs: 900 });
    };
  }, [play, stop]);

  return (
    <ScreenShell variant="garden" allowScroll={false}>
      <div className="absolute inset-0">
        <ParticleField count={34} type="firefly" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {frames.map((f) => (
          <motion.div
            key={f.id}
            className="absolute w-28 h-36 md:w-36 md:h-44 rounded-2xl border border-white/25 glassmorphism"
            style={{
              left: `${f.left}%`,
              top: `${f.top}%`,
              transform: `translate(-50%, -50%) rotate(${f.rot}deg)`,
              boxShadow:
                '0 18px 60px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(255,255,255,0.08)',
            }}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 + f.delay, ease: 'easeOut' }}
          >
            <div
              className="w-full h-full rounded-2xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(255,215,160,0.20) 0%, rgba(255,185,210,0.18) 55%, rgba(189,147,249,0.16) 100%)',
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="glassmorphism rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20"
        >
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold leading-tight"
            style={{
              color: 'rgba(255,255,255,0.92)',
              textShadow:
                '0 0 26px rgba(0,0,0,0.55), 0 0 18px rgba(255,215,160,0.35), 0 0 44px rgba(216,180,254,0.18)',
            }}
          >
            No matter where life takes us…
            <br />
            My promise is always you.
          </motion.p>

          <motion.button
            type="button"
            onClick={onReplay}
            className="mt-12 px-10 py-4 rounded-full font-poppins font-semibold text-white border border-white/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background:
                'linear-gradient(135deg, rgba(255,185,210,0.70) 0%, rgba(255,215,160,0.65) 50%, rgba(189,147,249,0.58) 100%)',
              boxShadow:
                '0 16px 50px rgba(0,0,0,0.22), 0 0 40px rgba(255,215,160,0.18)',
            }}
          >
            Replay ✨
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none candle-flicker" />
    </ScreenShell>
  );
};

export default MemoryGarden;
