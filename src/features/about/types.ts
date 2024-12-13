import { type Sticker } from '@/shared/types/stickers';

export interface AboutSectionProps {
  stickers?: Sticker[];
  className?: string;
}

export interface AboutCard {
  title: string;
  description: string;
  imageKey: string;
  stickers?: Sticker[];
}

export interface AboutCardProps extends AboutCard {
  className?: string;
  index: number;
}
