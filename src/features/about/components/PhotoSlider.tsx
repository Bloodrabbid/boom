'use client';

import { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { PHOTO_CAPTIONS } from '../constants/photos';
import { SLIDER_CONFIG, SLIDER_CLASSES } from '../constants/slider';
import { PhotoCard } from './PhotoCard';
import type { PhotoSliderProps } from '../types/photos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/photos.css';

export const PhotoSlider = ({ cards, onError }: PhotoSliderProps) => {
  const handleError = useCallback((error: Error) => {
    console.error('Error loading photo:', error);
    onError?.(error);
  }, [onError]);

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={SLIDER_CONFIG.spaceBetween}
      slidesPerView="auto"
      centeredSlides={true}
      pagination={{ clickable: true }}
      autoplay={SLIDER_CONFIG.autoplay}
      className={SLIDER_CLASSES.base}
      breakpoints={SLIDER_CONFIG.breakpoints}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index} className={SLIDER_CLASSES.slide}>
          <PhotoCard 
            card={card} 
            caption={PHOTO_CAPTIONS[index % PHOTO_CAPTIONS.length]} 
            onError={handleError}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}; 