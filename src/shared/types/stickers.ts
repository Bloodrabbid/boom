import { type CustomValueType, type Easing } from 'framer-motion';

type AnimationValue = string | number | number[] | CustomValueType | (string | number | CustomValueType | undefined)[] | [null, ...(string | number | CustomValueType | undefined)[]];
type RepeatType = 'loop' | 'reverse' | 'mirror';

export interface StickerAnimation {
  animate: {
    x?: AnimationValue;
    y?: AnimationValue;
    rotate?: AnimationValue;
    scale?: AnimationValue;
  };
  transition: {
    duration?: number;
    repeat?: number;
    repeatType?: RepeatType;
    ease?: Easing | Easing[];
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
  breakpoints: any;
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
  aboutImages?: Sticker[];
}

export interface CardImage {
  src: string;
  alt: string;
}

export type AboutImageKey = 'possibilities' | 'learning' | 'music';

export type AboutImages = {
  [K in AboutImageKey]: CardImage;
};
