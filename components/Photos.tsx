'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/photos.css';

const images = [
  '/photos/image1.png',
  '/photos/image2.png',
  '/photos/image3.png',
  '/photos/image4.png',
  '/photos/image1.png',
  '/photos/image2.png',
  '/photos/image3.png',
  '/photos/image4.png',
];

interface Card {
  src: string;
  height: number;
  rotation: number;
}

const Photos = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const generatedCards: Card[] = [...images].map((src) => ({
      src,
      height: Math.floor(Math.random() * (301 - 280 + 1)) + 270,
      rotation: Math.floor(Math.random() * (8 - (-8) + 1)) - 8,
    }));
    setCards(generatedCards);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="pt-16">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView="auto"
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="photo-swiper min-h-[350px]"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 6,
            }
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div 
                className="polaroid bg-white p-4 inline-block"
                style={{
                  transform: `rotate(${card.rotation}deg)`,
                  transition: 'transform 0.3s ease'
                }}
              >
                <div 
                  className="relative mb-4"
                  style={{
                    width: '250px',
                    height: `${card.height}px`
                  }}
                >
                  <Image
                    src={card.src}
                    alt="Фотография из студии БУМ"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-black text-center font-handwriting text-lg">
                  {['Урок игры на барабанах', 'Студия барабанов', 'Ученики за барабанами', 'Концерт учеников'][index % 4]}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Photos;
