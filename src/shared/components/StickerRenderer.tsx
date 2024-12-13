'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { memo } from 'react';
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
}

/**
 * Компонент для рендеринга стикеров с анимацией
 * @param stickers - массив стикеров для отображения
 * @param containerClassName - дополнительные классы для контейнера
 * @param imageProps - свойства для основного изображения (если есть)
 */
const StickerRenderer = memo(({ stickers = [], containerClassName = '', imageProps }: StickerRendererProps) => {
  return (
    <div className={`relative ${containerClassName}`}>
      {imageProps && (
        <Image
          {...imageProps}
          className={`${imageProps.style?.borderRadius ? 'rounded-[30px]' : ''} ${
            imageProps.style?.objectFit || 'object-contain'
          }`}
        />
      )}
      {stickers?.map((sticker, index) => (
        <motion.div
          key={`${sticker.src}-${index}`}
          className="absolute"
          style={{
            width: `${sticker.size.width}rem`,
            height: `${sticker.size.height}rem`,
            zIndex: sticker.zIndex || 1,
            ...(sticker.position.inset ? { inset: sticker.position.inset } : {}),
            ...(sticker.position.top ? { top: sticker.position.top } : {}),
            ...(sticker.position.right ? { right: sticker.position.right } : {}),
            ...(sticker.position.bottom ? { bottom: sticker.position.bottom } : {}),
            ...(sticker.position.left ? { left: sticker.position.left } : {}),
            transform: sticker.position.transform || 'none'
          }}
          initial={{ 
            scale: 1, 
            rotate: 0
          }}
          animate={{
            ...sticker.animation.animate,
          }}
          transition={{
            ...sticker.animation.transition,
          }}
        >
          <div className="w-full h-full relative transform-gpu">
            <Image
              src={sticker.src}
              alt={sticker.alt}
              fill
              className="object-contain select-none pointer-events-none"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
});

StickerRenderer.displayName = 'StickerRenderer';

export default StickerRenderer;
