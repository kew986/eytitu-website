import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EyebrowBadge } from '../ui/EyebrowBadge';
import { Button } from '../ui/Button';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#080909]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#121514] border border-white/10 py-16 sm:py-20 px-6 sm:px-12 text-center overflow-hidden yellow-glow">
          {/* Subtle golden ambient glow at top center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-60 bg-gradient-to-b from-[#F8E804]/15 via-[#F8E804]/5 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 w-full max-w-none mx-auto flex flex-col items-center">
            {/* Eyebrow */}
            <div className="mb-6">
              <EyebrowBadge text="MOVING FORWARD TOGETHER" dotColor="none" />
            </div>

            {/* Headline */}
            <h2 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white tracking-tight leading-tight mb-4 md:whitespace-nowrap">
              Make local taxi mobility more connected.
            </h2>

            {/* Paragraph */}
            <p className="font-['Poppins'] text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed mb-10 md:whitespace-nowrap">
              Discover how 82 brings practical coordination to existing transport services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asAnchor
                href="/#platform"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} className="text-black" />}
                className="font-bold text-sm sm:text-base px-7 py-3.5"
              >
                Explore 82
              </Button>

              <Button
                asAnchor
                href="/#how-it-works"
                variant="secondary"
                size="lg"
                className="font-medium text-sm sm:text-base px-7 py-3.5"
              >
                See How It Works
              </Button>
            </div>
          </div>
        </div>

        {/* Muted note below CTA card */}
        <p className="text-center font-['Poppins'] text-xs text-neutral-500 mt-6">
          Available for verified transport operators & taxi associations.
        </p>
      </div>
    </section>
  );
};
