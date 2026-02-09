import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const FinalMessage = ({ onReplay }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 2,
        size: 20 + Math.random() * 20,
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 5000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative p-4 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 opacity-70" />
      
      {/* Rising heart particles */}
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.div
            key={heart.id}
            initial={{ y: '100vh', opacity: 0, scale: 0 }}
            animate={{ 
              y: '-100px', 
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5],
              rotate: [0, 360]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: heart.animationDuration,
              ease: "easeOut"
            }}
            className="absolute text-pink-400 pointer-events-none"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
            }}
          >
            💕
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main message */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center z-10 max-w-4xl mx-auto"
      >
        {/* Glowing text effect */}
        <motion.div
          animate={{
            textShadow: [
              "0 0 20px rgba(139,69,19,0.8)",
              "0 0 40px rgba(139,69,19,1)",
              "0 0 20px rgba(139,69,19,0.8)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-pink-800 mb-8 leading-tight">
            You are very special to me, Senorita 💕
          </h1>
        </motion.div>

        {/* Decorative hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-8 mb-12"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 15, -15, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl md:text-8xl"
          >
            💖
          </motion.div>
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -15, 15, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="text-6xl md:text-8xl"
          >
            💕
          </motion.div>
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 15, -15, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="text-6xl md:text-8xl"
          >
            💖
          </motion.div>
        </motion.div>

        {/* Replay button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReplay}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-poppins font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 text-lg border-2 border-white"
        >
          Replay ✨
        </motion.button>
      </motion.div>

      {/* Floating background elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`bg-${i}`}
          className="absolute text-pink-200 text-2xl opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          {['✨', '💫', '⭐', '🌟', '💖', '🌹'][i]}
        </motion.div>
      ))}
    </div>
  );
};

export default FinalMessage;
