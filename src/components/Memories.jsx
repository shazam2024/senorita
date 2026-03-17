import { motion } from 'framer-motion';

const Memories = () => {
  const placeholders = [
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Moments of You</span> 📸
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {placeholders.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="aspect-square theme-card rounded-2xl flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 border-2 border-dashed border-gray-300 dark:border-gray-600"
            >
              <span className="text-5xl mb-3">{item.icon}</span>
              <p className="theme-text-muted text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block theme-card rounded-2xl p-6 shadow-md">
            <p className="text-lg theme-text-secondary flex items-center gap-2">
              <span>📸</span>
              Photos yaha honi thi… but tum bhejti hi nahi
              <span className="text-2xl">😒</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Memories;
