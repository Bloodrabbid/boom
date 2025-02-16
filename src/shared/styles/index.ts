import { cva } from 'class-variance-authority';

export const styles = {
  layout: {
    container: "container mx-auto px-4",
    section: "relative py-16",
  },
  
  typography: {
    heading: {
      h1: "font-raleway font-extrabold text-4xl md:text-5xl lg:text-6xl",
      h2: "font-raleway font-extrabold text-3xl md:text-4xl lg:text-5xl",
      h3: "font-raleway font-bold text-2xl md:text-3xl lg:text-4xl",
    },
    text: {
      base: "text-base",
      large: "text-lg md:text-xl",
      small: "text-sm",
    },
  },

  components: {
    card: cva("bg-white rounded-lg shadow-lg", {
      variants: {
        intent: {
          primary: "border-primary",
          secondary: "border-secondary",
        },
        size: {
          sm: "p-4",
          md: "p-6",
          lg: "p-8",
        },
      },
      defaultVariants: {
        intent: "primary",
        size: "md",
      },
    }),
  },

  animations: {
    fadeIn: "transition-opacity duration-300",
    pulse: "animate-pulse",
    rotate: "transition-transform duration-300 ease-in-out",
  },
} as const; 