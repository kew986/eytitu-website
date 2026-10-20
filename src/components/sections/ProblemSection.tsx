import React from 'react';
import { Search, Compass, Gauge } from 'lucide-react';
import { EyebrowBadge } from '../ui/EyebrowBadge';

interface ProblemCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  painPoint: string;
  number: string;
}

const problemCards: ProblemCard[] = [
  {
    id: 'passengers',
    icon: <Search size={20} className="text-[#F8E804]" />,
    title: 'Passengers Lack Clarity',
    description:
      'Finding eligible nearby taxis and understanding request progress can be difficult.',
    painPoint: 'Pain: Street Blindspots',
    number: '01'
  },
  {
    id: 'drivers',
    icon: <Compass size={20} className="text-[#F8E804]" />,
    title: 'Drivers Need Direction',
    description:
      'Unclear assignments and request updates can complicate an otherwise straightforward workday.',
    painPoint: 'Pain: Fragmented Shifts',
    number: '02'
  },
  {
    id: 'operators',
    icon: <Gauge size={20} className="text-[#F8E804]" />,
    title: 'Operators Need Oversight',
    description:
      'Managing vehicles, drivers, and active duties requires reliable operational information.',
    painPoint: 'Pain: Zero Vehicle Telemetry',
    number: '03'
  }
];

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 bg-[#080909] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="mb-4">
            <EyebrowBadge text="WHEN SYSTEMS DISCONNECT" dotColor="none" />
          </div>

          <h2 className="font-['Manrope'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            Moving people becomes harder to coordinate.
          </h2>

          <p className="font-['Poppins'] text-base sm:text-lg text-neutral-400 leading-relaxed">
            Limited visibility and disconnected workflows create uncertainty across everyday taxi operations.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-y-[-2px] group"
            >
              <div>
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-[#1D211F] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#F8E804]/40 transition-colors">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-['Manrope'] font-bold text-xl text-white mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              {/* Card Footer Divider & Pain Point */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">{card.painPoint}</span>
                <span className="text-[#F8E804] font-bold">{card.number}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
