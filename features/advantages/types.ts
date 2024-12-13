import { type Sticker } from '@/shared/types/stickers';

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
