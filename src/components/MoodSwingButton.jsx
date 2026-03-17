import { motion } from 'framer-motion';
import { Sun, Moon, CloudRain, Sparkles } from 'lucide-react';

const MoodSwingButton = ({ currentTheme, onThemeChange }) => {
  const themes = [
    { id: 'light', icon: Sun, label: 'Sunny', color: 'from-amber-400 to-orange-400' },
    { id: 'dark', icon: Moon, label: 'Moonlight', color: 'from-purple-500 to-indigo-500' },
    { id: 'rainy', icon: CloudRain, label: 'Cozy', color: 'from-blue-400 to-cyan-400' },
    { id: 'romantic', icon: Sparkles, label: 'Romantic', color: 'from-pink-400 to-rose-400' },
  ];

  const currentIndex = themes.findIndex((t) => t.id === currentTheme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];
  const Icon = nextTheme.icon;

  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        const nextIndex = (currentIndex + 1) % themes.length;
        onThemeChange(themes[nextIndex].id);
      }}
      className={`fixed top-4 left-4 z-50 px-4 py-3 rounded-full bg-gradient-to-r ${nextTheme.color} text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium text-sm hidden sm:block">Mood Swing: {nextTheme.label}</span>
      <span className="font-medium text-sm sm:hidden">Mood</span>
    </motion.button>
  );
};

export default MoodSwingButton;
