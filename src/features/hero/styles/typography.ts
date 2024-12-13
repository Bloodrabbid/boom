/**
 * Типографика для Hero секции
 */
// Типы для типографики
type Typography = {
  family?: string;
  weight?: string;
  transform?: string;
  lineHeight?: string;
  fontSize?: string;
  color?: string;
};

export const heroTypography = {
  // Стили для заголовка
  title: {
    family: 'font-[DOCKERONE]',
    weight: 'font-normal',
    transform: 'uppercase',
    color: 'text-white'
  },
  
  // Стили для подзаголовка
  subtitle: {
    family: 'font-[DOCKERONE]',
    weight: 'font-normal',
    transform: 'uppercase',
    lineHeight: 'leading-[0.9]',
    color: 'text-white'
  },
  
  // Стили для кнопки
  button: {
    weight: 'font-bold',
    transform: 'uppercase',
    lineHeight: 'leading-[35.22px]',
    fontSize: 'text-[27px]',
    color: 'text-white'
  }
} as const;

/**
 * Генерирует строку классов для типографики
 * @param typography - объект с настройками типографики
 * @returns строка классов Tailwind
 */
export const getTypographyClasses = (typography: Typography) => {
  return Object.values(typography).join(' ');
};
