export interface PageSection {
  id: string;
  type: 'hero' | 'advantages' | 'reviews' | 'quiz';
  order: number;
  isVisible: boolean;
  settings: {
    backgroundColor?: string;
    padding?: {
      top: number;
      bottom: number;
    };
  };
}

export interface ContentBlock {
  id: string;
  sectionId: string;
  type: 'heading' | 'text' | 'image' | 'button' | 'card';
  content: {
    text?: string;
    imageUrl?: string;
    link?: string;
    variant?: string;
  };
  style?: {
    fontSize?: string;
    color?: string;
    alignment?: 'left' | 'center' | 'right';
  };
  order: number;
  isVisible: boolean;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconType: string;
  order: number;
  isVisible: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  text: string;
  rating: number;
  imageUrl: string;
  order: number;
  isVisible: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  order: number;
  isVisible: boolean;
}

export interface SiteSettings {
  name: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  contacts: {
    phone: string;
    email: string;
    address: string;
  };
  socialLinks: {
    vk?: string;
    instagram?: string;
    telegram?: string;
  };
}
