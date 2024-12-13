import { type Sticker } from '@/shared/types/stickers';

export interface QuizSectionProps {
  stickers?: Sticker[];
  className?: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<string, string>;
  isSubmitting: boolean;
}

export interface QuizFormData {
  name: string;
  phone: string;
  email: string;
  answers: Record<string, string>;
}
