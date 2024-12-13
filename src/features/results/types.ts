export interface ResultMedia {
    id: number;
    type: 'image' | 'video';
    url: string;
    description: string;
    thumbnail?: string; // для видео
  }
  
  export interface ResultsSectionProps {
    className?: string;
  }