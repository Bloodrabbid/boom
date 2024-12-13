export interface TransitionEdge {
  image: string;
  backgroundColor?: string;
  height: number;
  flip?: boolean;
  className?: string;
  topOffset?: number;
}

export interface TitleStrip {
  text: string;
  backgroundColor: string;
  height: number;
  titleColor: string;
  className?: string;
}

export interface SectionTransition {
  top?: TransitionEdge;
  bottom?: TransitionEdge;
  titleStrip?: TitleStrip;
}

export interface TransitionConfig {
  hero: SectionTransition;
  about: SectionTransition;
  advantages: SectionTransition;
  reviews: SectionTransition;
  quiz: SectionTransition;
  results: SectionTransition;
  contacts: SectionTransition;
}
