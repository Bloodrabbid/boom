'use client';

import Link from 'next/link';

/**
 * Подвал сайта с навигацией и контактной информацией
 * Стилизация:
 * - Адаптивная верстка с переходом от мобильной к десктопной
 * - Белый текст на темном фоне
 * - Шрифт Raleway для всего текста
 * - Плавные анимации при наведении
 * - Отзывчивая сетка с flexbox
 */
const Footer = () => {
  return (
    // Основной контейнер футера
    // - w-full: полная ширина
    // - bg-[#FFFFF]: белый фон
    // - py-8: вертикальные отступы 2rem (32px)
    <footer className="w-full bg-[#FFFFF] py-8">
      {/* Контейнер с максимальной шириной и отступами
          - container: максимальная ширина из темы
          - mx-auto: центрирование по горизонтали
          - px-4: горизонтальные отступы 1rem (16px) */}
      <div className="container mx-auto px-4">
        {/* Флекс-контейнер для навигации и контактов
            Мобильный:
            - flex-col: вертикальное расположение
            - items-start: выравнивание по левому краю
            Десктоп (md):
            - flex-row: горизонтальное расположение
            - items-center: центрирование по вертикали
            - justify-between: распределение пространства */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Навигационное меню
              Мобильный:
              - flex-col: вертикальное расположение
              - gap-4: отступы 1rem между пунктами
              - mb-6: нижний отступ 1.5rem
              Десктоп (md):
              - flex-row: горизонтальное расположение
              - gap-8: отступы 2rem между пунктами
              - mb-0: убираем нижний отступ */}
          <nav className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-0">
            {/* Ссылки навигации
                - text-white: белый цвет текста
                - hover:text-white/80: затемнение при наведении
                - transition-colors: плавная анимация цвета
                - font-raleway: шрифт Raleway
                - font-medium: средняя жирность
                - text-lg md:text-2xl: адаптивный размер
                  (18px на мобильных, 24px на десктопе) */}
            <Link 
              href="#about" 
              className="text-white hover:text-white/80 transition-colors font-raleway font-medium text-lg md:text-2xl"
            >
              О школе
            </Link>
            <Link 
              href="#results" 
              className="text-white hover:text-white/80 transition-colors font-raleway font-medium text-lg md:text-2xl"
            >
              Результаты
            </Link>
            <Link 
              href="#reviews" 
              className="text-white hover:text-white/80 transition-colors font-raleway font-medium text-lg md:text-2xl"
            >
              Отзывы
            </Link>
            <Link 
              href="#contacts" 
              className="text-white hover:text-white/80 transition-colors font-raleway font-medium text-lg md:text-2xl"
            >
              Контакты
            </Link>
          </nav>

          {/* Контактная информация
              - flex-col: вертикальное расположение
              - gap-2: отступ 0.5rem (8px) между строками
              Текст:
              - text-white: белый цвет
              - font-raleway: шрифт Raleway
              - font-medium: средняя жирность
              - text-lg md:text-2xl: адаптивный размер */}
          <div className="flex flex-col gap-2">
            <p className="text-white font-raleway font-medium text-lg md:text-2xl">
              Хабаровск, ул. Заозёрная, 36 ст1
            </p>
            <p className="text-white font-raleway font-medium text-lg md:text-2xl">
              Ежедневно с 10:00-22:00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
