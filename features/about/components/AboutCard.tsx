'use client';

import Image from 'next/image';
import { type AboutCardProps } from '../types';
import StickerRenderer from '@/shared/components/StickerRenderer';
import { cn } from '@/shared/utils/cn';

/**
 * Компонент карточки для секции About
 * Стилизация:
 * - Полароидный эффект с тенью и скругленными углами
 * - Адаптивная типографика
 * - Акцентная первая буква заголовка (оранжевая, увеличенная)
 */
const AboutCard = ({ title, description, imageKey, stickers, className, index }: AboutCardProps) => {
  // Выделяем первую букву для стилизации
  const [firstLetter, ...restTitle] = title;

  return (
    // Основной контейнер карточки
    // - relative: для позиционирования внутренних элементов
    // - w-full: полная ширина контейнера
    <div className={cn('relative w-full', className)}>
      {/* Контейнер изображения с эффектом полароида
          - relative: для позиционирования внутренних элементов
          - aspect-[3/4]: соотношение сторон 3:4
          - w-full: полная ширина
          - overflow-hidden: скрытие выходящего за пределы контента
          - rounded-[30px]: сильное скругление углов
          - bg-white: белый фон
          - p-4: внутренний отступ 1rem (16px)
          - shadow-lg: большая тень */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[30px] bg-white p-4 shadow-lg">
        {/* Рендерер стикеров с изображением
            Стили изображения:
            - objectFit: cover - заполнение контейнера с сохранением пропорций
            - borderRadius: 20px - скругление углов самого изображения */}
        <StickerRenderer
          stickers={stickers}
          imageProps={{
            src: `/cards/${imageKey}.png`,
            alt: title,
            fill: true,
            style: { objectFit: 'cover', borderRadius: '20px' }
          }}
        />
      </div>

      {/* Заголовок с выделенной первой буквой
          - mt-6: отступ сверху 1.5rem (24px)
          - text-2xl md:text-3xl lg:text-4xl: адаптивный размер текста
          - font-bold: жирное начертание */}
      <h3 className="mt-6 text-2xl font-bold md:text-3xl lg:text-4xl">
        {/* Первая буква
            - text-[#FF4B26]: оранжевый цвет
            - fontSize: 150% - увеличение на 50% относительно остального текста */}
        <span className="text-[#FF4B26]" style={{ fontSize: '150%' }}>
          {firstLetter}
        </span>
        {restTitle}
      </h3>

      {/* Описание
          - mt-4: отступ сверху 1rem (16px)
          - text-base md:text-lg lg:text-xl: адаптивный размер текста
          - text-gray-600: серый цвет текста */}
      <p className="mt-4 text-base text-gray-600 md:text-lg lg:text-xl">{description}</p>
    </div>
  );
};

export default AboutCard;
