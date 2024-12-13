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
    // Основной контейнер секции
    // - py-16: отступы сверху и снизу по 4rem (64px)
    // - bg-black: черный фон
    // - relative: для позиционирования абсолютных элементов внутри
    // - overflow-hidden: скрывает выходящие за пределы элементы
    <section className="py-[64px] bg-black relative overflow-hidden" id="advantages">
      {/* Top transition - верхний декоративный элемент перехода */}
      <div
        className={transitions.advantages.top.className}
        style={{
          height: transitions.advantages.top.height, // Высота верхнего перехода
          backgroundColor: transitions.advantages.top.backgroundColor // Цвет фона перехода
        }}
      >
        <Image
          src={transitions.advantages.top.image}
          alt="Top transition"
          width={1440}
          height={transitions.advantages.top.height}
          className="w-full h-full object-cover" // Заполнение всего контейнера с сохранением пропорций
        />
      </div>

      {/* Bottom transition - нижний декоративный элемент перехода */}
      <div
        className={transitions.advantages.bottom.className}
        style={{
          height: transitions.advantages.bottom.height, // Высота нижнего перехода
          backgroundColor: transitions.advantages.bottom.backgroundColor // Цвет фона перехода
        }}
      >
        <Image
          src={transitions.advantages.bottom.image}
          alt="Bottom transition"
          width={1440}
          height={transitions.advantages.bottom.height}
          className="w-full h-full object-cover" // Заполнение всего контейнера с сохранением пропорций
        />
      </div>

      {/* Основной контент секции */}
      {/* - container: ограничивает ширину контента
          - mx-auto: центрирует контейнер
          - relative: для z-index
          - z-10: располагает над фоновыми элементами
          - px-4: горизонтальные отступы на мобильных устройствах */}
      <div className="container mx-auto relative z-10 px-[180px]">
        {/* Заголовок секции
            - text-2xl sm:text-3xl md:text-[64px]: адаптивный размер текста
            - font-bold: жирный шрифт
            - text-center: центрирование текста
            - mb-12: отступ снизу 3rem (48px)
            - text-white: белый цвет текста */}
        <h2 className="text-2xl sm:text-3xl md:text-[64px] font-bold text-center mb-[90px] text-white">Наши преимущества</h2>

        {/* Сетка преимуществ
            - grid: создает сетку
            - grid-cols-1 sm:grid-cols-2: 1 колонка на мобильных, 2 на планшетах и выше
            - gap-4: отступ между элементами сетки 1rem (2px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[60px]">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="bg-white text-black cursor-pointer relative group"
              style={{ maxWidth: '450px', maxHeight: '300px', width: '100%', margin: '0 auto' }}
              onClick={() => handleCardClick(index)}
            >
              {/* Стикеры для первой и второй карточки */}
              {(index === 0 || index === 1) && (
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                  <StickerRenderer
                    stickers={[defaultStickers.advantages[index]]}
                    containerClassName="w-full h-full"
                  />
                </div>
              )}

              {/* Иконка плюса в правом верхнем углу
                  - absolute: абсолютное позиционирование
                  - top-3 right-3: отступы сверху и справа
                  - text-[#FF4B26]: оранжевый цвет
                  - opacity-80: небольшая прозрачность */}
              <div className="absolute top-3 right-3 text-[#FF4B26] opacity-80">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className="group-hover:rotate-90 transition-transform duration-300" // Поворот на 90 градусов при наведении
                >
                  <path 
                    d="M12 3v18M3 12h18" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>
              
              {/* Содержимое карточки
                  - p-6: внутренние отступы 1.5rem (24px)
                  - flex flex-col: вертикальное расположение элементов
                  - items-center: центрирование по горизонтали
                  - text-center: центрирование текста
                  - animate-[pulse_4s_ease-in-out_infinite]: пульсирующая анимация */}
              <CardContent className="p-6 flex flex-col items-center text-center animate-[pulse_4s_ease-in-out_infinite] h-full">
                {/* Иконка преимущества
                    - w-12 h-12 sm:w-16 sm:h-16: адаптивный размер иконки
                    - mb-4: отступ снизу
                    - text-[#FF4B26]: оранжевый цвет */}
                <advantage.icon className="w-12 h-12 sm:w-16 sm:h-16 mb-4 text-[#FF4B26]" />

                {/* Заголовок преимущества
                    - text-xl sm:text-2xl: адаптивный размер текста
                    - font-semibold: полужирный шрифт
                    - mb-2: отступ снизу
                    - whitespace-pre-line: сохранение переносов строк */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 whitespace-pre-line">{advantage.title}</h3>

                {/* Описание преимущества
                    - text-base sm:text-lg: адаптивный размер текста */}
                <p className="text-base sm:text-[20px]">{advantage.shortDescription}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Фоновое изображение
          - absolute inset-0: растягивание на всю секцию
          - bg-cover bg-center: заполнение фона с центрированием
          - opacity-20: прозрачность 20% */}
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

export { AdvantagesSection };
