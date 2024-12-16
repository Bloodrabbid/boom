'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { styles } from '@/shared/styles/constants';
import { resultsMedia } from '../data/content';

/**
 * Секция с отчетными концертами
 * Стилизация:
 * - Черный фон с декоративными звездами
 * - 3D карусель с эффектом coverflow
 * - Адаптивные изображения и видео
 * - Автоматическое переключение слайдов
 * - Анимированное появление заголовка
 */
export function ResultsSection() {
  return (
    // Основной контейнер секции
    // - bg-black: черный фон
    // - text-white: белый текст
    // - py-20: вертикальные отступы 5rem (80px)
    // - overflow-hidden: скрытие выходящего контента
    <section className="relative max-h-[350px] min-[480px]:max-h-[440px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[850px] bg-black text-white py-20 overflow-hidden" id="results">
      {/* Фоновые звезды
          - absolute inset-0: растягивание на всю секцию
          - pointer-events-none: игнорирование событий мыши */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          {/* Изображение звезд
              - fill: заполнение всего контейнера
              - object-cover: масштабирование с сохранением пропорций
              - opacity-50: 50% прозрачности */}
          <Image
            src="/icons/stars.png"
            alt="Stars background"
            fill
            className="object-cover opacity-50"
          />
        </div>
      </div>

      {/* Основной контент
          - styles.container.default: стандартная ширина контейнера */}
      <div className={styles.container.default}>
        {/* Заголовок с анимацией
            Анимация:
            - opacity: 0 -> 1: появление
            - y: 20px -> 0: движение снизу вверх
            - viewport.once: анимация только при первом появлении
            
            Стили:
            - text-center: центрирование текста
            - mb-4: нижний отступ 1.5rem (24px) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          {/* Заголовок
              - text-4xl md:text-5xl: адаптивный размер текста
              - font-bold: жирный шрифт
              - mb-4: нижний отступ 1rem (16px) */}
          <h2 className="lg:text-[64px] md:text-[50px] text-[29px] mt-[-90px] font-bold">
            Наши отчетные концерты
          </h2>
        </motion.div>

        {/* 3D Карусель
            Настройки:
            - effect="coverflow": 3D эффект перелистывания
            - coverflowEffect: параметры 3D эффекта
              * rotate: угол поворота (50 градусов)
              * depth: глубина эффекта (100)
              * slideShadows: тени для усиления 3D
            - spaceBetween: отступ между слайдами (30px)
            - slidesPerView="auto": автоматическое количество слайдов
            - centeredSlides: центрирование активного слайда
            - autoplay: автопереключение каждые 5 секунд */}
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
          className="results-swiper"
        >
          {resultsMedia.map((item) => (
            <SwiperSlide key={item.id}>
              {/* Контейнер медиа-контента
                  - aspect-video: соотношение сторон 16:9
                  - rounded-lg: скругление углов
                  - overflow-hidden: скрытие выходящего контента */}
              <div className="relative aspect-video rounded-lg overflow-hidden">
                {item.type === 'image' ? (
                  // Изображение
                  // - fill: заполнение контейнера
                  // - object-cover: масштабирование с сохранением пропорций
                  <Image
                    src={item.url}
                    alt={item.description}
                    fill
                    className="object-cover"
                  />
                ) : (
                  // Видео
                  // - w-full h-full: заполнение контейнера
                  // - object-cover: масштабирование с сохранением пропорций
                  <div className="relative w-full h-full">
                    <video
                      src={item.url}
                      poster={item.thumbnail}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              {/* Описание медиа
                  - text-center: центрирование текста
                  - mt-4: верхний отступ 1rem (16px)
                  - text-gray-300: светло-серый цвет */}
              <p className="text-center mt-4 text-gray-300">{item.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
