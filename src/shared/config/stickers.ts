import { type SectionStickers } from '../types/stickers';

/**
 * Конфигурация стикеров для всех секций
 */
export const defaultStickers: SectionStickers = {
  about: [
    {
      src: '/vinyl.svg',
      alt: 'Винил',
      imageKey: 'possibilities',
      size: { width: 8, height: 8 },
      position: {
        type: 'absolute',
        inset: '75% 0% 0% 75%',
        transform: 'none'
      },
      animation: {
        animate: {
          rotate: [0, 360]
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }
      },
      zIndex: 40
    },
    {
      src: '/cd.svg',
      alt: 'Диск',
      imageKey: 'learning',
      size: { width: 8, height: 8 },
      position: {
        type: 'absolute',
        inset: '80% 80% 0% 0%',
        transform: 'none'
      },
      animation: {
        animate: {
          rotate: [0, 360]
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }
      },
      zIndex: 40
    },
    {
      src: '/tambourine.svg',
      alt: 'Бубен',
      imageKey: 'music',
      size: { width: 8, height: 8 },
      position: {
        type: 'absolute',
        inset: '80% 0% 0% 75%',
        transform: 'none'
      },
      animation: {
        animate: {
          rotate: [0, 360]
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: 'linear'
        }
      },
      zIndex: 40
    }
  ],
  aboutGeneral: [
    {
      src: '/piano.svg',
      alt: 'Piano2',
      size: { 
        width: 10, 
        height: 10 
      },
      position: {
        type: 'absolute',
        top: '79%',
        right: '0%',
        transform: 'translate(0, -50%)'
      },
      animation: {
        animate: {
          y: [-15, 15]
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 40
    },
    {
      src: '/guitar-10.svg',
      alt: 'Guitar',
      size: { 
        width: 10, 
        height: 10 
      },
      position: {
        type: 'absolute',
        top: '70.2%',
        right: '77%',
        transform: 'translate(0, -50%)'
      },
      animation: {
        animate: {
          x: [-15, 15]
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 40
    }
  ],
  quiz: [
    {
      src: '/microphone.svg',
      alt: 'Microphone',
      size: { 
        width: 12, 
        height: 12 
      },
      position: {
        type: 'absolute',
        top: '10%',
        right: '5%',
        transform: 'translate(0, -50%)'
      },
      animation: {
        animate: {
          y: [-10, 10],
          rotate: [-5, 5]
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 0
    },
    {
      src: '/drums.svg',
      alt: 'Drums',
      size: { 
        width: 14, 
        height: 14 
      },
      position: {
        type: 'absolute',
        bottom: '20%',
        left: '5%',
        transform: 'translate(0, 50%)'
      },
      animation: {
        animate: {
          scale: [0.95, 1.05],
          rotate: [2, -2]
        },
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 0
    }
  ],
  hero: [
    {
      src: '/piano.svg',
      alt: 'Piano',
      size: { 
        width: 12, 
        height: 12 
      },
      position: {
        type: 'absolute',
        top: '20%',
        right: '10%',
        transform: 'translate(0, -50%)'
      },
      animation: {
        animate: {
          y: [-20, 20],
          rotate: [-5, 5]
        },
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 0
    },
    {
      src: '/guitar-10.svg',
      alt: 'Guitar',
      size: { 
        width: 14, 
        height: 14 
      },
      position: {
        type: 'absolute',
        bottom: '10%',
        left: '5%',
        transform: 'translate(0, 50%)'
      },
      animation: {
        animate: {
          y: [-15, 15],
          rotate: [5, -5]
        },
        transition: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 0
    },
    {
      src: '/vinyl.svg',
      alt: 'Vinyl',
      size: { 
        width: 10, 
        height: 10 
      },
      position: {
        type: 'absolute',
        top: '60%',
        right: '15%',
        transform: 'translate(0, -50%)'
      },
      animation: {
        animate: {
          rotate: [0, 360]
        },
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }
      },
      zIndex: 0
    }
  ],
  advantages: [
    {
      src: '/notes.svg',
      alt: 'Notes',
      imageKey: 'experienced-teachers',
      size: { 
        width: 8, 
        height: 8 
      },
      position: {
        type: 'absolute',
        top: '10%',
        right: '10%',
        transform: 'translate(50%, -50%)'
      },
      animation: {
        animate: {
          y: [-5, 5],
          rotate: [-10, 10]
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 0
    },
    {
      src: '/metronome.svg',
      alt: 'Metronome',
      imageKey: 'individual-approach',
      size: { 
        width: 6, 
        height: 6 
      },
      position: {
        type: 'absolute',
        bottom: '10%',
        left: '10%',
        transform: 'translate(-50%, 50%)'
      },
      animation: {
        animate: {
          rotate: [-20, 20]
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 0
    },
    {
      src: '/clock.svg',
      alt: 'Clock',
      imageKey: 'flexible-schedule',
      size: { 
        width: 7, 
        height: 7 
      },
      position: {
        type: 'absolute',
        top: '20%',
        left: '5%',
        transform: 'translate(-50%, -50%)'
      },
      animation: {
        animate: {
          rotate: [0, 360]
        },
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }
      },
      zIndex: 0
    },
    {
      src: '/mixer.svg',
      alt: 'Mixer',
      imageKey: 'modern-equipment',
      size: { 
        width: 8, 
        height: 8 
      },
      position: {
        type: 'absolute',
        bottom: '15%',
        right: '5%',
        transform: 'translate(50%, 50%)'
      },
      animation: {
        animate: {
          scale: [0.9, 1.1]
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 0
    }
  ],
  reviews: [
    {
      src: '/piano.svg',
      alt: 'Piano',
      imageKey: 'review-1',
      size: { 
        width: 8, 
        height: 8 
      },
      position: {
        type: 'absolute',
        top: '10%',
        right: '5%',
        transform: 'translate(50%, -50%)'
      },
      animation: {
        animate: {
          y: [-5, 5],
          rotate: [-5, 5]
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 0
    },
    {
      src: '/guitar.svg',
      alt: 'Guitar',
      imageKey: 'review-2',
      size: { 
        width: 7, 
        height: 7 
      },
      position: {
        type: 'absolute',
        bottom: '15%',
        left: '10%',
        transform: 'translate(-50%, 50%)'
      },
      animation: {
        animate: {
          rotate: [-10, 10]
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 0
    },
    {
      src: '/mic.svg',
      alt: 'Microphone',
      imageKey: 'review-3',
      size: { 
        width: 6, 
        height: 6 
      },
      position: {
        type: 'absolute',
        top: '30%',
        left: '5%',
        transform: 'translate(-50%, -50%)'
      },
      animation: {
        animate: {
          scale: [0.9, 1.1]
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 0
    },
    {
      src: '/drums.svg',
      alt: 'Drums',
      imageKey: 'review-4',
      size: { 
        width: 8, 
        height: 8 
      },
      position: {
        type: 'absolute',
        bottom: '10%',
        right: '10%',
        transform: 'translate(50%, 50%)'
      },
      animation: {
        animate: {
          rotate: [-15, 15]
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 0
    }
  ],aboutImages: {
    possibilities: {
      src: '/cards/possibilities.png',
      alt: 'Безграничные возможности'
    },
    learning: {
      src: '/cards/learning.png',
      alt: 'Уникальное обучение'
    },
    music: {
      src: '/cards/music.png',
      alt: 'Море музыки'
    }
  }
};