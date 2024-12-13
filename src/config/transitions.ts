// config/transitions.ts
import { type TransitionConfig } from '@/types/transitions';

export const transitions: TransitionConfig = {
  hero: {
    bottom: {
      image: '/transitions/bottom.png',
      height: 80,
      flip: true,
      className: 'z-[15] absolute bottom-0 w-full rotate-180'
    }
  },
  about: {
    top: {
      image: '/transitions/top.png',
      backgroundColor: 'transparent',
      height: 80,
      flip: false,
      className: 'z-[25]'
    },
    bottom: {
      image: '/transitions/bottom.png',
      backgroundColor: 'transparent',
      height: 80,
      flip: false,
      className: 'z-[20]'
    }
  },
  advantages: {
    top: {
      image: '/transitions/top.png',
      backgroundColor: 'black',
      height: 80,
      flip: true,
      className: 'absolute top-0 w-full'
    },
    bottom: {
      image: '/transitions/bottom.png',
      backgroundColor: 'black',
      height: 80,
      flip: false,
      className: 'absolute bottom-0 w-full'
    }
  },
  reviews: {
    top: {
      image: '/transitions/top.png',
      backgroundColor: '#FF4B26',
      height: 80,
      flip: false,
      className: 'absolute top-0 w-full'
    },
    bottom: {
      image: '/transitions/bottom.png',
      backgroundColor: '#FF4B26',
      height: 80,
      flip: false,
      className: 'absolute bottom-0 w-full'
    }
  },
  results: {
    top: {
      image: '/transitions/top.png',
      backgroundColor: '#FF4B26',
      height: 80,
      flip: true,
      className: 'absolute top-0 w-full'
    },
    bottom: {
      image: '/transitions/bottom.png',
      backgroundColor: '#FF4B26',
      height: 80,
      flip: false,
      className: 'absolute bottom-0 w-full'
    }
  },
  quiz: {
    top: {
      image: '/transitions/top.png',
      backgroundColor: '#FF4B26',
      height: 80,
      flip: false,
      className: 'absolute top-0 w-full'
    },
    bottom: {
      image: '/transitions/bottom.png',
      backgroundColor: '#FF4B26',
      height: 80,
      flip: false,
      className: 'absolute bottom-0 w-full'
    }
  },
  contacts: {
    top: {
      image: '/transitions/top.png',
      backgroundColor: '#FF4B26',
      height: 80,
      flip: true,
      className: 'absolute top-0 w-full'
    },
    bottom: {
      image: '/transitions/bottom.png',
      backgroundColor: '#FF4B26',
      height: 80,
      flip: false,
      className: 'absolute bottom-0 w-full'
    }
  }
};
