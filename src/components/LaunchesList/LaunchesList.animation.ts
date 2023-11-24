export const variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0,
    },
  },
}

export const childrenVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.6,
    },
  },
}
