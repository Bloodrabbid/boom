import { type AboutCard } from '../types';

/**
 * Данные для карточек в секции About
 */
export const aboutCards: AboutCard[] = [
  {
    title: {
      bold: 'Безграничные',
      rest: ' возможности'
    },
    content: 'Развивайте свои музыкальные таланты и откройте новые горизонты в мире музыки',
    imageKey: 'possibilities',
    position: 'left'
  },
  {
    title: {
      bold: 'Удобное',
      rest: ' обучение'
    },
    content: 'Занимайтесь в комфортном для вас темпе и в удобное время',
    imageKey: 'learning',
    position: 'right'
  },
  {
    title: {
      bold: 'Музыкальное',
      rest: ' развитие'
    },
    content: 'Погрузитесь в мир музыки и раскройте свой творческий потенциал',
    imageKey: 'music',
    position: 'left'
  }
];
