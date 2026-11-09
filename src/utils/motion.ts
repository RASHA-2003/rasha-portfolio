import { Variants } from 'framer-motion';

export const getFadeInUp = (reducedMotion: boolean, delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: reducedMotion ? 0 : 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reducedMotion ? 0.1 : 0.5,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export const getFadeIn = (reducedMotion: boolean, delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: reducedMotion ? 0.1 : 0.4,
      delay,
      ease: 'easeOut',
    },
  },
});

export const getStaggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const getScaleUp = (reducedMotion: boolean, delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: reducedMotion ? 1 : 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: reducedMotion ? 0.1 : 0.4,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export const modalBackdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15, ease: 'easeIn' },
  },
};

export const modalContentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 12,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

