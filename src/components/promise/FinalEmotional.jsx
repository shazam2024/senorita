import { motion } from 'framer-motion';
import { useEffect } from 'react';
import ParticleField from '../ui/ParticleField';
import ScreenShell from '../ui/ScreenShell';
import useAudioFade from '../../hooks/useAudioFade';

const FinalEmotional = ({ name = 'Senorita', onNext }) => {
  const { play, stop } = useAudioFade({
    src: '/songs/final_emotional.mp3',
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

  return (
    <ScreenShell variant="cinematic">
      <div className="absolute inset-0">
        <ParticleField count={22} type="glow" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="glassmorphism rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20"
          style={{
            boxShadow:
              '0 20px 90px rgba(0,0,0,0.38), 0 0 60px rgba(255,215,160,0.18)',
          }}
        >
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold leading-tight"
            style={{
              color: 'rgba(255,255,255,0.92)',
              textShadow:
                '0 0 26px rgba(0,0,0,0.55), 0 0 22px rgba(255,215,160,0.45), 0 0 44px rgba(255,130,200,0.18)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            These are not just words…
            <br />
            They are my forever with you 💕
          </motion.p>

          <motion.div
            className="mt-10"
            animate={{
              textShadow: [
                '0 0 18px rgba(255,215,160,0.35)',
                '0 0 30px rgba(216,180,254,0.45)',
                '0 0 18px rgba(255,215,160,0.35)',
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div
              className="text-4xl md:text-6xl font-playfair font-bold"
              style={{ color: 'rgba(255,255,255,0.95)' }}
            >
              {name}
            </div>
          </motion.div>

          <motion.button
            type="button"
            onClick={onNext}
            className="mt-12 px-10 py-4 rounded-full font-poppins font-semibold text-white border border-white/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background:
                'linear-gradient(135deg, rgba(255,215,160,0.75) 0%, rgba(255,185,210,0.70) 55%, rgba(189,147,249,0.60) 100%)',
              boxShadow:
                '0 18px 55px rgba(0,0,0,0.25), 0 0 45px rgba(255,215,160,0.22)',
            }}
          >
            Hold My Hand 🤍
          </motion.button>
        </motion.div>
      </div>
    </ScreenShell>
  );
};

export default FinalEmotional;
