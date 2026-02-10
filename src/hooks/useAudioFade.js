import { useEffect, useMemo, useRef } from 'react';

export default function useAudioFade({ src, loop = true, initialVolume = 0, maxVolume = 0.35 } = {}) {
  const audioRef = useRef(null);
  const rafRef = useRef(null);
  const unlockCleanupRef = useRef(null);

  useEffect(() => {
    if (!src) return;
    const audio = new Audio(src);
    audio.loop = loop;
    audio.volume = Math.max(0, Math.min(1, initialVolume));
    audioRef.current = audio;

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (unlockCleanupRef.current) {
        unlockCleanupRef.current();
        unlockCleanupRef.current = null;
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, [src, loop, initialVolume]);

  const api = useMemo(() => {
    const fadeTo = (target, durationMs = 1200) => {
      const a = audioRef.current;
      if (!a) return;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      const start = performance.now();
      const from = a.volume;
      const to = Math.max(0, Math.min(1, target));

      const tick = (now) => {
        const cur = audioRef.current;
        if (!cur) {
          rafRef.current = null;
          return;
        }
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        const next = from + (to - from) * eased;
        cur.volume = Math.max(0, Math.min(1, next));
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          rafRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const play = async ({ fadeMs = 1200 } = {}) => {
      const a = audioRef.current;
      if (!a) return;
      try {
        // Many browsers block unmuted autoplay, but allow muted autoplay.
        // Start muted at 0 volume, then unmute + fade in if possible.
        a.muted = true;
        a.volume = 0;
        await a.play();
        a.muted = false;
      } catch {
        if (unlockCleanupRef.current) return;

        const retry = async () => {
          const cur = audioRef.current;
          if (!cur) return;
          try {
            cur.muted = false;
            await cur.play();
          } catch {
            return;
          }
          fadeTo(maxVolume, fadeMs);
          if (unlockCleanupRef.current) {
            unlockCleanupRef.current();
            unlockCleanupRef.current = null;
          }
        };

        const onGesture = () => {
          retry();
        };

        const opts = { passive: true };
        window.addEventListener('pointerdown', onGesture, opts);
        window.addEventListener('touchstart', onGesture, opts);
        window.addEventListener('keydown', onGesture);

        unlockCleanupRef.current = () => {
          window.removeEventListener('pointerdown', onGesture, opts);
          window.removeEventListener('touchstart', onGesture, opts);
          window.removeEventListener('keydown', onGesture);
        };
        return;
      }
      fadeTo(maxVolume, fadeMs);
    };

    const stop = ({ fadeMs = 900 } = {}) => {
      const a = audioRef.current;
      if (!a) return;
      fadeTo(0, fadeMs);
      window.setTimeout(() => {
        const cur = audioRef.current;
        if (!cur) return;
        cur.pause();
      }, fadeMs + 60);
    };

    return { audioRef, play, stop, fadeTo };
  }, [maxVolume]);

  return api;
}
