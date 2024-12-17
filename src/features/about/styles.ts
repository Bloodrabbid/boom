import { aboutSizes } from './styles/sizes'

type SizeValue = { size: string } | { minHeight: string };
type Size = SizeValue | { [key: string]: SizeValue };

/**
 * Утилита для объединения классов размеров из конфигурации
 */
const getSizeClasses = (sizes: Size) => {
  if ('size' in sizes || 'minHeight' in sizes) {
    return 'size' in sizes ? sizes.size : sizes.minHeight;
  }
  return Object.values(sizes).map(v => 'size' in v ? v.size : v.minHeight).join(' ');
}

/**
 * Стили для секции About
 * Использует Tailwind классы и конфигурацию размеров из aboutSizes
 */
export const aboutStyles = {
  // Основной контейнер секции
  section: [
    'bg-[#FF4B26]', // Красный фон
    'relative',     // Для позиционирования декоративных элементов
    'overflow-hidden' // Скрываем выходящие за границы элементы
  ].join(' '),

  // Контейнер для заголовка "Что такое БУМ?"
  titleContainer: [
    'w-full',    // На всю ширину
    'bg-black',  // Черный фон
    'py-16'      // Отступы сверху и снизу
  ].join(' '),

  // Стили заголовка
  title: [
    getSizeClasses(aboutSizes.sectionTitle), // Размеры из конфигурации
    'text-center',  // Центрирование
    'font-bold',    // Жирный шрифт
    'text-white',   // Белый цвет
    'tracking-wide', // Увеличенный межбуквенный интервал
  ].join(' '),

  // Контейнер основного контента
  content: [
    'relative',
    'pt-32', // Отступ сверху для карточек
    'pb-16'  // Отступ снизу
  ].join(' '),

  // Контейнер для карточек
  cardsContainer: [
    'container',  // Ограничение ширины
    'mx-auto',    // Центрирование по горизонтали
    'px-4',       // Отступы по бокам
    'md:px-6',    // Увеличенные отступы на планшетах
    'lg:px-16',   // Увеличенные отступы по бокам
    'max-w-[1920px]' // Максимальная ширина контейнера
  ].join(' '),

  // Сетка карточек
  cardsGrid: [
    'space-y-12',      // Отступы между карточками
    'md:space-y-16',   // Увеличенные отступы на планшетах
    'lg:space-y-32'    // Увеличенные отступы между карточками
  ].join(' '),

  // Стили для карточек
  card: {
    // Контейнер карточки
    container: [
      'relative',
      'w-full'
    ].join(' '),

    // Обертка для контента карточки
    wrapper: [
      'flex',
      'flex-col',          // Колонка на мобильных
      'lg:flex-row',       // Строка на десктопах
      'items-center',      // Центрирование по вертикали
      'justify-between',   // Распределение пространства
      'gap-12',            // Отступы между элементами
      'lg:gap-24'         // Увеличенный отступ между текстом и изображением
    ].join(' '),

    // Контейнер для текстовой части
    textContainer: 'w-full lg:w-[60%]', // Увеличенная ширина текстового блока на десктопе

    // Стили для контента карточки
    content: [
      'bg-[#1A1A1A]',     // Темный фон
      'rounded-[40px]',   // Увеличенное скругление углов
      'p-6 md:p-8 lg:p-16', // Увеличенные внутренние отступы
      'text-white',       // Белый текст
      'transform',        // Для анимации
      'hover:scale-105',  // Увеличение при наведении
      'transition-transform', // Плавная анимация
      'duration-300',     // Длительность анимации
      'w-full',          // Полная ширина
      'max-w-[690px]',   // Максимальная ширина контента
      'mx-auto',         // Центрирование по горизонтали
      'h-auto',          // Автоматическая высота
      getSizeClasses(aboutSizes.card) // Минимальная высота из конфигурации
    ].join(' '),

    // Стили для заголовка карточки
    title: [
      getSizeClasses(aboutSizes.cardTitle), // Размеры из конфигурации
      'text-center',
      'mb-8' // Увеличенный отступ после заголовка
    ].join(' '),

    // Стили для выделенной части заголовка (Б, У, М)
    titleHighlight: [
      'font-bold',
      'text-[#FF4B26]', // Красный цвет
      getSizeClasses(aboutSizes.cardTitle.highlight)
    ].join(' '),

    // Стили для текста карточки
    text: [
      getSizeClasses(aboutSizes.cardContent),
      'leading-relaxed' // Увеличенная высота строки
    ].join(' '),

    // Контейнер для изображения
    imageContainer: [
      'w-full',
      'lg:w-[40%]', // Увеличенная ширина контейнера изображения
      'md:min-w-[400px]', // Максимальная ширина изображения
    ].join(' '),

    // Обертка для изображения
    imageWrapper: [
      'relative',
      'w-full',
      'aspect-square',        // Квадратное соотношение на мобильных
      'md:aspect-video',      // 16:9 на планшетах
      'lg:aspect-[4/3]'       // Изменённые пропорции для десктоп��
    ].join(' ')
  },

  // Стили для блока "Для кого"
  forWhom: {
    // Контейнер блока
    container: [
      'relative',
      'lg:mt-[190px] md:mt-[150px] mt-[150px]',
      'lg:mb-20 md:mb-16 mb-8'
    ].join(' '),

    // Позиционирование изображения заголовка
    titleImage: [
      'absolute',
      'left-1/2',
      'transform',
      '-translate-x-1/2',
      'z-40',
      'w-[320px]', // Базовый размер для мобильных
      'md:w-[590px]', // Размер для планшетов
      'lg:w-[750px]', // Размер для десктопа
      'lg:top-[-105px] md:top-[-90px] top-[-55px]'
    ].join(' '),

    // Контейнер для контента
    content: [
      'bg-white',         // Белый фон
      'rounded-[30px]',   // Скругленные углы
      'shadow-lg',        // Тень
      'p-8 md:p-12',     // Отступы
      'mx-auto',         // Центрирование
      'lg:max-w-[994px] max-w-[800px]',   // Максимальная ширина
      'relative'         // Для стикеров
    ].join(' '),

    // Контейнер для текста
    text: [
      'text-left',
      'space-y-6'
    ].join(' '),

    // Стили для параграфов
    paragraph: [
      getSizeClasses(aboutSizes.forWhom),
      'leading-relaxed',    // Увеличенная высота строки
      'text-gray-800'      // Цвет текста
    ].join(' ')
  },

  // Стили для секции с фотографиями
  photos: [
    'mt-16', // Отступ сверху
    'mb-16'  // Отступ снизу
  ].join(' ')
}