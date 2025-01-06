// src/shared/types/stickers.ts

import { TargetAndTransition, Transition } from 'framer-motion';

export interface CardImage {
  src: string;
  alt: string;
}

export type AboutImageKey = 'possibilities' | 'learning' | 'music';

export interface StickerAnimation {
  animate: TargetAndTransition;
  transition: Transition;
}

export interface StickerPositionSubType {
  cardIndex: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export interface StickerPosition {
  type: 'absolute';
  inset?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  transform?: string;
  mobile?: StickerPositionSubType;
  desktop?: StickerPositionSubType;
}

export interface StickerSize {
  width: number;
  height: number;
}

export interface StickerBreakpoints {
  md?: StickerSize;
  lg?: StickerSize;
}

export interface Sticker {
  src: string;
  alt: string;
  imageKey?: string;
  size: StickerSize;
  breakpoints?: StickerBreakpoints;
  position: StickerPosition;
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

export interface AdvantagesSectionProps {
  stickers?: Sticker[];
  className?: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
  stickers?: Sticker[];
}