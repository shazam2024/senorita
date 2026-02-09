import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Letter = ({ onContinue, audioSrc = '/letter.mp3' }) => {
  const [isHeroImageLoaded, setIsHeroImageLoaded] = useState(false);
  const audioRef = useRef(null);
  const playTimeoutRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.loop = true;

    return () => {
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  useEffect(() => {
    if (!isHeroImageLoaded) return;
    if (!audioRef.current) return;

    playTimeoutRef.current = setTimeout(() => {
      const a = audioRef.current;
      if (!a) return;
      const p = a.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {});
      }
    }, 2000);

    return () => {
      if (playTimeoutRef.current) {
        clearTimeout(playTimeoutRef.current);
        playTimeoutRef.current = null;
      }
    };
  }, [isHeroImageLoaded]);

  const handleContinue = () => {
    if (playTimeoutRef.current) {
      clearTimeout(playTimeoutRef.current);
      playTimeoutRef.current = null;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    onContinue();
  };

  const shayari = `Wo achanak aa gayi
Yun nazar ke saamne
Jaise nikal aaya
Ghata se chaand
Chehre pe zulfen
Bikhri hui thi
Din mein raat ho gayi
Ek ajnabee haseena se
Yun mulakat ho gayi💖`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative p-4">
      {/* Background sparkles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Letter card */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="bg-gradient-to-br from-white to-pink-50 shadow-romantic p-4 md:p-6 w-[calc(100vw-2rem)] max-w-5xl min-h-[70vh] border border-pink-200 relative overflow-hidden rounded-xl">
          {/* Paper texture overlay */}
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,182,193,0.1) 10px,
                rgba(255,182,193,0.1) 20px
              )`
            }} />
          </div>

          {/* Letter content */}
          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mb-8"
            >
              <div className="text-6xl mb-4">💕</div>
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-pink-600 mb-6">
                My Dear Senorita
              </h2>
              
              {/* Eyes Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="mb-6"
              >
                <img 
                  src="/eyes.jpg" 
                  alt="Her beautiful eyes" 
                  className="w-80 h-48 md:w-[32rem] md:h-64 mx-auto object-cover rounded-lg border-4 border-pink-300 shadow-lg"
                  onLoad={() => setIsHeroImageLoaded(true)}
                  onError={() => setIsHeroImageLoaded(true)}
                />
              </motion.div>
            </motion.div>

            {/* Shayari text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <p className="text-lg md:text-xl font-handwritten text-gray-700 leading-relaxed text-center whitespace-pre-line">
                {shayari}
              </p>
            </motion.div>

            {/* Decorative elements */}
            <div className="flex justify-center space-x-4 mb-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-2xl"
              >
                🌹
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
              >
                💖
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-2xl"
              >
                🌹
              </motion.div>
            </div>

            {/* Continue button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContinue}
              className="w-full py-3 px-6 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-poppins font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Tap to continue →
            </motion.button>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-2 left-2 text-pink-300 text-2xl opacity-50">✦</div>
          <div className="absolute top-2 right-2 text-pink-300 text-2xl opacity-50">✦</div>
          <div className="absolute bottom-2 left-2 text-pink-300 text-2xl opacity-50">✦</div>
          <div className="absolute bottom-2 right-2 text-pink-300 text-2xl opacity-50">✦</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Letter;
