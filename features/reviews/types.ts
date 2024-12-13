import { type Sticker } from '@/shared/types/stickers';

export interface ReviewsSectionProps {
  stickers?: Sticker[];
  className?: string;
}

export interface Review {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  rating: number;
  text: string;
  date: string;
  stickers?: Sticker[];
}

export interface ReviewCardProps extends Review {
  className?: string;
}
