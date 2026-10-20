import React from 'react';
import { EyebrowBadge } from '../ui/EyebrowBadge';

export const AudienceSection: React.FC = () => {
  return (
    <section id="who-its-for" className="py-20 sm:py-28 bg-[#080909]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="mb-4">
            <EyebrowBadge text="DIFFERENT MOBILITY NEEDS" dotColor="none" />
          </div>

          <h2 className="font-['Manrope'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            A connected experience for everyone involved.
          </h2>

          <p className="font-['Poppins'] text-base sm:text-lg text-neutral-400 leading-relaxed">
            82 gives each participant relevant tools without compromising
            individual responsibilities.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Passengers */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#1C201E] border border-white/10 text-[11px] font-mono text-[#F8E804] mb-5">
                For Passengers
              </div>

              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-3">
                Find your next taxi with less guesswork.
              </h3>

              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-8">
                View eligible options, choose a driver, and follow request updates.
              </p>
            </div>

            <div>
              {/* Action Sequence box */}
              <div className="p-3.5 rounded-xl bg-[#181C1A] border border-white/10 mb-4">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                  Core Action Sequence
                </div>
                <div className="text-xs font-['Inter'] font-semibold text-white">
                  Discover · Select · Request
                </div>
              </div>

              {/* Status footer */}
              <div className="flex items-center gap-2 text-xs font-['Poppins'] text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804]" />
                <span>Zero booking surcharge fees</span>
              </div>
            </div>
          </div>

          {/* Card 2: Drivers (with atmospheric background) */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            {/* Dark Driver Cabin Background with overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
              style={{ backgroundImage: 'url("/driver-bg.png")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131615] via-[#131615]/80 to-[#131615]/60 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-[#1C201E]/90 border border-white/10 text-[11px] font-mono text-[#F8E804] mb-5">
                For Drivers
              </div>

              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-3">
                Stay informed throughout your working day.
              </h3>

              <p className="font-['Poppins'] text-sm text-neutral-300 leading-relaxed mb-8">
                Review vehicle assignments, manage duty, and respond to incoming offers.
              </p>
            </div>

            <div className="relative z-10">
              {/* Action Sequence box */}
              <div className="p-3.5 rounded-xl bg-[#181C1A]/90 backdrop-blur-sm border border-white/10 mb-4">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                  Core Action Sequence
                </div>
                <div className="text-xs font-['Inter'] font-semibold text-white">
                  Start Duty · Review · Respond
                </div>
              </div>

              {/* Status footer */}
              <div className="flex items-center gap-2 text-xs font-['Poppins'] text-neutral-200">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804]" />
                <span>Full control of your shift schedules</span>
              </div>
            </div>
          </div>

          {/* Card 3: Operators */}
          <div className="p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#1C201E] border border-white/10 text-[11px] font-mono text-[#F8E804] mb-5">
                For Transport Operators
              </div>

              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-3">
                Keep your fleet within clearer view.
              </h3>

              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-8">
                Coordinate active vehicles, manage driver relationships, and handle operational exceptions.
              </p>
            </div>

            <div>
              {/* Action Sequence box */}
              <div className="p-3.5 rounded-xl bg-[#181C1A] border border-white/10 mb-4">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                  Core Action Sequence
                </div>
                <div className="text-xs font-['Inter'] font-semibold text-white">
                  Organize · Monitor · Coordinate
                </div>
              </div>

              {/* Status footer */}
              <div className="flex items-center gap-2 text-xs font-['Poppins'] text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804]" />
                <span>Safeguarded private administrative database</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
