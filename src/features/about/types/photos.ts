export interface Card {
  src: string;
  height: number;
  rotation: number;
}

export interface PhotoCardProps {
  card: Card;
  caption: string;
  onError?: (error: Error) => void;
}

export interface PhotoSliderProps {
  cards: Card[];
  onError?: (error: Error) => void;
}

export interface ImageLoadingState {
  isLoading: boolean;
  error: Error | null;
} 