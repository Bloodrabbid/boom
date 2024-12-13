import { type Sticker, type AboutImages, type AboutImageKey } from '@/shared/types/stickers';

export interface AboutSectionProps {
  stickers?: Sticker[];
  className?: string;
}

export interface AboutCard {
  title: {
    bold: string;
    rest: string;
  };
  content: string;
  position: 'left' | 'right';
  imageKey: AboutImageKey;
}

export interface AboutCardProps extends AboutCard {
  className?: string;
  index: number;
  stickers?: Sticker[];
}

export interface AboutConfig {
  cards: AboutCard[];
}
