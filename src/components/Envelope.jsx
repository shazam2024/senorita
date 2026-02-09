import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Envelope = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setShowLetter(true);
      }, 600);
      setTimeout(() => {
        onOpen();
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      {/* More floating hearts background */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute text-pink-300 animate-float"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
          }}
        >
          💕
        </div>
      ))}

      {/* Main content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-playfair font-bold mb-12 drop-shadow-lg"
          style={{ 
            color: '#ff1493',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(255,255,255,0.8)'
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          You've got a letter 💌
        </motion.h1>

        {/* Envelope - Simple Clickable */}
        <motion.div
          className="relative w-64 h-40 md:w-80 md:h-48 mx-auto cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          {/* Envelope body */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-400 rounded-lg shadow-2xl border-2 border-pink-500" />
          
          {/* Tap indicator */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-30"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-pink-500 text-xl">👆</span>
              </div>
            </motion.div>
          )}

          {/* Paper that slides out */}
          <AnimatePresence>
            {showLetter && (
              <motion.div
                initial={{ y: 0, opacity: 0, scale: 0.8 }}
                animate={{ y: -150, opacity: 1, scale: 1.1 }}
                exit={{ y: -200, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute left-1/2 transform -translate-x-1/2 z-20"
              >
                <div className="w-48 h-64 bg-white rounded shadow-2xl border-2 border-gray-200 p-4">
                  <div className="text-center">
                    <div className="text-2xl mb-4">💕</div>
                    <h3 className="text-lg font-playfair font-bold text-pink-600 mb-4">
                      My Dear Senorita
                    </h3>
                    <div className="text-sm text-gray-700">
                      Ek ajnabee haseena se yun mulakat ho gayi...
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Envelope shadow */}
          <div className="absolute -bottom-2 left-4 right-4 h-4 bg-pink-200 rounded-full blur-md opacity-50" />
        </motion.div>

        {!isOpen && (
          <motion.p
            className="mt-8 text-lg font-poppins animate-pulse font-semibold"
            style={{ 
              color: '#ff1493',
              textShadow: '1px 1px 2px rgba(255,255,255,0.8), 0 0 10px rgba(255,255,255,0.5)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Tap envelope to open 💕
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Envelope;
