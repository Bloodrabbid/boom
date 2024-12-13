import { type AnimationProps, type TargetAndTransition, type Transition } from 'framer-motion';

export interface CardImage {
  src: string;
  alt: string;
}

export interface StickerAnimation {
  animate: TargetAndTransition;
  transition: Transition;
}

export interface Sticker {
  src: string;
  alt: string;
  imageKey?: string;
  size: {
    width: number;
    height: number;
  };
  position: {
    type: 'absolute';
    inset?: string;
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
    transform?: string;
  };
  animation: StickerAnimation;
  zIndex?: number;
}

export interface SectionStickers {
  hero: Sticker[];
  about: Sticker[];
  quiz: Sticker[];
  advantages: Sticker[];
  aboutImages: {
    possibilities: CardImage;
    learning: CardImage;
    music: CardImage;
  };
  aboutGeneral?: Sticker[];
}

export const defaultStickers: SectionStickers = {
  hero: [],
  about: [
    {
      src: '/vinyl.svg',
      alt: 'Винил',
      imageKey: 'possibilities',
      size: { width: 8, height: 8 },
      position: {
        type: 'absolute',
        inset: '85% 0% 0% 85%',
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
        inset: '85% 0% 0% -5%',
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
        inset: '85% 0% 0% 85%',
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
  advantages: [
    {
      src: '/guitar-4.svg',
      alt: 'Гитара',
      size: { width: 16, height: 16 },
      position: {
        type: 'absolute',
        left: '-40%',
        bottom: '-280%',
        transform: 'rotate(-15deg)'
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
      size: { width: 12, height: 12 },
      position: {
        type: 'absolute',
        right: '-15%',
        top: '-40%',
        transform: 'rotate(15deg)'
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
  aboutGeneral: [
    {
      src: '/guitar-10.svg',
      alt: 'GuitarAbout',
      size: { width: 15, height: 15 },
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
      size: { width: 13, height: 13 },
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
  ]
};
