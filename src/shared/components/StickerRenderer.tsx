'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { memo, useEffect, useState, useMemo } from 'react';
import { type Sticker } from '@/shared/types/stickers';

interface StickerRendererProps {
    stickers?: Sticker[];
    containerClassName?: string;
    imageProps?: {
        src: string;
        alt: string;
        fill?: boolean;
        style?: React.CSSProperties;
    };
    cardIndex?: number;
}

const StickerRenderer = memo(({
                                  stickers = [],
                                  containerClassName = '',
                                  imageProps,
                                  cardIndex
                              }: StickerRendererProps) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    // Мемоизация вычисленных позиций стикеров для мобильных и десктопных версий
    const stickerPositions = useMemo(() => {
        return stickers?.map(sticker => ({
            ...sticker,
            computedPosition: isMobile ? sticker.position.mobile : sticker.position.desktop
        })) || [];
    }, [stickers, isMobile]);

    return (
        <div className={`relative ${containerClassName}`}>
            {/* Основное изображение карточки, если есть */}
            {imageProps && (
                <Image
                    {...imageProps}
                    className={`${imageProps.style?.borderRadius ? 'rounded-[30px]' : ''} ${imageProps.style?.objectFit || 'object-contain'}`}
                    loading="lazy" // Lazy loading теперь здесь
                />
            )}

            {/* Стикеры */}
            {stickerPositions?.map((sticker, index) => {
                // Проверка на отображение стикера для текущей карточки, если задан cardIndex
                if (cardIndex !== undefined) {
                    const targetPosition = sticker.computedPosition;
                    if (targetPosition?.cardIndex !== cardIndex) {
                        return null;
                    }
                }

                // Динамическое вычисление размеров стикера на основе брейкпоинтов
                const width = isMobile
                    ? sticker.size.width
                    : (sticker.breakpoints?.md?.width || sticker.size.width);

                const height = isMobile
                    ? sticker.size.height
                    : (sticker.breakpoints?.md?.height || sticker.size.height);

                return (
                    <motion.div
                        key={`${sticker.src}-${index}`}
                        className="absolute"
                        style={{
                            inset: sticker.position.inset,
                            top: sticker.computedPosition?.top || sticker.position.top,
                            right: sticker.computedPosition?.right || sticker.position.right,
                            bottom: sticker.computedPosition?.bottom || sticker.position.bottom,
                            left: sticker.computedPosition?.left || sticker.position.left,
                            transform: sticker.position.transform || 'none',
                            zIndex: sticker.zIndex || 1
                        }}
                        animate={sticker.animation.animate}
                        transition={sticker.animation.transition}
                    >
                        <div
                            className="relative"
                            style={{
                                // Исходный (мобильный) размер
                                width: `${sticker.size.width}rem`,
                                height: `${sticker.size.height}rem`,
                            }}
                        >
                            <style jsx>{`
                                @media (min-width: 768px) {
                                    div {
                                        width: ${sticker.breakpoints?.md?.width || sticker.size.width}rem !important;
                                        height: ${sticker.breakpoints?.md?.height || sticker.size.height}rem !important;
                                    }
                                }

                                @media (min-width: 1024px) {
                                    div {
                                        width: ${sticker.breakpoints?.lg?.width || sticker.breakpoints?.md?.width || sticker.size.width}rem !important;
                                        height: ${sticker.breakpoints?.lg?.height || sticker.breakpoints?.md?.height || sticker.size.height}rem !important;
                                    }
                                }
                            `}</style>
                            <Image
                                src={sticker.src}
                                alt={sticker.alt}
                                fill
                                className="object-contain select-none pointer-events-none"
                                loading="lazy" // Lazy loading для стикеров
                            />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
});

StickerRenderer.displayName = 'StickerRenderer';

export default StickerRenderer;