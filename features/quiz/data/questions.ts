import { type QuizQuestion } from '../types';

/**
 * Вопросы для квиза
 */
export const quizQuestions: QuizQuestion[] = [
  {
    id: 'experience',
    text: 'Есть ли у вас опыт игры на музыкальных инструментах?',
    options: [
      { id: 'none', text: 'Нет, я новичок' },
      { id: 'basic', text: 'Немного играл(а)' },
      { id: 'intermediate', text: 'Есть базовые навыки' },
      { id: 'advanced', text: 'Уверенно играю' }
    ]
  },
  {
    id: 'instrument',
    text: 'Какой инструмент вас интересует больше всего?',
    options: [
      { id: 'piano', text: 'Фортепиано' },
      { id: 'guitar', text: 'Гитара' },
      { id: 'drums', text: 'Ударные' },
      { id: 'vocal', text: 'Вокал' }
    ]
  },
  {
    id: 'goal',
    text: 'Какая ваша главная цель в обучении?',
    options: [
      { id: 'hobby', text: 'Хобби для души' },
      { id: 'professional', text: 'Профессиональное развитие' },
      { id: 'performance', text: 'Выступления' },
      { id: 'composition', text: 'Создание музыки' }
    ]
  }
];
