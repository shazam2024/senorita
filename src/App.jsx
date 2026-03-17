import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import Landing from './components/Landing';
import About from './components/About';
import Stats from './components/Stats';
import LoveLetter from './components/LoveLetter';
import Memories from './components/Memories';
import Promises from './components/Promises';
import MoonGift from './components/MoonGift';
import FunSection from './components/FunSection';
import MusicPlayer from './components/MusicPlayer';
import MoodSwingButton from './components/MoodSwingButton';

const themeGradients = {
  light: 'from-pink-50 via-purple-50 to-pink-100',
  dark: 'from-gray-900 via-purple-900 to-gray-800',
  rainy: 'from-blue-100 via-gray-100 to-blue-50',
  romantic: 'from-rose-50 via-pink-100 to-purple-50',
};

function App() {
  const aboutRef = useRef(null);
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [currentTheme]);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${themeGradients[currentTheme]} relative overflow-x-hidden transition-colors duration-700`}>
      <FloatingHearts />
      <MoodSwingButton currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
      <MusicPlayer />
      <NavigationDots />

      <main className="relative z-10">
        <Landing onEnter={scrollToAbout} />
        <div ref={aboutRef}><About /></div>
        <Stats />
        <LoveLetter />
        <Memories />
        <Promises />
        <MoonGift />
        <FunSection />
      </main>
    </div>
  );
}

const NavigationDots = () => {
  const sections = ['landing', 'about', 'stats', 'letter', 'memories', 'promises', 'moon', 'fun'];
  
  const scrollToSection = (index) => {
    const sectionElements = document.querySelectorAll('section');
    if (sectionElements[index]) {
      sectionElements[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
    >
      {sections.map((section, index) => (
        <motion.button
          key={section}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection(index)}
          className="w-3 h-3 rounded-full bg-pink-400/50 hover:bg-pink-500 transition-colors dark:bg-pink-600/50 dark:hover:bg-pink-500"
          aria-label={`Go to ${section} section`}
        />
      ))}
    </motion.div>
  );
};

export default App;
