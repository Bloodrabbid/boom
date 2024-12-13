import { type MotionValue } from 'framer-motion';

export interface StickerAnimation {
  animate: {
    x?: number[];
    y?: number[];
    rotate?: number[];
    scale?: number[];
  };
  transition: {
    duration: number;
    repeat: number;
    repeatType: 'loop' | 'reverse' | 'mirror';
    ease: string;
  };
}

export interface StickerPosition {
  type: 'absolute';
  inset?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  transform?: string;
}

export interface StickerSize {
  width: number;
  height: number;
}

export interface Sticker {
  src: string;
  alt: string;
  imageKey?: string;
  size: StickerSize;
  position: StickerPosition;
  animation: StickerAnimation;
  zIndex?: number;
}

export interface SectionStickers {
  about: Sticker[];
  aboutGeneral: Sticker[];
  quiz: Sticker[];
  hero: Sticker[];
  advantages: Sticker[];
  reviews: Sticker[];
}
