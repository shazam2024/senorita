import { motion } from 'framer-motion';

const About = () => {
  const hobbies = [
    { icon: '🥲', text: 'Fighting with me', color: 'from-red-400 to-pink-500' },
    { icon: '💕', text: 'Fighting with me', color: 'from-pink-400 to-purple-500' },
    { icon: '😌', text: 'Fighting with me', color: 'from-purple-400 to-pink-500' },
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
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Who is Senorita?</span> 🤔
        </motion.h2>

        {/* Profession Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="theme-card rounded-3xl p-8 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Profession</h3>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Being cute (full-time job) 😌
          </p>
        </motion.div>

        {/* Hobbies Grid */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl font-semibold theme-text-secondary mb-6 text-center"
        >
          Hobbies & Expertise
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`bg-gradient-to-br ${hobby.color} rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <div className="text-4xl mb-3">{hobby.icon}</div>
              <p className="text-lg font-bold text-white drop-shadow-md">{hobby.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
