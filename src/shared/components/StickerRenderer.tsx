'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { memo, useEffect, useState } from 'react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
      <div className={`relative ${containerClassName}`}>
        {/* Изображение карточки, если есть */}
        {imageProps && (
            <Image
                {...imageProps}
                className={`${imageProps.style?.borderRadius ? 'rounded-[30px]' : ''} ${
                    imageProps.style?.objectFit || 'object-contain'
                }`}
            />
        )}

        {/* Стикеры */}
        {stickers?.map((sticker, index) => {
          // Проверяем, нужно ли отображать стикер для текущей карточки
          if (cardIndex !== undefined) {
            const targetPosition = isMobile ? sticker.position.mobile : sticker.position.desktop;
            if (targetPosition && targetPosition.cardIndex !== cardIndex) {
              return null;
            }
          }

          // Определяем позиционирование в зависимости от размера экрана
          const position = {
            ...(sticker.position.inset ? { inset: sticker.position.inset } : {}),
            ...(isMobile && sticker.position.mobile ? {
              top: sticker.position.mobile.top,
              right: sticker.position.mobile.right,
              bottom: sticker.position.mobile.bottom,
              left: sticker.position.mobile.left,
            } : {
              top: sticker.position.top,
              right: sticker.position.right,
              bottom: sticker.position.bottom,
              left: sticker.position.left,
            }),
            transform: sticker.position.transform || 'none',
            zIndex: sticker.zIndex || 1
          };

          return (
              <motion.div
                  key={`${sticker.src}-${index}`}
                  className="absolute"
                  style={position}
                  animate={sticker.animation.animate}
                  transition={sticker.animation.transition}
              >
                <div
                    className="relative"
                    style={{
                      width: `${sticker.size.width}rem`,
                      height: `${sticker.size.height}rem`
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