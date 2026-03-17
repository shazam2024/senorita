import { motion } from 'framer-motion';

const Landing = ({ onEnter }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="text-6xl mb-6"
        >
          💃
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
        >
          Welcome to Senorita's Official Website
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl theme-text-secondary mb-8"
        >
          Certified by me, loved by me, owned by me 😌❤️
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEnter}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-pink-300/50 transition-all duration-300"
        >
          Enter ✨
        </motion.button>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-4xl opacity-30 animate-bounce">
        🌸
      </div>
      <div className="absolute top-40 right-20 text-3xl opacity-30 animate-pulse">
        ✨
      </div>
      <div className="absolute bottom-32 left-20 text-4xl opacity-30 animate-bounce delay-700">
        💕
      </div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-30 animate-pulse delay-500">
        🌙
      </div>
    </section>
  );
};

export default Landing;
