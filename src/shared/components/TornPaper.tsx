'use client';

import React from 'react';
import Image from 'next/image';
import { type TransitionEdge } from '@/types/transitions';

interface TornPaperProps {
  config: TransitionEdge;
  position: 'top' | 'bottom';
}

const TornPaper: React.FC<TornPaperProps> = ({ config, position }) => {
  const { image, backgroundColor, height, flip, className = '', topOffset = 0 } = config;

  const positionStyles = position === 'bottom'
    ? { bottom: 0 }
    : { top: `${topOffset}px` };

  return (
    <div
      className={`absolute left-0 right-0 w-full ${className}`}
      style={{
        height: `${height}px`,
        backgroundColor: backgroundColor || 'transparent',
        transform: flip ? 'scaleY(-1)' : 'none',
        ...positionStyles
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt="Transition"
          fill
          style={{
            objectFit: 'cover',
            pointerEvents: 'none',
            transform: flip ? 'scaleY(-1)' : 'none'
          }}
          priority
        />
      </div>
    </div>
  );
};

export default TornPaper;
