import { type AboutImageKey } from '@/shared/types/stickers';

interface AboutCard {
  title: {
    bold: string;
    rest: string;
  };
  content: string;
  imageKey: AboutImageKey;
  position: 'left' | 'right';
}

/**
 * Конфигурация для секции About
 * Содержит настройки карточек и стикеров
 */
export const aboutConfig = {
  // Конфигурация карточек с информацией о БУМ
  cards: [
    {
      title: {
        bold: 'Б', // Выделенная буква
        rest: 'езграничные возможности' // Остальная часть заголовка
      },
      content: 'В "БУМ" вы откроете для себя бесконечные возможности в мире музыки, независимо от вашего уровня подготовки.',
      imageKey: 'possibilities', // Ключ для связи с изображением
      position: 'left' // Позиция карточки (текст слева, картинка справа)
    },
    {
      title: {
        bold: 'У',
        rest: 'никальное обучение'
      },
      content: 'В "БУМ" мы предлагаем индивидуальный подход к каждому ученику, учитывая его особенности, темп обучения и музыкальные предпочтения.',
      imageKey: 'learning',
      position: 'right' // Чередование позиций для визуального разнообразия
    },
    {
      title: {
        bold: 'М',
        rest: 'оре музыки'
      },
      content: 'В "БУМ" вы не только научитесь играть на музыкальных инструментах, но и найдете новых друзей, единомышленников, с которыми будете делиться своей любовью к музыке.',
      imageKey: 'music',
      position: 'left'
    }
  ],
} satisfies {
  cards: AboutCard[];
};