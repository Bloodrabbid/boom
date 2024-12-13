import { type Sticker } from '@/shared/types/stickers';

export interface HeroSectionProps {
  stickers?: Sticker[];
  className?: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}
