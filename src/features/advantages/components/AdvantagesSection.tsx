'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/shared/components/ui/card';
import { advantages } from '@/config/advantages';
import { AdvantageCarousel } from './AdvantageCarousel';
import { transitions } from '@/config/transitions';
import { defaultStickers } from '@/config/stickers';
import Image from 'next/image';
import StickerRenderer from '@/shared/components/StickerRenderer';

const AdvantagesSection = () => {
  const [selectedAdvantage, setSelectedAdvantage] = useState<number | null>(null);
  const [clickedAdvantage, setClickedAdvantage] = useState<number | null>(null);

  useEffect(() => {
    if (clickedAdvantage !== null) {
      setSelectedAdvantage(clickedAdvantage);
      setClickedAdvantage(null);
    }
  }, [clickedAdvantage]);

  const handleCardClick = (index: number) => {
    setClickedAdvantage(index);
  };

  return (
      <section className="py-[64px] bg-black relative overflow-hidden" id="advantages">
        {/* Transitions остаются без изменений */}
        {transitions.advantages.top && (
            <div
                className={transitions.advantages.top.className}
                style={{
                  height: transitions.advantages.top.height,
                  backgroundColor: transitions.advantages.top.backgroundColor
                }}
            >
              <Image
                  src={transitions.advantages.top.image}
                  alt="Top transition"
                  width={1440}
                  height={transitions.advantages.top.height}
                  className="w-full h-full object-cover"
              />
            </div>
        )}

        {transitions.advantages.bottom && (
            <div
                className={transitions.advantages.bottom.className}
                style={{
                  height: transitions.advantages.bottom.height,
                  backgroundColor: transitions.advantages.bottom.backgroundColor
                }}
            >
              <Image
                  src={transitions.advantages.bottom.image}
                  alt="Bottom transition"
                  width={1440}
                  height={transitions.advantages.bottom.height}
                  className="w-full h-full object-cover"
              />
            </div>
        )}

        <div className="container mx-auto relative z-10 px-4 md:px-8 lg:px-16 xl:px-[180px]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-center mb-8 md:mb-12 lg:mb-[90px] text-white">
            Наши преимущества
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-[60px]">
            {advantages.map((advantage, index) => (
                <Card
                    key={index}
                    className="bg-white text-black cursor-pointer relative group max-w-[450px] min-h-[250px] md:min-h-[300px] w-full mx-auto"
                    onClick={() => handleCardClick(index)}
                >
                  {/* Стикеры - обновленная логика */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <StickerRenderer
                        stickers={defaultStickers.advantages}
                        containerClassName="w-full h-full"
                        cardIndex={index}
                    />
                  </div>

                  <div className="absolute top-3 right-3 text-[#FF4B26] opacity-80">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="group-hover:rotate-90 transition-transform duration-300"
                    >
                      <path
                          d="M12 3v18M3 12h18"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <CardContent className="p-6 flex flex-col items-center text-center animate-[pulse_4s_ease-in-out_infinite] h-full">
                    <advantage.icon className="w-12 h-12 sm:w-16 sm:h-16 mb-4 text-[#FF4B26]" />
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 whitespace-pre-line">
                      {advantage.title}
                    </h3>
                    <p className="text-base sm:text-[20px]">
                      {advantage.shortDescription}
                    </p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 bg-[url('/images/advantages-bg.jpg')] bg-cover bg-center opacity-20"></div>

        {/* Декоративные ноты
          - absolute inset-0: растягивание на всю секцию
          - overflow-hidden: скрытие выходящих за пределы элементов
          - pointer-events-none: игнорирование событий мыши */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top area notes */}
        <Image
          src="/icons/note1.svg"
          alt="Musical note"
          width={53}
          height={53}
          className="absolute top-[5%] left-[15%] rotate-[-15deg]" // Позиционирование и поворот ноты
        />
        <Image
          src="/icons/note2.svg"
          alt="Musical note"
          width={40}
          height={40}
          className="absolute top-[8%] right-[20%] rotate-[25deg]" // Позиционирование и поворот ноты
        />
        <Image
          src="/icons/note3.svg"
          alt="Musical note"
          width={45}
          height={45}
          className="absolute top-[12%] left-[40%] rotate-[10deg]" // Позиционирование и поворот ноты
        />

        {/* Left side notes */}
        <Image
          src="/icons/note2.svg"
          alt="Musical note"
          width={47}
          height={47}
          className="absolute top-[50%] left-[3%] rotate-[-20deg]" // Позиционирование и поворот ноты
        />
        <Image
          src="/icons/note1.svg"
          alt="Musical note"
          width={43}
          height={43}
          className="absolute top-[70%] left-[5%] rotate-[15deg]" // Позиционирование и поворот ноты
        />

        {/* Right side notes */}
        <Image
          src="/icons/note3.svg"
          alt="Musical note"
          width={50}
          height={50}
          className="absolute top-[45%] right-[4%] rotate-[-10deg]" // Позиционирование и поворот ноты
        />
        <Image
          src="/icons/note2.svg"
          alt="Musical note"
          width={45}
          height={45}
          className="absolute top-[65%] right-[6%] rotate-[20deg]" // Позиционирование и поворот ноты
        />

        {/* Bottom area notes */}
        <Image
          src="/icons/note1.svg"
          alt="Musical note"
          width={43}
          height={43}
          className="absolute bottom-[5%] left-[90%] rotate-[-25deg]" // Позиционирование и поворот ноты
        />
        <Image
          src="/icons/note3.svg"
          alt="Musical note"
          width={47}
          height={47}
          className="absolute bottom-[30%] right-[48%] rotate-[15deg]" // Позиционирование и поворот ноты
        />
        <Image
          src="/icons/note2.svg"
          alt="Musical note"
          width={40}
          height={40}
          className="absolute bottom-[2%] right-[47%] rotate-[-15deg]" // Позиционирование и поворот ноты
        />
      </div>

      {selectedAdvantage !== null && (
        <AdvantageCarousel 
          advantage={advantages[selectedAdvantage]} 
          onClose={() => setSelectedAdvantage(null)} 
        />
      )}
    </section>
  );
};

export default AdvantagesSection;
