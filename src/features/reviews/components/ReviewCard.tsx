'use client';

import { cn } from '@/shared/utils/cn';
import { type ReviewCardProps } from '../types';
import StarRating from '@/shared/components/StarRating';
import Image from 'next/image';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import StickerRenderer from '@/shared/components/StickerRenderer';
import { motion } from 'framer-motion';

/**
 * Карточка с отзывом ученика
 * Стилизация:
 * - Белая карточка с тенью и скругленными углами
 * - Анимация увеличения при наведении
 * - Декоративные стикеры на фоне
 * - Адаптивная верстка с flexbox
 * - Цветовая схема: белый фон, серые оттенки для текста
 */
const ReviewCard = ({
  author,
  rating,
  text,
  date,
  stickers,
  className
}: ReviewCardProps) => {
  return (
    // Контейнер карточки с анимацией
    // - whileHover: увеличение на 2% при наведении
    // Базовые стили:
    // - relative: для позиционирования стикеров
    // - p-6: внутренние отступы 1.5rem (24px)
    // - bg-white: белый фон
    // - rounded-2xl: большое скругление углов
    // - shadow-lg: большая тень
    // - hover:shadow-xl: увеличение тени при наведении
    // - transition-shadow: плавная анимация тени
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        'relative p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow',
        className
      )}
    >
      {/* Контейнер для декоративных стикеров
          - absolute inset-0: растягивание на всю карточку
          - w-full h-full: полное заполнение пространства */}
      {stickers && stickers.length > 0 && (
        <div className="absolute inset-0 w-full h-full">
          <StickerRenderer
            stickers={stickers}
            containerClassName="w-full h-full"
          />
        </div>
      )}

      {/* Основной контент
          - relative z-10: поверх стикеров */}
      <div className="relative z-10">
        {/* Шапка карточки с автором и рейтингом
            - flex items-start: выравнивание элементов по верху
            - justify-between: разнесение элементов по краям
            - gap-4: отступ между элементами 1rem (16px) */}
        <div className="flex items-start justify-between gap-4">
          {/* Информация об авторе
              - flex items-center: центрирование по вертикали
              - gap-4: отступ между элементами 1rem (16px) */}
          <div className="flex items-center gap-4">
            {/* Аватар автора
                - relative: для работы Image fill
                - w-12 h-12: размер 3rem x 3rem (48px x 48px)
                - rounded-full: круглая форма
                - object-cover: заполнение с сохранением пропорций */}
            <div className="relative w-12 h-12">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            {/* Имя и роль автора */}
            <div>
              {/* Имя
                  - font-medium: полужирный шрифт
                  - text-gray-900: темно-серый цвет */}
              <h3 className="font-medium text-gray-900">{author.name}</h3>
              {/* Роль
                  - text-sm: уменьшенный размер текста
                  - text-gray-500: серый цвет */}
              <p className="text-sm text-gray-500">{author.role}</p>
            </div>
          </div>
          {/* Компонент рейтинга (звезды) */}
          <StarRating rating={rating} />
        </div>

        {/* Текст отзыва
            - mt-4: верхний отступ 1rem (16px)
            - text-gray-600: серый цвет текста */}
        <p className="mt-4 text-gray-600">{text}</p>

        {/* Дата отзыва
            - mt-4: верхний отступ 1rem (16px)
            - text-sm: уменьшенный размер текста
            - text-gray-400: светло-серый цвет */}
        <p className="mt-4 text-sm text-gray-400">
          {format(new Date(date), 'd MMMM yyyy', { locale: ru })}
        </p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
