'use client';

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
const AboutCard = ({ title: { bold, rest }, content, imageKey, stickers = [], className, index }: AboutCardProps) => {
    // Выделяем первую букву для стилизации
    const firstLetter = bold.charAt(0);
    const restTitle = bold.slice(1) + rest;

    return (
        <div className={cn('relative w-full', className)}>
            {/* Контейнер изображения с эффектом полароида */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[30px] bg-white p-4 shadow-lg">
                {/* Рендеринг стикеров и изображения */}
                <StickerRenderer
                    stickers={stickers}
                    imageProps={{
                        src: `/cards/${imageKey}.webp`, // Заменим на WebP
                        alt: bold,
                        fill: true,
                        style: { objectFit: 'cover', borderRadius: '20px' }
                    }}
                />
            </div>

            {/* Заголовок с выделенной первой буквой */}
            <h3 className="mt-6 text-2xl font-bold md:text-3xl lg:text-4xl">
                <span className="text-[#FF4B26]" style={{ fontSize: '150%' }}>
                    {firstLetter}
                </span>
                {restTitle}
            </h3>

            {/* Описание */}
            <p className="mt-4 text-base text-gray-600 md:text-lg lg:text-xl">{content}</p>
        </div>
    );
};

export default AboutCard;
