import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ProblemSection } from '../components/sections/ProblemSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { ProductShowcaseSection } from '../components/sections/ProductShowcaseSection';
import { WorkflowSection } from '../components/sections/WorkflowSection';
import { AudienceSection } from '../components/sections/AudienceSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Problem Section */}
      <ProblemSection />

      {/* 3. Capabilities / Core Features Section (Bento Grid) */}
      <FeaturesSection />

      {/* 4. Product Demo / Platform Section (Interactive Tabs) */}
      <ProductShowcaseSection />

      {/* 5. Workflow / How It Works Section */}
      <WorkflowSection />

      {/* 6. Use Cases / Target Audiences Section */}
      <AudienceSection />

      {/* 7. Final CTA / Conversion Section */}
      <FinalCTASection />
    </>
  );
};
