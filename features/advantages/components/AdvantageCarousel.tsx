'use client';

import React from 'react';
import { X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { Advantage } from '@/config/advantages';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../styles/advantages.css';

interface AdvantageCarouselProps {
  advantage: Advantage;
  onClose: () => void;
}

const AdvantageCarousel: React.FC<AdvantageCarouselProps> = ({ advantage, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto relative flex flex-col h-full">
        <div className="flex justify-between items-center p-4 bg-black bg-opacity-50 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {advantage.title}
          </h2>
          <button 
            className="text-white hover:text-[#FF4B26] transition-colors focus:outline-none"
            onClick={onClose}
          >
            <X size={24} />
          </button>
        </div>
        <Swiper
          modules={[Autoplay, Navigation, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          spaceBetween={30}
          slidesPerView="auto"
          centeredSlides={true}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="advantages-swiper"
        >
          {advantage.slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center p-4">
                {slide.type === 'description' && (
                  <div className="max-w-2xl p-6 md:p-8 bg-white rounded-lg text-black overflow-y-auto max-h-[70vh]">
                    <p className="text-lg md:text-xl leading-relaxed">{slide.content}</p>
                  </div>
                )}
                {slide.type === 'image' && (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={slide.content}
                      alt={advantage.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {slide.type === 'video' && (
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={slide.content}
                      className="absolute inset-0 w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export { AdvantageCarousel };
