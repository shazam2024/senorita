import { motion } from 'framer-motion';
import { useMemo } from 'react';

const ParticleField = ({ count = 24, type = 'glow' }) => {
  const particles = useMemo(() => {
    return new Array(count).fill(0).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: type === 'firefly' ? 2 + Math.random() * 3 : 3 + Math.random() * 6,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 6,
      driftX: -20 + Math.random() * 40,
      driftY: -26 + Math.random() * 52,
      opacity: type === 'firefly' ? 0.9 : 0.55,
    }));
  }, [count, type]);

  return (
    <div className="absolute inset-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            background:
              type === 'firefly'
                ? 'radial-gradient(circle, rgba(255,215,160,1) 0%, rgba(255,215,160,0.0) 70%)'
                : 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,215,160,0.0) 70%)',
            opacity: p.opacity,
            filter: 'blur(0.2px)',
          }}
          animate={{
            x: [0, p.driftX, 0],
            y: [0, p.driftY, 0],
            opacity: [0, p.opacity, p.opacity * 0.7, 0],
            scale: [0.5, 1, 1.1, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
