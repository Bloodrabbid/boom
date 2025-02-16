'use client';

import { usePhotoCards } from '../hooks/usePhotoCards';
import { PhotoSlider } from './PhotoSlider';

const Photos = () => {
  const cards = usePhotoCards();

  return (
    <div className="relative w-screen pt-16 left-[50%] right-[50%] mx-[-50vw]">
      <div className="overflow-hidden">
        <PhotoSlider cards={cards} />
      </div>
    </div>
  );
};

export default Photos; 