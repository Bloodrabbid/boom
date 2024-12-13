import { type Advantage } from '../types';

/**
 * Данные о преимуществах школы
 */
export const advantages: Advantage[] = [
  {
    id: 'experienced-teachers',
    title: 'Опытные преподаватели',
    description: 'Наши учителя имеют многолетний опыт преподавания и выступлений на сцене',
    icon: '/icons/teacher.svg'
  },
  {
    id: 'individual-approach',
    title: 'Индивидуальный подход',
    description: 'Программа обучения адаптируется под ваш уровень и цели',
    icon: '/icons/individual.svg'
  },
  {
    id: 'flexible-schedule',
    title: 'Гибкий график',
    description: 'Занимайтесь в удобное для вас время, не привязываясь к жесткому расписанию',
    icon: '/icons/schedule.svg'
  },
  {
    id: 'modern-equipment',
    title: 'Современное оборудование',
    description: 'Используем профессиональные инструменты и оборудование для обучения',
    icon: '/icons/equipment.svg'
  }
];
