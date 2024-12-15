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
      size: 'w-[100px] h-[100px] -mb-[25px]'
    },
    sm: {
      size: 'sm:w-[130px] sm:h-[130px] sm:-mb-[20px]'
    },
    md: {
      size: 'md:w-[150px] md:h-[150px] md:-mb-[0px]'
    },
    lg: {
      size: 'lg:w-[200px] lg:h-[200px] lg:-mb-[0px]'
    }
  },

  // Размеры заголовка "БУМ"
  title: {
    base: {
      size: 'text-[100px]'
    },
    sm: {
      size: 'sm:text-[140px]'
    },
    md: {
      size: 'md:text-[185px]'
    },
    lg: {
      size: 'lg:text-[230px]'
    }
  },

  // Размеры подзаголовка
  subtitle: {
    base: {
      size: 'text-[37px] -mt-[35px]'
    },
    sm: {
      size: 'sm:text-[50px] sm:-mt-[45px]'
    },
    md: {
      size: 'md:text-[63px] md:-mt-[60px]'
    },
    lg: {
      size: 'lg:text-[80px] lg:-mt-[60px]'
    }
  },

  // Размеры кнопки
  button: {
    base: {
      size: 'h-10 px-6 py-3 mt-8'
    },
    sm: {
      size: 'sm:h-14 sm:w-[362px] sm:px-7 sm:py-3 sm:mt-12'
    },
    md: {
      size: 'md:w-[450px] md:h-14 md:px-8 md:py-4 md:mt-0'
    },
    lg: {
      size: 'lg:h-[80px] lg:w-[585px] lg:px-10 lg:py-5 lg:mt-0'
    }
  },
  // Размеры текста кнопки
  buttonText: {
    base: {
      size: 'text-[13px]'
    },
    sm: {
      size: 'sm:text-[16px]'
    },
    md: {
      size: 'md:text-[20px]'
    },
    lg: {
      size: 'lg:text-[27px]'
    }
  },
  // Скругление кнопки
  buttonRound: {
    base: {
      size: 'rounded-[13px]'
    },
    sm: {
      size: 'sm:rounded-[15px]'
    },
    md: {
      size: 'md:rounded-[15px]'
    },
    lg: {
      shape: 'lg:text-[25px]'
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
