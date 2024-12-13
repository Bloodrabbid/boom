'use client';

import { type AboutSectionProps } from '../types';
import { aboutCards } from '../data/cards';
import AboutCard from './AboutCard';
import StickerRenderer from '@/shared/components/StickerRenderer';
import { cn } from '@/shared/utils/cn';
import { defaultStickers } from '@/shared/config/stickers';
import Image from 'next/image';

/**
 * Секция About с информацией о школе
 * Стилизация:
 * - Адаптивные отступы: 4rem/6rem/8rem (64px/96px/128px) для разных размеров экрана
 * - Относительное позиционирование для внутренних элементов
 * - Скрытие выходящего за пределы контента
 */
const AboutSection = ({ stickers = defaultStickers.about, className }: AboutSectionProps) => {
  return (
    // Основной контейнер секции
    // - relative: для позиционирования внутренних элементов
    // - overflow-hidden: скрытие выходящего за пределы контента
    // - py-16 md:py-24 lg:py-32: адаптивные отступы сверху и снизу (4rem/6rem/8rem)
    <section className={cn('relative overflow-hidden py-16 md:py-24 lg:py-32', className)}>
      {/* Декоративные музыкальные ноты
          - absolute inset-0: растягивание на всю секцию
          - overflow-hidden: скрытие выходящего за пределы
          - pointer-events-none: игнорирование событий мыши
          - z-10: размещение над фоном */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Все ноты имеют следующие характеристики:
            - absolute: абсолютное позиционирование
            - top/bottom/left/right: позиционирование относительно родителя
            - rotate-[Xdeg]: поворот на X градусов
            - brightness-0 invert: инверсия цвета для белого цвета нот */}
        
        {/* Верхние ноты - размещены в верхней части секции */}
        <Image
          src="/icons/note1.svg"
          alt="Musical note"
          width={53}
          height={53}
          className="absolute top-[5%] left-[15%] rotate-[-15deg] brightness-0 invert"
        />
        <Image
          src="/icons/note2.svg"
          alt="Musical note"
          width={40}
          height={40}
          className="absolute top-[8%] right-[20%] rotate-[25deg] brightness-0 invert"
        />
        <Image
          src="/icons/note3.svg"
          alt="Musical note"
          width={45}
          height={45}
          className="absolute top-[12%] left-[40%] rotate-[10deg] brightness-0 invert"
        />

        {/* Левые ноты - размещены по левому краю */}
        <Image
          src="/icons/note2.svg"
          alt="Musical note"
          width={47}
          height={47}
          className="absolute top-[50%] left-[3%] rotate-[-20deg] brightness-0 invert"
        />
        <Image
          src="/icons/note1.svg"
          alt="Musical note"
          width={43}
          height={43}
          className="absolute top-[70%] left-[5%] rotate-[15deg] brightness-0 invert"
        />

        {/* Правые ноты - размещены по правому краю */}
        <Image
          src="/icons/note3.svg"
          alt="Musical note"
          width={50}
          height={50}
          className="absolute top-[45%] right-[4%] rotate-[-10deg] brightness-0 invert"
        />
        <Image
          src="/icons/note2.svg"
          alt="Musical note"
          width={45}
          height={45}
          className="absolute top-[65%] right-[6%] rotate-[20deg] brightness-0 invert"
        />

        {/* Нижние ноты - размещены в нижней части */}
        <Image
          src="/icons/note1.svg"
          alt="Musical note"
          width={43}
          height={43}
          className="absolute bottom-[5%] left-[90%] rotate-[-25deg] brightness-0 invert"
        />
        <Image
          src="/icons/note3.svg"
          alt="Musical note"
          width={47}
          height={47}
          className="absolute bottom-[30%] right-[48%] rotate-[15deg] brightness-0 invert"
        />
        <Image
          src="/icons/note2.svg"
          alt="Musical note"
          width={40}
          height={40}
          className="absolute bottom-[2%] right-[47%] rotate-[-15deg] brightness-0 invert"
        />
      </div>

      {/* Фоновые стикеры
          - absolute inset-0: растягивание на всю секцию
          - hidden md:block: скрыты на мобильных, показаны от md брейкпоинта */}
      {defaultStickers.aboutGeneral && (
        <div className="absolute inset-0 w-full h-full hidden md:block">
          <StickerRenderer
            stickers={defaultStickers.aboutGeneral}
            containerClassName="w-full h-full"
          />
        </div>
      )}

      {/* Основной контент
          - container mx-auto: центрирование и ограничение ширины
          - px-4 md:px-6 lg:px-8: адаптивные горизонтальные отступы */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Сетка карточек
            - grid: создание сетки
            - grid-cols-1 md:grid-cols-2 lg:grid-cols-3: адаптивное количество колонок (1/2/3)
            - gap-8 lg:gap-12: адаптивные отступы между карточками (2rem/3rem) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {aboutCards.map((card, index) => (
            <AboutCard
              key={card.imageKey}
              {...card}
              stickers={stickers.filter(s => s.imageKey === card.imageKey)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
