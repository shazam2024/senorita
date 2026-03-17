import { motion } from 'framer-motion';

const LoveLetter = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">A Letter to My Senorita</span> 💌
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Envelope effect */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl z-10">
            💌
          </div>

          <div className="theme-card rounded-3xl p-8 md:p-12 shadow-xl border-2 border-pink-200/50 relative overflow-hidden">
            {/* Paper texture effect */}
            <div className="absolute inset-0 opacity-30 pointer-events-none dark:opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff69b4' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl theme-text-secondary leading-relaxed mb-6"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Pata nahi kaise, par tum meri life ka best feature ban gayi ho… jise kabhi remove nahi kar sakte 😌
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl theme-text-secondary leading-relaxed mb-6"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Tum meri daily routine ka woh part ho jo skip nahi kar sakta.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Aur haan… thoda kam gussa kiya karo warna server down ho jata hai mera 🥲❤️
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
                className="mt-8 text-right"
              >
                <p className="theme-text-muted italic">Forever yours,</p>
                <p className="text-pink-500 font-semibold">Your Developer 💻❤️</p>
              </motion.div>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-4 left-4 text-2xl opacity-20">❦</div>
            <div className="absolute top-4 right-4 text-2xl opacity-20">❦</div>
            <div className="absolute bottom-4 left-4 text-2xl opacity-20">❦</div>
            <div className="absolute bottom-4 right-4 text-2xl opacity-20">❦</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoveLetter;
