import { heroSizes, getSizeClasses } from './styles/sizes';
import { heroTypography, getTypographyClasses } from './styles/typography';

// Стили для Hero секции
export const heroStyles = {
  // Основной контейнер секции
  container: [
    'relative', // Позиционирование относительно
    'min-h-[60vh]', // Минимальная высота секции для мобильных
    'sm:min-h-[70vh]', // Минимальная высота секции для sm
    'md:min-h-[80vh]', // Минимальная высота секции для md
    'w-full', // Полная ширина
    'flex items-center justify-center', // Центрирование содержимого
    'text-white', // Цвет текста
    'pb-4', // Отступ снизу для мобильных
    'sm:pb-6', // Отступ снизу для sm
    'md:pb-8', // Отступ снизу для md
    'mt-[100px]', // Отступ сверху для мобильных
    'sm:mt-[150px]', // Отступ сверху для sm
    'md:mt-[200px]' // Отступ сверху для md
  ].join(' '),
  
  // Контейнер для контента
  content: {
    // Обертка контента
    wrapper: [
      'text-center', // Центрирование текста
      'relative', // Позиционирование относительно
      'z-10', // Z-index для наложения
      'px-4' // Отступы по бокам
    ].join(' '),

    // Анимированный контейнер
    animated: {
      // Обертка анимированного контента
      wrapper: [
        'flex flex-col', // Вертикальное расположение
        'items-center', // Центрирование по горизонтали
        'justify-center', // Центрирование по вертикали
        'gap-16' // Расстояние между элементами
      ].join(' '),
      // Начальное состояние анимации
      initial: { opacity: 0, y: 20 },
      // Конечное состояние анимации
      animate: { opacity: 1, y: 0 },
      // Параметры анимации
      transition: { duration: 0.6 }
    }
  },
  
  // Блок с логотипом и названием "БУМ"
  logoBlock: {
    // Обертка для логотипа и заголовка
    wrapper: [
      'flex', // Флекс контейнер
      'items-end', // Выравнивание элементов по нижнему краю
      'justify-center', // Центрирование по горизонтали
      'gap-4', // Расстояние между логотипом и заголовком
      'leading-none' // Высота строки
    ].join(' '),

    // Контейнер для логотипа
    logo: getSizeClasses(heroSizes.logo), // Размеры логотипа для разных брейкпоинтов

    // Заголовок "БУМ"
    title: [
      getSizeClasses(heroSizes.title), // Размеры заголовка для разных брейкпоинтов
      getTypographyClasses(heroTypography.title), // Типографика заголовка
      '-mb-10' // Отрицательный отступ снизу для поднятия текста
    ].join(' ')
  },
  
  // Блок с текстом "школа-студия музыки"
  subtitleBlock: [
    getSizeClasses(heroSizes.subtitle), // Размеры подзаголовка для разных брейкпоинтов
    getTypographyClasses(heroTypography.subtitle) // Типографика подзаголовка
  ].join(' '),
  
  // Стили для фона
  background: {
    // Обертка фона
    wrapper: [
      'absolute', // Абсолютное позиционирование
      'inset-0' // Растягивание на всю секцию
    ].join(' '),

    // Фоновое изображение
    image: [
      'absolute', // Абсолютное позиционирование
      'inset-0', // Растягивание на всю секцию
      'bg-center', // Центрирование фона
      'bg-cover', // Масштабирование фона
      'w-full', // Полная ширина
      'h-full' // Полная высота
    ].join(' '),

    // Затемнение фона
    overlay: [
      'absolute', // Абсолютное позиционирование
      'inset-0', // Растягивание на всю секцию
      'bg-black', // Черный цвет
      'bg-opacity-50' // Прозрачность
    ].join(' '),

    // Дополнительные свойства для фона
    imageProps: {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  },

  // Стили для кнопки и её анимации
  button: {
    // Обертка кнопки
    wrapper: [
      'mt-2', // Отступ сверху (базовый)
      'sm:mt-3', // Отступ сверху (sm)
      'md:mt-20' // Отступ сверху (md)
    ].join(' '),

    // Анимация кнопки
    animated: {
      initial: { opacity: 0, y: 20 }, // Начальное состояние
      animate: { opacity: 1, y: 0 }, // Конечное состояние
      transition: { duration: 0.6, delay: 0.2 } // Параметры анимации
    },

    // Стили для ссылки-кнопки
    link: {
      // Базовые стили интерактивности
      base: [
        'inline-flex', // Строчный флекс
        'items-center', // Центрирование по вертикали
        'justify-center', // Центрирование по горизонтали
        'transition-colors', // Анимация цветов
        getSizeClasses(heroSizes.buttonText), // Добавляем адаптивные размеры текста
        getSizeClasses(heroSizes.buttonRound) // Адаптивное скругление
      ].join(' '),
      
      // Стили для фокуса и состояний
      states: [
        'focus:outline-none', // Убираем стандартный outline
        'focus:ring-2', // Кольцо при фокусе
        'focus:ring-slate-400', // Цвет кольца
        'focus:ring-offset-2', // Отступ кольца
        'disabled:opacity-50', // Прозрачность при disabled
        'disabled:pointer-events-none' // Отключение событий при disabled
      ].join(' '),
      
      // Цвета и их состояния
      colors: [
        'bg-[#FF4B26]', // Основной цвет фона
        'hover:bg-[#FF3300]', // Цвет при наведении
        'active:bg-[#CC3517]', // Цвет при нажатии
        'text-white' // Цвет текста
      ].join(' '),
      
      // Размеры кнопки
      size: getSizeClasses(heroSizes.button), // Размеры для разных брейкпоинтов
      
    
      
      // Типографика кнопки
      text: getTypographyClasses(heroTypography.button) // Стили текста
    }
  }
};
