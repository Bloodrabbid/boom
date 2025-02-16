export const GALLERY_IMAGES = [
  '/photos/image1.png',
  '/photos/image2.png',
  '/photos/image3.png',
  '/photos/image4.png',
  '/photos/image1.png',
  '/photos/image2.png',
  '/photos/image3.png',
  '/photos/image4.png',
] as const;

export const PHOTO_CAPTIONS = [
  'Урок игры на барабанах',
  'Студия барабанов',
  'Ученики за барабанами',
  'Концерт учеников'
] as const;

export const PHOTO_CONFIG = {
  height: {
    min: 270,
    max: 300
  },
  rotation: {
    min: -8,
    max: 8
  },
  width: 250
} as const; 