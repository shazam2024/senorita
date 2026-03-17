import { motion } from 'framer-motion';

const MoonGift = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent"
        >
          Your Place on the Moon 🌙
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Moon surface placeholder */}
          <div className="relative aspect-video bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            {/* Stars background */}
            <div className="absolute inset-0">
              {Array.from({ length: 50 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Moon craters */}
            <div className="absolute bottom-10 left-10 w-20 h-8 bg-gray-800 rounded-full opacity-60" />
            <div className="absolute bottom-20 right-20 w-32 h-12 bg-gray-800 rounded-full opacity-50" />
            <div className="absolute top-20 left-1/4 w-16 h-6 bg-gray-800 rounded-full opacity-40" />

            {/* Senorita Tranquility Point Marker */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              {/* Glow effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(251, 191, 36, 0.5)',
                    '0 0 60px rgba(251, 191, 36, 0.8)',
                    '0 0 20px rgba(251, 191, 36, 0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center"
              >
                <span className="text-3xl">📍</span>
              </motion.div>

              {/* Pulse rings */}
              <motion.div
                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-amber-400"
              />
            </motion.div>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <p className="text-amber-300 font-semibold text-sm md:text-base">
                📍 Senorita Tranquility Point
              </p>
            </motion.div>
          </div>

          {/* Description card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-8 theme-card rounded-2xl p-6 text-center shadow-lg"
          >
            <p className="text-lg theme-text-secondary">
              I reserved a small place for you on the moon —
              <span className="text-amber-500 font-bold"> Senorita Tranquility Point 💛</span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MoonGift;
