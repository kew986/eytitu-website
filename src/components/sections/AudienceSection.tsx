import React from 'react';
import { MapPin, Car, ShieldCheck } from 'lucide-react';
import { EyebrowBadge } from '../ui/EyebrowBadge';

interface AudienceCardData {
  id: string;
  role: string;
  title: string;
  description: string;
  sequence: string[];
  benefit: string;
  icon: React.ReactNode;
}

const audienceData: AudienceCardData[] = [
  {
    id: 'passengers',
    role: 'For Passengers',
    title: 'Find your next taxi with less guesswork.',
    description: 'View eligible options, choose a driver, and follow request updates.',
    sequence: ['Discover', 'Select', 'Request'],
    benefit: 'Zero booking surcharge fees',
    icon: <MapPin size={20} className="text-[#F8E804]" />
  },
  {
    id: 'drivers',
    role: 'For Drivers',
    title: 'Stay informed throughout your working day.',
    description: 'Review vehicle assignments, manage duty, and respond to incoming offers.',
    sequence: ['Start Duty', 'Review', 'Respond'],
    benefit: 'Full control of your shift schedules',
    icon: <Car size={20} className="text-[#F8E804]" />
  },
  {
    id: 'transport-operators',
    role: 'For Transport Operators',
    title: 'Keep your fleet within clearer view.',
    description: 'Coordinate active vehicles, manage driver relationships, and handle operational exceptions.',
    sequence: ['Organize', 'Monitor', 'Coordinate'],
    benefit: 'Safeguarded private administrative database',
    icon: <ShieldCheck size={20} className="text-[#F8E804]" />
  }
];

export const AudienceSection: React.FC = () => {
  return (
    <section id="who-its-for" className="py-20 sm:py-28 bg-[#080909]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="w-full max-w-none mb-12 sm:mb-14">
          <div className="mb-4">
            <EyebrowBadge text="DIFFERENT MOBILITY NEEDS" dotColor="none" />
          </div>

          <h2 className="font-['Manrope'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white tracking-tight leading-tight mb-4 md:whitespace-nowrap">
            A connected experience for everyone involved.
          </h2>

          <p className="font-['Poppins'] text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed md:whitespace-nowrap">
            82 gives each participant relevant tools without compromising individual responsibilities.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {audienceData.map((card) => (
            <div
              key={card.role}
              id={card.id}
              className="scroll-mt-28 p-5 sm:p-6 lg:p-7 rounded-2xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10 hover:border-[#F8E804]/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_25px_rgba(248,232,4,0.06)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top edge amber glow on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F8E804]/0 to-transparent group-hover:via-[#F8E804] transition-all duration-500" />

              <div>
                {/* Header row: Role pill and icon squircle */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#1C201E] border border-white/10 text-[11px] font-mono text-[#F8E804] shadow-sm">
                    {card.role}
                  </span>

                  <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#222824] to-[#151917] border border-white/10 group-hover:border-[#F8E804]/40 flex items-center justify-center shadow-inner transition-colors">
                    {card.icon}
                  </div>
                </div>

                <h3 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-white transition-colors leading-snug">
                  {card.title}
                </h3>

                <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>

              <div>
                {/* Core Action Sequence box with step progression */}
                <div className="p-3.5 rounded-xl bg-[#161B18] border border-white/10 mb-4 group-hover:border-white/15 transition-colors">
                  <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1.5 tracking-wider">
                    Core Action Sequence
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-['Inter'] font-semibold text-white">
                    <span>{card.sequence[0]}</span>
                    <span className="text-[#F8E804] text-[10px]">→</span>
                    <span>{card.sequence[1]}</span>
                    <span className="text-[#F8E804] text-[10px]">→</span>
                    <span>{card.sequence[2]}</span>
                  </div>
                </div>

                {/* Status footer with bullet (strictly single line) */}
                <div className="flex items-center gap-2 text-[11px] sm:text-xs font-['Poppins'] text-neutral-300 whitespace-nowrap min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804] shrink-0" />
                  <span className="leading-tight whitespace-nowrap tracking-tight">{card.benefit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
