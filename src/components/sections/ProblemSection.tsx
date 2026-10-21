import React from 'react';
import { Search, Compass, Gauge } from 'lucide-react';
import { EyebrowBadge } from '../ui/EyebrowBadge';

interface ProblemCard {
  id: string;
  icon: React.ReactNode;
  sector: string;
  title: string;
  description: string;
  painPoint: string;
  number: string;
  bottleneck: [string, string];
}

const problemCards: ProblemCard[] = [
  {
    id: 'passengers',
    icon: <Search size={20} className="text-[#F8E804]" />,
    sector: 'For Passengers',
    title: 'Passengers Lack Clarity',
    description:
      'Finding eligible nearby taxis and understanding request progress can be difficult.',
    painPoint: 'Pain: Street Blindspots',
    number: '01',
    bottleneck: ['Street Guesswork', 'Zero Live ETA']
  },
  {
    id: 'drivers',
    icon: <Compass size={20} className="text-[#F8E804]" />,
    sector: 'For Drivers',
    title: 'Drivers Need Direction',
    description:
      'Unclear assignments and request updates can complicate an otherwise straightforward workday.',
    painPoint: 'Pain: Fragmented Shifts',
    number: '02',
    bottleneck: ['Manual Shifts', 'Uncoordinated Duty']
  },
  {
    id: 'operators',
    icon: <Gauge size={20} className="text-[#F8E804]" />,
    sector: 'For Transport Operators',
    title: 'Operators Need Oversight',
    description:
      'Managing vehicles, drivers, and active duties requires reliable operational information.',
    painPoint: 'Pain: Zero Vehicle Telemetry',
    number: '03',
    bottleneck: ['Zero Telemetry', 'Disconnected Records']
  }
];

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-[#080909] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="w-full max-w-none mb-14 sm:mb-16">
          <div className="mb-4">
            <EyebrowBadge text="WHEN SYSTEMS DISCONNECT" dotColor="none" />
          </div>

          <h2 className="font-['Manrope'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white tracking-tight leading-tight mb-4 md:whitespace-nowrap">
            Moving people becomes harder to coordinate.
          </h2>

          <p className="font-['Poppins'] text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed md:whitespace-nowrap">
            Limited visibility and disconnected workflows create uncertainty across everyday taxi operations.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {problemCards.map((card) => (
            <div
              key={card.id}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10 hover:border-[#F8E804]/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(248,232,4,0.06)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top edge amber glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F8E804]/0 to-transparent group-hover:via-[#F8E804] transition-all duration-500" />

              <div>
                {/* Header row: Sector pill and Icon squircle */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#1C201E] border border-white/10 text-[11px] font-mono text-[#F8E804] shadow-sm">
                    {card.sector}
                  </span>

                  <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#222824] to-[#151917] border border-white/10 group-hover:border-[#F8E804]/40 flex items-center justify-center shadow-inner transition-colors">
                    {card.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-white transition-colors leading-snug">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div>
                {/* Operational Bottleneck Progression Widget */}
                <div className="p-3.5 rounded-xl bg-[#161B18] border border-white/10 mb-4 group-hover:border-white/15 transition-colors">
                  <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1.5 tracking-wider">
                    Operational Bottleneck
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-['Inter'] font-semibold text-white whitespace-nowrap overflow-hidden">
                    <span>{card.bottleneck[0]}</span>
                    <span className="text-[#F8E804] text-[10px]">→</span>
                    <span className="text-neutral-300">{card.bottleneck[1]}</span>
                  </div>
                </div>

                {/* Card Footer Divider & Pain Point with Index */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-neutral-300 whitespace-nowrap min-w-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804] shrink-0" />
                    <span className="font-medium text-neutral-300">{card.painPoint}</span>
                  </div>
                  <span className="text-[#F8E804] font-bold tracking-wider shrink-0 ml-2">{card.number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

