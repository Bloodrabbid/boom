'use client';

import Image from 'next/image';
import { type Advantage } from '../types';
import { cn } from '@/shared/utils/cn';
import StickerRenderer from '@/shared/components/StickerRenderer';

// Интерфейс пропсов компонента
// - Наследует все свойства из типа Advantage
// - Добавляет опциональное свойство className для стилизации
interface AdvantageCardProps extends Advantage {
  className?: string;
}

/**
 * Карточка преимущества школы
 */
const AdvantageCard = ({ title, description, icon, stickers, className }: AdvantageCardProps) => {
  return (
    // Основной контейнер карточки
    // - relative: для позиционирования абсолютных элементов внутри
    // - group: для группировки hover-эффектов
    // - className: пользовательские классы
    <div 
      className={cn('relative group', className)}
      style={{ maxWidth: '450px', maxHeight: '300px', width: '100%', height: '100%' }}>
      {/* Контейнер для фоновых стикеров
          - absolute inset-0: растягивание на всю карточку
          - w-full h-full: занимает всю доступную ширину и высоту
          - hidden md:block: скрыт на мобильных устройствах, показывается на md и выше */}
      {stickers && (
        <div className="absolute inset-0 w-full h-full hidden md:block">
          {/* Компонент рендеринга стикеров
              - stickers: массив стикеров для отображения
              - containerClassName: класс для контейнера стикеров */}
          <StickerRenderer
            stickers={stickers}
            containerClassName="w-full h-full"
          />
        </div>
      )}

      {/* Основное содержимое карточки
          - relative z-10: располагается над фоновыми стикерами
          - p-6: внутренние отступы 1.5rem (24px)
          - bg-white: белый фон
          - rounded-2xl: скругление углов
          - shadow-lg: большая тень
          - transition-transform: плавная анимация трансформации
          - group-hover:-translate-y-2: поднятие карточки при наведении */}
      <div className="relative z-10 p-6 bg-white rounded-2xl shadow-lg transition-transform duration-300 group-hover:-translate-y-2 h-full">
        {/* Контейнер для иконки
            - w-12 h-12: размеры 3rem x 3rem (48px x 48px)
            - relative: для работы с Image fill
            - mb-4: отступ снизу */}
        <div className="w-12 h-12 relative mb-4">
          {/* Иконка преимущества
              - fill: заполнение всего родительского контейнера
              - object-contain: сохранение пропорций изображения */}
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        {/* Заголовок карточки
            - text-xl: размер текста
            - font-semibold: полужирный шрифт
            - mb-2: отступ снизу */}
        <h3 className="text-xl font-semibold mb-2">
          {title}
        </h3>

        {/* Описание преимущества
            - text-gray-600: серый цвет текста */}
        <p className="text-[20px] text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AdvantageCard;