'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Анимированная SVG иконка барабана с палочками
 * Стилизация:
 * - Размер контейнера 4rem x 4rem (64px x 64px)
 * - Белый цвет для всех элементов
 * - Анимированные палочки с эффектом удара
 * - Расходящиеся круги для эффекта звуковой волны
 * - SVG барабан с детализированными элементами
 */
const DrumSVG: React.FC = () => (
    // Основной контейнер
    // - relative: для абсолютного позиционирования элементов
    // - w-16 h-16: размер 4rem x 4rem (64px x 64px)
    <div className="relative w-16 h-16">
      {/* Левая барабанная палочка
          Стили:
          - absolute: позиционирование относительно контейнера
          - w-1: ширина 0.25rem (4px)
          - h-8: высота 2rem (32px)
          - bg-white: белый цвет
          Анимация:
          - rotate: покачивание 45° -> 35° -> 45°
          - scale: пульсация 1 -> 0.95 -> 1
          - duration: 0.6s с бесконечным повтором */}
      <motion.div
          className="absolute w-1 h-8 bg-white"
          style={{
            left: '55%',
            top: '0%',
            transformOrigin: 'bottom center',
            transform: 'rotate(45deg)'
          }}
          animate={{
            rotate: [45, 35, 45],
            scale: [1, 0.95, 1]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
      />
      {/* Правая барабанная палочка
          Идентичные стили с левой палочкой
          Отличия:
          - left: 35% вместо 55%
          - rotate: -45° -> -35° -> -45°
          - delay: 0.3s для асинхронного движения */}
      <motion.div
          className="absolute w-1 h-8 bg-white"
          style={{
            left: '35%',
            top: '0%',
            transformOrigin: 'bottom center',
            transform: 'rotate(-45deg)'
          }}
          animate={{
            rotate: [-45, -35, -45],
            scale: [1, 0.95, 1]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.3
          }}
      />

      {/* SVG барабан
          - w-16 h-16: размер 4rem x 4rem (64px x 64px)
          - text-white: белый цвет для stroke
          - stroke-width: толщина линий 2px
          - stroke-linecap/join: round для скругленных углов */}
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16 text-white"
      >
        {/* Верхняя часть барабана (эллипс)
            cx/cy: центр эллипса
            rx/ry: радиусы по x/y */}
        <ellipse cx="12" cy="9" rx="10" ry="5" />
        {/* Стойки барабана (вертикальные линии)
            x1/y1: начальная точка
            x2/y2: конечная точка */}
        <line x1="7" y1="13.4" x2="7" y2="21.3" />
        <line x1="12" y1="14" x2="12" y2="22" />
        <line x1="17" y1="13.4" x2="17" y2="21.3" />
        {/* Нижняя часть барабана (изогнутая линия) */}
        <path d="M2 9v8a10 5 0 0 0 20 0V9" />
      </svg>

      {/* Анимированные круги (звуковые волны)
          Для каждого из трех кругов:
          - absolute inset-0: заполнение всего контейнера
          - rounded-full: круглая форма
          - border-2 border-white: белая рамка 2px
          Анимация:
          - scale: увеличение 1 -> 1.5 -> 2
          - opacity: затухание 0.3 -> 0.2 -> 0
          - delay: задержка i * 0.3s для эффекта волны */}
      {[1, 2, 3].map((i) => (
          <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-white"
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.3, 0.2, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut"
              }}
          />
      ))}
    </div>
);

export default DrumSVG;