// src/shared/constants/defaultStickers.ts

import { SectionStickers } from '@/shared/types/stickers';

/**
 * Конфигурация стикеров для всех секций
 */
export const defaultStickers: SectionStickers = {
  hero: [], // добавьте пустой массив для hero
  about: [
    {
      src: '/vinyl.svg',
      alt: 'Винил',
      imageKey: 'possibilities',
      size: { width: 7, height: 7 },
      breakpoints: {
        md: { width: 10, height: 10 },
        lg: { width: 12, height: 12 }
      },
      position: {
        type: 'absolute',
        top: '75%',
        left: '-2%',
        mobile: {
          cardIndex: 0,
          top: undefined,
          right: undefined,
          bottom: undefined,
          left: undefined
        },
        desktop: {
          cardIndex: 0,
          top: undefined,
          right: undefined,
          bottom: undefined,
          left: undefined
        }
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
      alt: 'Тамбурин',
      imageKey: 'learning',
      size: { width: 7, height: 7 },
      breakpoints: {
        md: { width: 10, height: 10 },
        lg: { width: 12, height: 12 }
      },
      position: {
        type: 'absolute',
        top: '75%',
        right: '-2%',
        transform: 'rotate(-15deg)',
        mobile: {
          cardIndex: 1,
          top: undefined,
          right: undefined,
          bottom: undefined,
          left: undefined
        },
        desktop: {
          cardIndex: 1,
          top: undefined,
          right: undefined,
          bottom: undefined,
          left: undefined
        }
      },
      animation: {
        animate: {
          rotate: [0, 16, 0]
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
      alt: 'CD',
      imageKey: 'music',
      size: { width: 7, height: 7 },
      breakpoints: {
        md: { width: 10, height: 10 },
        lg: { width: 12, height: 12 }
      },
      position: {
        type: 'absolute',
        top: '75%',
        left: '-2%',
        transform: 'rotate(-15deg)',
        mobile: {
          cardIndex: 2,
          top: undefined,
          right: undefined,
          bottom: undefined,
          left: undefined
        },
        desktop: {
          cardIndex: 2,
          top: undefined,
          right: undefined,
          bottom: undefined,
          left: undefined
        }
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
  advantages: [
    {
      src: '/guitar-4.svg',
      alt: 'Гитара',
      size: { width: 7, height: 7 },
      breakpoints: {
        md: { width: 10, height: 10 },
        lg: { width: 16, height: 16 }
      },
      position: {
        type: 'absolute',
        left: '-35%',
        bottom: '-20%',
        transform: 'rotate(-15deg)',
        mobile: {
          cardIndex: 5, // Профессиональные педагоги
          left: '-12%',
          bottom: '-16%'
        },
        desktop: {
          cardIndex: 4, // Крутые мероприятия
          left: '-38%',
          bottom: '-5%'
        }
      },
      animation: {
        animate: {
          rotate: [-15, 0, -15],
          y: [0, -5, 0]
        },
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      },
      zIndex: 10
    },
    {
      src: '/drum.svg',
      alt: 'Барабан',
      size: { width: 7, height: 7 },
      breakpoints: {
        md: { width: 10, height: 10 },
        lg: { width: 12, height: 12 }
      },
      position: {
        type: 'absolute',
        right: '-15%',
        top: '-30%',
        transform: 'rotate(15deg)',
        mobile: {
          cardIndex: 0, // Индивидуальный подход
          right: '-3%',
          top: '-12%'
        },
        desktop: {
          cardIndex: 1, // Занятия за инструментом
          right: '-15%',
          top: '-30%'
        }
      },
      animation: {
        animate: {
          rotate: [15, 0, 15],
          y: [0, 5, 0]
        },
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }
      },
      zIndex: 10
    }
  ],
  quiz: [],
  reviews: [],
  aboutGeneral: [
    {
      src: '/guitar-10.svg',
      alt: 'GuitarAbout',
      size: { width: 7, height: 7 },
      breakpoints: {
        md: { width: 12, height: 12 },
        lg: { width: 15, height: 15 }
      },
      position: {
        type: 'absolute',
        left: '-13%',
        bottom: '-10%'
      },
      animation: {
        animate: {
          y: [-10, 10],
          rotate: [-45, -40]
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 40
    },
    {
      src: '/piano.svg',
      alt: 'PianoAbout',
      size: { width: 7, height: 7 },
      breakpoints: {
        md: { width: 12, height: 12 },
        lg: { width: 15, height: 15 }
      },
      position: {
        type: 'absolute',
        right: '-5%',
        bottom: '-20%'
      },
      animation: {
        animate: {
          scale: [1, 1.15],
          rotate: [-8, 8]
        },
        transition: {
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      },
      zIndex: 40
    }
  ],
  aboutImages: {
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
  },
};