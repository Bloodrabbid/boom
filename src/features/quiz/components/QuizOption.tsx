'use client';

import { type QuizOption as QuizOptionType } from '../types';
import { cn } from '@/shared/utils/cn';

/**
 * Компонент варианта ответа в квизе
 * Стилизация:
 * - Адаптивная кнопка с полной шириной
 * - Интерактивные состояния (hover, focus, selected)
 * - Анимированные переходы
 * - Цветовая схема с акцентом #FF4B26 (оранжевый)
 */
interface QuizOptionProps {
  option: QuizOptionType;
  isSelected: boolean;
  onClick: (id: string) => void;
  className?: string;
}

const QuizOption = ({ option, isSelected, onClick, className }: QuizOptionProps) => {
  return (
    // Кнопка варианта ответа
    // Базовые стили:
    // - w-full: полная ширина
    // - p-4: внутренние отступы 1rem (16px)
    // - text-left: выравнивание текста по левому краю
    // - rounded-xl: большое скругление углов
    // - transition-all duration-200: плавная анимация всех изменений за 200мс
    //
    // Рамка и интерактивность:
    // - border-2: толщина рамки 2px
    // - hover:border-[#FF4B26]: оранжевая рамка при наведении
    // - focus:outline-none: убираем стандартный outline
    // - focus:ring-2: кольцо фокуса толщиной 2px
    // - focus:ring-[#FF4B26]: оранжевое кольцо фокуса
    // - focus:ring-offset-2: отступ кольца фокуса
    //
    // Состояния:
    // Выбран:
    // - border-[#FF4B26]: оранжевая рамка
    // - bg-[#FF4B26]: оранжевый фон
    // - text-white: белый текст
    // Не выбран:
    // - border-gray-200: серая рамка
    // - hover:bg-gray-50: светло-серый фон при наведении
    <button
      type="button"
      onClick={() => onClick(option.id)}
      className={cn(
        'w-full p-4 text-left rounded-xl transition-all duration-200',
        'border-2 hover:border-[#FF4B26] focus:outline-none focus:ring-2 focus:ring-[#FF4B26] focus:ring-offset-2',
        isSelected
          ? 'border-[#FF4B26] bg-[#FF4B26] text-white'
          : 'border-gray-200 hover:bg-gray-50',
        className
      )}
    >
      {/* Текст варианта ответа
          - text-base md:text-lg: адаптивный размер текста
          - base (16px) на мобильных
          - lg (18px) на десктопе */}
      <span className="text-base md:text-lg">{option.text}</span>
    </button>
  );
};

export default QuizOption;
