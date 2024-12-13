import { type ResultMedia } from '../types';

export const resultsMedia: ResultMedia[] = [
  {
    id: 1,
    type: 'image',
    url: '/results/image1.png',
    description: 'Отчетный концерт - Весна 2024'
  },
  {
    id: 2,
    type: 'video',
    url: '/results/cat.mov',
    thumbnail: '/results/performance1-thumb.jpg',
    description: 'Выступление учеников класса гитары'
  },
  {
    id: 3,
    type: 'image',
    url: '/results/image3.png',
    description: 'Рок-концерт наших учеников'
  },
  {
    id: 4,
    type: 'image',
    url: '/results/image4.png',
    description: 'Джазовый вечер в БУМ'
  }
];
