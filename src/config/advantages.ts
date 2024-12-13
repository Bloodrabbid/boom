import { 
  ScheduleIcon,
  IndividualIcon,
  EquipmentIcon,
  TeachersIcon,
  LocationIcon,
  EventsIcon
} from '@/shared/components/icons';

export interface AdvantageSlide {
  type: 'description' | 'image' | 'video';
  content: string;
}

export interface Advantage {
  icon: typeof ScheduleIcon | typeof IndividualIcon | typeof EquipmentIcon | typeof TeachersIcon | typeof LocationIcon | typeof EventsIcon;
  title: string;
  shortDescription: string;
  slides: AdvantageSlide[];
}

export const advantages: Advantage[] = [
  {
    icon: IndividualIcon,
    title: 'ИНДИВИДУАЛЬНЫЙ\nПОДХОД',
    shortDescription: 'Уроки проводятся индивидуально - особый подход к каждому.',
    slides: [
      {
        type: 'description',
        content: 'Уроки проводятся индивидуально - особый подход к каждому. Мы учитываем ваши музыкальные предпочтения, темп обучения и цели. Наши преподаватели помогут вам достичь желаемого результата, делая процесс обучения интересным и эффективным.',
      },
      {
        type: 'image',
        content: '/images/advantages/individual.jpg'
      }
    ],
  },
  {
    icon: EquipmentIcon,
    title: 'ЗАНЯТИЯ\nЗА ИНСТРУМЕНТОМ',
    shortDescription: 'Профессиональное оборудование всегда доступно для занятий и репетиций.',
    slides: [
      {
        type: 'description',
        content: 'Профессиональное оборудование всегда доступно для занятий и репетиций. У нас есть все необходимые инструменты и оборудование для комфортного обучения и практики.',
      },
      {
        type: 'image',
        content: '/images/advantages/equipment.jpg'
      }
    ],
  },
  {
    icon: ScheduleIcon,
    title: 'ГИБКОЕ\nРАСПИСАНИЕ',
    shortDescription: 'Вы сами решаете, когда прийти на урок или репетицию. Запись на занятия происходит в 2 нажатия с вашего смартфона.',
    slides: [
      {
        type: 'description',
        content: 'Вы сами решаете, когда прийти на урок или репетицию. Запись на занятия происходит в 2 нажатия с вашего смартфона. Мы подстраиваемся под ваш график, чтобы сделать обучение максимально удобным.',
      },
      {
        type: 'image',
        content: '/images/advantages/schedule.jpg'
      }
    ],
  },
  {
    icon: LocationIcon,
    title: 'УДОБНОЕ\nРАСПОЛОЖЕНИЕ',
    shortDescription: 'Студия в самом центре города. Отдельно стоящее здание, поэтому можно учиться и репетировать, никому не мешая.',
    slides: [
      {
        type: 'description',
        content: 'Студия в самом центре города. Отдельно стоящее здание, поэтому можно учиться и репетировать, никому не мешая. Удобная транспортная доступность и комфортная обстановка для занятий.',
      },
      {
        type: 'image',
        content: '/images/advantages/location.jpg'
      }
    ],
  },
  {
    icon: EventsIcon,
    title: 'КРУТЫЕ МЕРОПРИЯТИЯ\nИ КОНЦЕРТЫ',
    shortDescription: 'Приходи на квартирники, мастер классы от известных барабанщиков, а в конце обучения - сыграй любимую песню на настоящей сцене',
    slides: [
      {
        type: 'description',
        content: 'Приходи на квартирники, мастер классы от известных барабанщиков, а в конце обучения - сыграй любимую песню на настоящей сцене. Регулярные мероприятия помогают развиваться и получать опыт выступлений.',
      },
      {
        type: 'image',
        content: '/images/advantages/events.jpg'
      }
    ],
  },
  {
    icon: TeachersIcon,
    title: 'ПРОФЕССИОНАЛЬНЫЕ\nПЕДАГОГИ',
    shortDescription: 'В нашей студии обучались и обучаются несколько сотен человек, поэтому мы имеем огромный опыт в обучении и особый подход к каждому ученику.',
    slides: [
      {
        type: 'description',
        content: 'В нашей студии обучались и обучаются несколько сотен человек, поэтому мы имеем огромный опыт в обучении и особый подход к каждому ученику. Наши преподаватели - практикующие музыканты с богатым опытом выступлений и преподавания.',
      },
      {
        type: 'image',
        content: '/images/advantages/teachers.jpg'
      }
    ],
  },
]
