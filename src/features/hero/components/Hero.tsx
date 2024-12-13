'use client';

import React from 'react';
import { transitions } from '@/config/transitions';
import TornPaper from '@/shared/components/TornPaper';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white pb-20" id="hero">
      {/* Hero content */}
      <div className="container mx-auto px-4 py-20">
        <h1>Hero Section</h1>
      </div>

      {/* Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        {transitions.hero.bottom && (
          <TornPaper config={transitions.hero.bottom} position="bottom" />
        )}
      </div>
    </section>
  );
};

export default Hero;
