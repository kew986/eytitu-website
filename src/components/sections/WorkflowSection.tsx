import React from 'react';
import { EyebrowBadge } from '../ui/EyebrowBadge';

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const steps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Prepare the Fleet',
    description:
      'Operators register vehicles, invite drivers, and establish temporary assignments.',
    isHighlighted: true
  },
  {
    number: '02',
    title: 'Begin Active Duty',
    description:
      'Drivers start their shifts while eligible vehicles become publicly discoverable.'
  },
  {
    number: '03',
    title: 'Find a Taxi',
    description:
      'Passengers view nearby eligible supply and choose a driver.'
  },
  {
    number: '04',
    title: 'Confirm the Request',
    description:
      'The selected driver reviews the offer and decides whether to accept.'
  },
  {
    number: '05',
    title: 'Complete the Journey',
    description:
      'Both sides follow trip progress until a clear outcome is recorded.',
    isHighlighted: true
  }
];

export const WorkflowSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#080909]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="mb-4">
            <EyebrowBadge text="FROM FLEET PREPARATION" dotColor="none" />
          </div>

          <h2 className="font-['Manrope'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            Every journey follows a clearer process.
          </h2>

          <p className="font-['Poppins'] text-base sm:text-lg text-neutral-400 leading-relaxed">
            Each participant takes a defined action, from vehicle assignment
            through trip completion.
          </p>
        </div>

        {/* 5 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Circle Badge */}
                <div className="mb-6">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                      step.isHighlighted
                        ? 'border-2 border-[#F8E804] text-[#F8E804] bg-[#F8E804]/5 shadow-[0_0_15px_rgba(248,232,4,0.15)]'
                        : 'border border-white/15 text-neutral-400 bg-[#1A1E1D]'
                    }`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-['Manrope'] font-bold text-lg text-white mb-2.5">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="font-['Poppins'] text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
