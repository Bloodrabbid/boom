'use client';

import HeroSection from '@/features/hero/components/HeroSection';
import AboutUs from '@/features/about/components/AboutUs';
import AdvantagesSection from '@/features/advantages/components/AdvantagesSection';
import { QuizSection } from '@/features/quiz/components/QuizSection';
import { ResultsSection } from '@/features/results/components/ResultsSection';
import ContactsSection from '@/features/contacts/components/ContactsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ResultsSection />
      <QuizSection />
      <AdvantagesSection />
      <ContactsSection />
    </>
  );
}
