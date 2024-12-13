'use client';

import { motion } from 'framer-motion';
import { type HeroSectionProps } from '../types';
import { cn } from '@/shared/utils/cn';
import Button from '@/shared/components/Button';
import DrumLogo from '@/shared/components/DrumLogo';
import TornPaper from '@/shared/components/TornPaper';
import { transitions } from '@/config/transitions';
import { heroStyles } from '../styles';
import { APP_CONTENT } from '@/shared/constants/content';

/**
 * Главная секция сайта с призывом к действию
 * Стилизация:
 * - Минимальная высота: 80vh
 * - Отступ сверху: 200px
 * - Отступ снизу: 2rem (32px)
 * - Цвет текста: белый
 */
const HeroSection = ({ className }: Omit<HeroSectionProps, 'stickers'>) => {
  const { hero } = APP_CONTENT;
  
  return (
    // Основной контейнер секции
    // - relative: для позиционирования внутренних элементов
    // - min-h-[80vh]: минимальная высота 80% от высоты экрана
    // - flex items-center justify-center: центрирование содержимого
    // - text-white: белый цвет текста
    // - pb-8: отступ снизу 2rem (32px)
    // - mt-[200px]: отступ сверху 200px
    <section className={cn(heroStyles.container, className)}>
      {/* Фоновое изображение с затемнением
          - absolute inset-0: растягивание на всю секцию
          - bg-center bg-cover: центрирование и масштабирование фона
          - bg-black bg-opacity-50: черное затемнение с прозрачностью 50% */}
      <div className={heroStyles.background.wrapper}>
        <div
          className={heroStyles.background.image}
          style={{
            backgroundImage: 'url(/bg.png)',
            ...heroStyles.background.imageProps
          }}
        />
        <div className={heroStyles.background.overlay} />
      </div>

      {/* Основной контент
          - text-center: центрирование текста
          - relative z-10: размещение над фоном
          - px-4: горизонтальные отступы на мобильных устройствах */}
      <div className={heroStyles.content.wrapper}>
        {/* Анимированный блок с логотипом и подзаголовком
            - flex flex-col: вертикальное расположение
            - items-center justify-center: центрирование
            - gap-16: отступ между блоками 4rem (64px)
            Анимация:
            - Начальное состояние: прозрачность 0, сдвиг вниз на 20px
            - Конечное состояние: прозрачность 1, без сдвига
            - Длительность: 0.6 секунд */}
        <motion.div
          className={heroStyles.content.animated.wrapper}
          initial={heroStyles.content.animated.initial}
          animate={heroStyles.content.animated.animate}
          transition={heroStyles.content.animated.transition}
        >
          {/* Блок с логотипом и названием "БУМ"
              - flex items-end: выравнивание по нижнему краю
              - justify-center: центрирование по горизонтали
              - gap-4: отступ между элементами 1rem (16px)
              - leading-none: без межстрочного интервала */}
          <div className={heroStyles.logoBlock.wrapper}>
            {/* Логотип барабана
                Размеры адаптивные, определены в styles/sizes.ts */}
            <div className={heroStyles.logoBlock.logo}>
              <DrumLogo className="w-full h-full" />
            </div>
            {/* Заголовок "БУМ"
                - Размеры и типографика определены в styles/sizes.ts и styles/typography.ts
                - -mb-10: отрицательный отступ снизу для визуального подъема */}
            <h1 className={heroStyles.logoBlock.title}>{hero.logo}</h1>
          </div>
          {/* Подзаголовок "школа-студия музыки"
              Размеры и типографика определены в styles/sizes.ts и styles/typography.ts */}
          <div className={heroStyles.subtitleBlock}>
            {hero.subtitle.line1}<br />{hero.subtitle.line2}
          </div>
        </motion.div>

        {/* Кнопка призыва к действию
            Анимация аналогична блоку выше */}
        <motion.div
          className={heroStyles.button.wrapper}
          initial={heroStyles.button.animated.initial}
          animate={heroStyles.button.animated.animate}
          transition={heroStyles.button.animated.transition}
        >
          {/* Ссылка-кнопка
              Стили включают:
              - Базовые стили кнопки
              - Состояния (hover, active)
              - Цвета
              - Размеры
              - Форму (скругления)
              - Типографику */}
          <a 
            href="#contacts" 
            className={cn(
              heroStyles.button.link.base,
              heroStyles.button.link.states,
              heroStyles.button.link.colors,
              heroStyles.button.link.size,
              heroStyles.button.link.shape,
              heroStyles.button.link.text
            )}
          >
            {hero.cta}
          </a>
        </motion.div>
      </div>

      {/* Нижний декоративный элемент перехода
          - absolute bottom-0 left-0 right-0: прикрепление к нижнему краю
          - z-20: размещение над всеми элементами */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {transitions.hero.bottom && (
          <TornPaper config={transitions.hero.bottom} position="bottom" />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
