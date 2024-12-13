'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { reviews } from '../data/content';
import { styles } from '@/shared/styles/constants';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/reviews.css';

/**
 * Секция отзывов с автоматическим слайдером
 * Стилизация:
 * - Фон по умолчанию из глобальных стилей
 * - Адаптивный слайдер с поддержкой свайпов
 * - Анимированное появление карточек отзывов
 * - Автоматическое переключение слайдов
 */
export function ReviewsSection() {
  return (
    // Основной контейнер секции
    // - styles.section.withBg: стандартный фон секции из глобальных стилей
    <section id="reviews" className={styles.section.withBg}>
      {/* Контейнер с максимальной шириной
          - styles.container.default: стандартная ширина контейнера */}
      <div className={styles.container.default}>
        {/* Заголовок секции
            - flex flex-col: вертикальное расположение элементов
            - items-center: центрирование по горизонтали
            - space-y-4: вертикальные отступы между элементами 1rem (16px)
            - mb-12: нижний отступ 3rem (48px) */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            {/* Заголовок H2 из глобальных стилей */}
            <h2 className={styles.heading.h2}>
              Отзывы наших учеников
            </h2>
            {/* Подзаголовок с увеличенным размером текста */}
            <p className={styles.text.large}>
              Узнайте, что говорят о нас те, кто уже учится в нашей школе
            </p>
          </div>
        </div>

        {/* Слайдер отзывов
            Настройки:
            - spaceBetween: отступ между слайдами 30px
            - slidesPerView: количество видимых слайдов
            - breakpoints: адаптивные точки для разных экранов
            - pagination: точки навигации
            - autoplay: автоматическое переключение каждые 5 секунд */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            // sm: 2 слайда
            640: {
              slidesPerView: 2,
            },
            // lg: 3 слайда
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="review-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              {/* Карточка отзыва с анимацией появления
                  - opacity: 0 -> 1: появление
                  - y: 20px -> 0: движение снизу вверх
                  - duration: 0.5s: длительность анимации
                  - viewport.once: анимация только при первом появлении
                  
                  Стили карточки:
                  - bg-white: белый фон
                  - rounded-lg: скругление углов
                  - p-6: внутренние отступы 1.5rem (24px)
                  - shadow-lg: большая тень
                  - h-full: растягивание на всю высоту */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg p-6 shadow-lg h-full"
              >
                {/* Контент отзыва
                    - flex flex-col: вертикальное расположение
                    - items-center: центрирование по горизонтали
                    - h-full: растягивание на всю высоту */}
                <div className="flex flex-col items-center h-full">
                  {/* Аватар пользователя
                      - styles.image.avatar: стандартные стили аватара
                      - mb-4: нижний отступ 1rem (16px) */}
                  {review.image && (
                    <div className={styles.image.avatar + " mb-4"}>
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className={styles.image.cover}
                      />
                    </div>
                  )}
                  
                  {/* Рейтинг в звездах
                      - flex justify-center: центрирование звезд
                      - mb-4: нижний отступ 1rem (16px)
                      - text-yellow-500: желтый цвет звезд */}
                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Текст отзыва
                      - text-gray-600: серый цвет текста
                      - text-center: центрирование текста
                      - mb-4: нижний отступ 1rem (16px)
                      - flex-grow: растягивание на доступное пространство
                      - italic: курсивное начертание */}
                  <p className="text-gray-600 text-center mb-4 flex-grow italic">&quot;{review.text}&quot;</p>

                  {/* Информация об авторе
                      - text-center: центрирование текста */}
                  <div className="text-center">
                    {/* Имя автора
                        - font-semibold: полужирный шрифт
                        - text-gray-800: темно-серый цвет
                        - text-lg: увеличенный размер текста */}
                    <p className="font-semibold text-gray-800 text-lg">{review.name}</p>
                    {/* Инструмент автора
                        - text-gray-500: серый цвет
                        - text-sm: уменьшенный размер текста */}
                    {review.instrument && (
                      <p className="text-gray-500 text-sm">{review.instrument}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
