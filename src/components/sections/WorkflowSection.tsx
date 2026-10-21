import React from 'react';
import { Car, Radio, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { EyebrowBadge } from '../ui/EyebrowBadge';

interface WorkflowStep {
  number: string;
  role: string;
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
}

const steps: WorkflowStep[] = [
  {
    number: '01',
    role: 'Operator',
    title: 'Prepare the Fleet',
    description: 'Operators register vehicles, invite drivers, and establish temporary assignments.',
    tag: '1:1 Custody Lock',
    icon: <Car size={18} className="text-[#F8E804]" />
  },
  {
    number: '02',
    role: 'Driver',
    title: 'Begin Active Duty',
    description: 'Drivers start their shifts while eligible vehicles become publicly discoverable.',
    tag: 'Signal Mesh Live',
    icon: <Radio size={18} className="text-[#F8E804]" />
  },
  {
    number: '03',
    role: 'Passenger',
    title: 'Find a Taxi',
    description: 'Passengers view nearby eligible supply and choose a driver.',
    tag: 'No Account Needed',
    icon: <MapPin size={18} className="text-[#F8E804]" />
  },
  {
    number: '04',
    role: 'Dispatch',
    title: 'Confirm the Request',
    description: 'The selected driver reviews the offer and decides whether to accept.',
    tag: 'Direct Driver Choice',
    icon: <ArrowRight size={18} className="text-[#F8E804]" />
  },
  {
    number: '05',
    role: 'Regulator',
    title: 'Complete the Journey',
    description: 'Both sides follow trip progress until a clear outcome is recorded.',
    tag: 'Regulated Meter Vault',
    icon: <ShieldCheck size={18} className="text-[#F8E804]" />
  }
];

export const WorkflowSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#080909]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="w-full max-w-none mb-12 sm:mb-14">
          <div className="mb-4">
            <EyebrowBadge text="FROM FLEET PREPARATION" dotColor="none" />
          </div>

          <h2 className="font-['Manrope'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white tracking-tight leading-tight mb-4 md:whitespace-nowrap">
            Every journey follows a clearer process.
          </h2>

          <p className="font-['Poppins'] text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed md:whitespace-nowrap">
            Each participant takes a defined action, from vehicle assignment through trip completion.
          </p>
        </div>

        {/* 5 Step Connected Workflow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="p-5 rounded-2xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10 hover:border-[#F8E804]/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(248,232,4,0.06)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F8E804]/0 to-transparent group-hover:via-[#F8E804] transition-all duration-500" />

              <div>
                {/* Step Top Bar: Role Tag & Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-0.5 rounded-md bg-[#1B211E] border border-white/10 text-[9px] font-mono text-neutral-300 uppercase tracking-wider">
                    {step.role}
                  </span>

                  <span className="w-7 h-7 rounded-full bg-[#1A1F1D] border border-[#F8E804]/40 text-[#F8E804] text-[10px] font-mono font-bold flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {step.number}
                  </span>
                </div>

                {/* Step Icon Squircle */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#222824] to-[#151917] border border-white/10 group-hover:border-[#F8E804]/40 flex items-center justify-center shadow-inner mb-4 transition-colors">
                  {step.icon}
                </div>

                {/* Step Title */}
                <h3 className="font-['Manrope'] font-bold text-base text-white mb-2 group-hover:text-[#F8E804] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="font-['Poppins'] text-xs text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Anchor Strip (Eliminates Empty Space) */}
              <div className="pt-3.5 mt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804]" />
                  <span>{step.tag}</span>
                </span>
                {idx < steps.length - 1 && (
                  <span className="text-neutral-500 hidden lg:inline">→</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
