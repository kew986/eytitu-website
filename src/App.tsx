import React from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { ProductShowcaseSection } from './components/sections/ProductShowcaseSection';
import { WorkflowSection } from './components/sections/WorkflowSection';
import { AudienceSection } from './components/sections/AudienceSection';
import { FinalCTASection } from './components/sections/FinalCTASection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080909] text-white flex flex-col font-['Poppins'] selection:bg-[#F8E804] selection:text-black">
      {/* 1. Sticky Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Problem Section */}
        <ProblemSection />

        {/* 4. Capabilities / Core Features Section (Bento Grid) */}
        <FeaturesSection />

        {/* 5. Product Demo / Platform Section (Interactive Tabs) */}
        <ProductShowcaseSection />

        {/* 6. Workflow / How It Works Section */}
        <WorkflowSection />

        {/* 7. Use Cases / Target Audiences Section */}
        <AudienceSection />

        {/* 8. Final CTA / Conversion Section */}
        <FinalCTASection />
      </main>

      {/* 9 & 10. Footer Section & Bottom Copyright */}
      <Footer />
    </div>
  );
};

export default App;
