/**
 * Конфигурация размеров для различных элементов секции About
 * Каждый объект содержит размеры для разных брейкпоинтов (base, md, lg)
 */
export const aboutSizes = {
  // Размеры для главного заголовка секции "Что такое БУМ?"
  sectionTitle: {
    base: {
      size: 'text-[48px]'
    },
    md: {
      size: 'md:text-[56px]'
    },
    lg: {
      size: 'lg:text-[64px]'
    }
  },

  // Размеры для заголовков карточек (Б, У, М)
  cardTitle: {
    base: {
      size: 'text-2xl'
    },
    lg: {
      size: 'lg:text-[48px]' // Увеличенный размер для заголовков
    },
    highlight: {
      size: 'lg:text-[48px]' // Тот же размер для выделенной буквы
    }
  },

  // Размеры для текста внутри карточек
  cardContent: {
    base: {
      size: 'text-lg'
    },
    lg: {
      size: 'lg:text-[24px]' // Увеличенный размер текста
    }
  },

  // Минимальная высота карточек
  card: {
    base: {
      minHeight: 'min-h-[250px]'
    },
    md: {
      minHeight: 'md:min-h-[315px]'
    },
    lg: {
      minHeight: 'lg:min-h-[400px]' // Увеличенная высота карточек
    }
  },

  // Размеры текста для блока "Для кого"
  forWhom: {
    base: {
      size: 'text-xl'
    },
    md: {
      size: 'md:text-2xl'
    },
    lg: {
      size: 'lg:text-[32px]' // Увеличенный размер текста
    }
  }
}
