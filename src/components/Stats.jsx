import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const AnimatedBar = ({ label, value, color, delay, icon }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 1500;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        const interval = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCurrentValue(value);
            clearInterval(interval);
          } else {
            setCurrentValue(Math.floor(current));
          }
        }, duration / steps);
        return () => clearInterval(interval);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-medium theme-text-secondary flex items-center gap-2">
          {icon} {label}
        </span>
        <span className="text-lg font-bold" style={{ color }}>
          {value === Infinity ? '♾️' : `${currentValue}%`}
        </span>
      </div>
      <div className="h-4 theme-progress-bg rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: value === Infinity ? '100%' : `${value}%` }}
          transition={{ delay: delay + 0.2, duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Arguments Won by Me', value: 0, color: '#9ca3af', icon: '😅' },
    { label: 'Arguments Won by Her', value: 100, color: '#ec4899', icon: '👑' },
    { label: 'Love Level', value: Infinity, color: '#8b5cf6', icon: '❤️' },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl w-full theme-card rounded-3xl p-8 md:p-12 shadow-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Our Relationship Analytics</span> 📊
        </motion.h2>

        {stats.map((stat, index) => (
          <AnimatedBar
            key={index}
            label={stat.label}
            value={stat.value}
            color={stat.color}
            delay={0.3 + index * 0.15}
            icon={stat.icon}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 p-4 bg-gradient-to-r from-pink-100/80 to-purple-100/80 theme-card rounded-xl text-center"
        >
          <p className="text-lg theme-text-secondary">
            <span className="font-bold theme-text-primary">Drama Level:</span>
            <span className="text-pink-500 font-semibold"> High but cute 😏</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;
