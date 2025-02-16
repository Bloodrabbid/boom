import { memo } from 'react';
import Image from 'next/image';
import { PHOTO_CONFIG } from '../constants/photos';
import { useImageLoading } from '../hooks/useImageLoading';
import type { PhotoCardProps } from '../types/photos';

export const PhotoCard = memo(({ card, caption, onError }: PhotoCardProps) => {
  const { isLoading, handleLoad, handleError } = useImageLoading(onError);

  return (
    <div 
    className="polaroid bg-white p-4 inline-block"

      style={{
        transform: `rotate(${card.rotation}deg)`,
        transition: 'transform 0.3s ease'
      }}
    >
      <div 
        className="relative mb-2"
        style={{
          width: `${PHOTO_CONFIG.width}px`,
          height: `${card.height}px`

        }}
      >
        <Image
          src={card.src}
          alt="Фотография из студии БУМ"
          fill
          className={`object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={handleLoad}
          onError={() => handleError(new Error(`Failed to load image: ${card.src}`))}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
      <p className="font-raleway">
        {caption}
      </p>
    </div>
  );
});

PhotoCard.displayName = 'PhotoCard'; 