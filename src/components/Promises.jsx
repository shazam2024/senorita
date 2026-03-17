import { motion } from 'framer-motion';
import { Heart, Smile, Star, Shield } from 'lucide-react';

const Promises = () => {
  const promises = [
    {
      icon: Heart,
      text: 'I will always be there for you',
      color: 'from-pink-400 to-pink-500',
    },
    {
      icon: Smile,
      text: 'I will tolerate your mood swings',
      color: 'from-purple-400 to-purple-500',
    },
    {
      icon: Star,
      text: 'I will make you feel special',
      color: 'from-amber-400 to-amber-500',
    },
    {
      icon: Shield,
      text: 'I will always love you',
      color: 'from-rose-400 to-rose-500',
    },
  ];

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
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">My Promises</span> 🤞
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promises.map((promise, index) => {
            const IconComponent = promise.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="theme-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${promise.color} flex items-center justify-center shadow-lg`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <p className="text-lg font-medium theme-text-primary flex-1">
                  {promise.text}
                  {index === 1 && <span className="ml-1">😅</span>}
                  {index === 3 && <span className="ml-1 text-red-500">❤️</span>}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="theme-text-muted italic text-lg">
            "Promises are not just words, they are commitments from the heart"
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Promises;
