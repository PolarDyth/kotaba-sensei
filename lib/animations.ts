import { Variants } from "framer-motion"

// Fade in with upward motion - for section titles and content
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

// Stagger container for grids of cards
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Individual card animation within a stagger container
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
}

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

// Scale up animation
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
}

// Hover animation presets for motion components
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeOut" as const },
}

export const tapScale = {
  scale: 0.98,
}

export const buttonHover = {
  scale: 1.03,
  transition: { duration: 0.2, ease: "easeOut" as const },
}

export const buttonTap = {
  scale: 0.97,
}

// Viewport settings for scroll-triggered animations
export const viewportOnce = {
  once: true,
  margin: "-50px",
}

