import { useState, useEffect } from 'react';
import { GALLERY_IMAGES, PHOTO_CONFIG } from '../constants/photos';
import { Card } from '../types/photos';

const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const usePhotoCards = () => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const generatedCards: Card[] = [...GALLERY_IMAGES].map((src) => ({
      src,
      height: generateRandomNumber(PHOTO_CONFIG.height.min, PHOTO_CONFIG.height.max),
      rotation: generateRandomNumber(PHOTO_CONFIG.rotation.min, PHOTO_CONFIG.rotation.max),
    }));
    setCards(generatedCards);
  }, []);

  return cards;
}; 