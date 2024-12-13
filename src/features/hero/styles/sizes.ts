/**
 * Размеры для адаптивного дизайна Hero секции
 */
// Типы для размеров
type Size = {
  [key: string]: string;
};

type Breakpoint = {
  [key: string]: Size;
};

type Sizes = {
  [key: string]: Breakpoint;
};

// Порядок брейкпоинтов важен!
const breakpoints = ['base', 'sm', 'md', 'lg'] as const;
type BreakpointKey = typeof breakpoints[number];

// Размеры компонентов
export const heroSizes: Sizes = {
  // Размеры логотипа
  logo: {
    base: {
      size: 'w-[40px] h-[40px]'
    },
    sm: {
      size: 'sm:w-[80px] sm:h-[80px]'
    },
    md: {
      size: 'md:w-[120px] md:h-[120px]'
    },
    lg: {
      size: 'lg:w-[200px] lg:h-[200px]'
    }
  },

  // Размеры заголовка "БУМ"
  title: {
    base: {
      size: 'text-[20px]'
    },
    sm: {
      size: 'sm:text-[160px]'
    },
    md: {
      size: 'md:text-[120px]'
    },
    lg: {
      size: 'lg:text-[230px]'
    }
  },

  // Размеры подзаголовка
  subtitle: {
    base: {
      size: 'text-[20px] -mt-[40px]'
    },
    sm: {
      size: 'sm:text-[80px] sm:-mt-[50px]'
    },
    md: {
      size: 'md:text-[80px] md:-mt-[60px]'
    }
  },

  // Размеры кнопки
  button: {
    base: {
      size: 'h-12 px-6 py-3'
    },
    sm: {
      size: 'sm:h-14 sm:px-7 sm:py-3'
    },
    md: {
      size: 'md:h-16 md:px-8 md:py-4'
    },
    lg: {
      size: 'lg:h-[80px] lg:w-[580px] lg:px-10 lg:py-5'
    }
  }
};

/**
 * Генерирует строку классов для адаптивных размеров
 * @param sizes - объект с размерами для разных брейкпоинтов
 * @returns строка классов Tailwind
 */
export function getSizeClasses(sizes: Breakpoint): string {
  // Собираем классы в порядке брейкпоинтов
  return breakpoints
    .filter(breakpoint => sizes[breakpoint]) // Пропускаем отсутствующие брейкпоинты
    .map(breakpoint => sizes[breakpoint].size)
    .join(' ');
}
