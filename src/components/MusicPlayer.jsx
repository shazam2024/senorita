import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/songs/song.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.15; // Low volume (15%)

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Auto-play blocked, user needs to interact first
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed top-4 right-4 z-50 flex items-center gap-2"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMute}
        className="p-3 rounded-full glass shadow-lg hover:shadow-xl transition-all"
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        ) : (
          <Volume2 className="w-5 h-5 text-pink-500" />
        )}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className={`p-3 rounded-full glass shadow-lg hover:shadow-xl transition-all flex items-center gap-2 ${
          isPlaying ? 'bg-pink-100 dark:bg-pink-900' : ''
        }`}
      >
        <Music className={`w-5 h-5 ${isPlaying ? 'text-pink-500' : 'text-gray-600 dark:text-gray-300'}`} />
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300 hidden sm:block">
          {isPlaying ? 'Playing...' : 'Play Music'}
        </span>
        {isPlaying && (
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-2 h-2 bg-pink-500 rounded-full"
          />
        )}
      </motion.button>
    </motion.div>
  );
};

export default MusicPlayer;
