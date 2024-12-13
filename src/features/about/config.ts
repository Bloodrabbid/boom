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
      position: 'left' as const // Позиция карточки (текст слева, картинка справа)
    },
    {
      title: {
        bold: 'У',
        rest: 'никальное обучение'
      },
      content: 'В "БУМ" мы предлагаем индивидуальный подход к каждому ученику, учитывая его особенности, темп обучения и музыкальные предпочтения.',
      imageKey: 'learning',
      position: 'right' as const // Чередование позиций для визуального разнообразия
    },
    {
      title: {
        bold: 'М',
        rest: 'оре музыки'
      },
      content: 'В "БУМ" вы не только научитесь играть на музыкальных инструментах, но и найдете новых друзей, единомышленников, с которыми будете делиться своей любовью к музыке.',
      imageKey: 'music',
      position: 'left' as const
    }
  ],
  
  // Конфигурация стикеров (декоративных элементов)
  stickers: {
    // Стикеры для основных карточек
    about: [
      {
        imageKey: 'possibilities',
        position: { top: '10%', left: '5%' }, // Позиционирование стикера
        rotation: -15, // Поворот для динамичности
        size: { width: 120, height: 120 } // Размеры стикера
      },
      {
        imageKey: 'learning',
        position: { top: '40%', right: '5%' },
        rotation: 20,
        size: { width: 120, height: 120 }
      },
      {
        imageKey: 'music',
        position: { bottom: '10%', left: '5%' },
        rotation: 15,
        size: { width: 120, height: 120 }
      }
    ],
    // Стикеры для блока "Для кого" (музыкальные ноты)
    aboutGeneral: [
      {
        imageKey: 'note1',
        position: { top: '5%', left: '5%' },
        rotation: -15,
        size: { width: 40, height: 40 }
      },
      {
        imageKey: 'note2',
        position: { top: '10%', right: '10%' },
        rotation: 20,
        size: { width: 40, height: 40 }
      },
      {
        imageKey: 'note3',
        position: { bottom: '15%', left: '15%' },
        rotation: 10,
        size: { width: 40, height: 40 }
      }
    ]
  }
}
