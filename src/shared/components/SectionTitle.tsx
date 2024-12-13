'use client';

import React from 'react';
import { type TitleStrip } from '@/types/transitions';
import { cn } from '@/shared/utils/cn';

interface SectionTitleProps {
  config: TitleStrip;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ config }) => {
  const { text, backgroundColor, height, titleColor, className = '' } = config;

  return (
    <div
      className={cn('w-full relative', className)}
      style={{
        height: `${height}px`,
        backgroundColor,
      }}
    >
      <h2 
        className={cn(
          'text-center',
          'text-[64px]',
          'font-bold',
          'leading-tight',
          'tracking-wide',
          '-mt-5',  
          className
        )}
        style={{ color: titleColor }}
      >
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
