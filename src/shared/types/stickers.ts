import { type TargetAndTransition, type Transition } from 'framer-motion';

export interface CardImage {
  src: string;
  alt: string;
}

export type AboutImageKey = 'possibilities' | 'learning' | 'music';

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
  breakpoints?: {
    md?: { width: number; height: number };
    lg?: { width: number; height: number };
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
  reviews: Sticker[];
  aboutImages: {
    possibilities: CardImage;
    learning: CardImage;
    music: CardImage;
  };
  aboutGeneral?: Sticker[];
}