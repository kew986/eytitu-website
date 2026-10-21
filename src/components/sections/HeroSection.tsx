import React from 'react';
import { ArrowRight, CheckCircle2, Wifi } from 'lucide-react';
import { EyebrowBadge } from '../ui/EyebrowBadge';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-[#080909]"
    >
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#F8E804]/5 via-[#F8E804]/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#F8E804]/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Column: Copy & Actions */}
          <div className="w-full lg:max-w-xl xl:max-w-2xl flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="mb-6">
              <EyebrowBadge text="CONNECTING LOCAL MOBILITY" />
            </div>

            {/* Headline */}
            <h1 className="font-['Manrope'] font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] mb-6">
              One platform. Every <br />
              part of <span className="text-[#F8E804]">the journey.</span>
            </h1>

            {/* Supporting description */}
            <p className="font-['Poppins'] font-normal text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed mb-8 sm:mb-10">
              82 connects passengers, drivers, and taxi operators through a shared mobility network.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 sm:mb-12">
              <Button
                asAnchor
                href="/#how-it-works"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} className="text-black" />}
                className="font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5"
              >
                See How It Works
              </Button>

              <Button
                asAnchor
                href="/#platform"
                variant="secondary"
                size="lg"
                className="font-medium text-sm sm:text-base px-6 sm:px-7 py-3.5"
              >
                Explore the Platform
              </Button>
            </div>

            {/* Proof line / Feature check items */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs sm:text-sm font-['Inter'] text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F8E804] shrink-0" />
                <span>Real-Time Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F8E804] shrink-0" />
                <span>Verified Transfers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F8E804] shrink-0" />
                <span>Secure Records</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic iPhone 14 Pro Mockup housing 82's system */}
          <div className="relative shrink-0 flex flex-col items-center lg:items-end">
            {/* Ambient backlight glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[680px] bg-gradient-to-r from-[#F8E804]/20 via-[#F8E804]/30 to-[#F8E804]/10 blur-3xl opacity-75 -z-10 pointer-events-none" />

            {/* iPhone 14 Pro Outer Shell (Exact 71.5mm x 147.5mm / 1:2.06 ratio) */}
            <div className="relative w-[316px] h-[650px] shrink-0 select-none">
              
              {/* Hardware Physical Buttons (Left side: Mute switch, Vol+, Vol-) */}
              <div className="absolute -left-[3.5px] top-[108px] w-[3.5px] h-[24px] bg-[#353B38] rounded-l-sm" />
              <div className="absolute -left-[3.5px] top-[150px] w-[3.5px] h-[46px] bg-[#353B38] rounded-l-sm" />
              <div className="absolute -left-[3.5px] top-[206px] w-[3.5px] h-[46px] bg-[#353B38] rounded-l-sm" />

              {/* Hardware Physical Buttons (Right side: Power button) */}
              <div className="absolute -right-[3.5px] top-[162px] w-[3.5px] h-[68px] bg-[#353B38] rounded-r-sm" />

              {/* Stainless Steel Outer Edge Frame */}
              <div className="w-full h-full rounded-[50px] bg-gradient-to-b from-[#2D3330] via-[#1E2321] to-[#252A28] p-[3px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(248,232,4,0.12)]">
                {/* Antenna Bands & Inner Chassis Bezel */}
                <div className="w-full h-full rounded-[47px] bg-[#0E1110] p-[7px] border border-white/5 relative flex flex-col">
                  
                  {/* Phone Screen Glass (Light Mode iOS Display) */}
                  <div className="w-full h-full rounded-[40px] bg-[#F8FAFC] border border-black/10 flex flex-col justify-between overflow-hidden relative shadow-inner">
                    
                    {/* Top Status Bar with iPhone 14 Pro Dynamic Island */}
                    <div className="pt-3 px-5 pb-1 relative z-30 flex items-center justify-between">
                      {/* Left: Clock */}
                      <span className="text-[12px] font-semibold text-neutral-900 tracking-tight w-12">
                        9:41
                      </span>

                      {/* Center: Dynamic Island */}
                      <div className="w-[96px] h-[26px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
                        {/* TrueDepth sensor */}
                        <div className="w-2.5 h-2.5 rounded-full bg-[#111614] border border-white/5" />
                        {/* Front Camera with blue/green lens tint */}
                        <div className="w-2.5 h-2.5 rounded-full bg-[#080D0A] flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-[#15231C]" />
                        </div>
                      </div>

                      {/* Right: Cellular, Wifi, Battery */}
                      <div className="flex items-center gap-1.5 w-12 justify-end text-neutral-900">
                        {/* 4-bar cellular */}
                        <div className="flex items-end gap-0.5 h-2.5">
                          <span className="w-0.5 h-1 bg-neutral-900 rounded-full" />
                          <span className="w-0.5 h-1.5 bg-neutral-900 rounded-full" />
                          <span className="w-0.5 h-2 bg-neutral-900 rounded-full" />
                          <span className="w-0.5 h-2.5 bg-neutral-900 rounded-full" />
                        </div>
                        <Wifi size={11} className="text-neutral-900" />
                        {/* iOS Battery icon */}
                        <div className="w-[19px] h-[10px] rounded-[3px] border border-neutral-900/80 p-[1px] flex items-center">
                          <div className="w-full h-full bg-neutral-900 rounded-[1.5px]" />
                        </div>
                      </div>
                    </div>

                    {/* Inside Screen Content: 82 System */}
                    <div className="flex-1 px-3.5 pt-1 pb-2 flex flex-col gap-2.5 overflow-hidden">
                      
                      {/* App Header */}
                      <div className="flex items-center justify-between pb-1 pt-0.5 border-b border-neutral-200/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#F8E804] border border-neutral-900/40 animate-pulse shadow-sm" />
                          <span className="font-['Inter'] text-[11px] font-bold uppercase tracking-wider text-neutral-900">
                            Nearby Eligible Taxis
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] font-['Inter'] font-semibold text-neutral-600 shadow-sm">
                          14 Active
                        </span>
                      </div>

                      {/* Radar/Map Visualization (Takes flex-1 to fill natural space, no dead void) */}
                      <div className="relative w-full flex-1 min-h-[170px] rounded-2xl bg-[#EEF2F6] border border-neutral-200/90 overflow-hidden shadow-sm flex flex-col justify-between p-2.5">
                        {/* Grid texture overlay */}
                        <div className="absolute inset-0 hero-radar-grid-light opacity-60" />

                        {/* Topographic street & river curves + Active Trajectory */}
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Street Grid network (subtle white roads) */}
                          <path
                            d="M -10,48 L 300,48"
                            stroke="#FFFFFF"
                            strokeWidth="5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M -10,135 L 300,105"
                            stroke="#FFFFFF"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M 75,-10 L 75,220"
                            stroke="#FFFFFF"
                            strokeWidth="4"
                          />
                          <path
                            d="M 205,-10 L 195,220"
                            stroke="#FFFFFF"
                            strokeWidth="5"
                          />
                          <path
                            d="M -10,185 Q 120,150 300,195"
                            stroke="#FFFFFF"
                            strokeWidth="5"
                          />

                          {/* Subtle Metro Zone Polygon */}
                          <polygon
                            points="30,40 160,25 240,80 180,150 60,130"
                            fill="rgba(248,232,4,0.06)"
                            stroke="rgba(217,119,6,0.18)"
                            strokeWidth="1"
                            strokeDasharray="4,3"
                          />

                          {/* Active Trajectory Line */}
                          <path
                            d="M 52,118 Q 120,68 198,48"
                            fill="none"
                            stroke="#D97706"
                            strokeWidth="2.5"
                            strokeDasharray="5,4"
                            className="animate-pulse"
                          />

                          {/* Target Beacon (Rolando's Taxi) */}
                          <circle cx="52" cy="118" r="11" fill="rgba(248,232,4,0.3)" stroke="#D97706" strokeWidth="1.5" />
                          <circle cx="52" cy="118" r="4.5" fill="#F8E804" stroke="#78350F" strokeWidth="1" />

                          {/* Destination Beacon (Passenger Unit) */}
                          <circle cx="198" cy="48" r="13" fill="rgba(217,119,6,0.18)" />
                          <circle cx="198" cy="48" r="6" fill="rgba(217,119,6,0.3)" />
                          <circle cx="198" cy="48" r="3.5" fill="#D97706" />

                          {/* Other Available Taxi Points */}
                          <circle cx="140" cy="35" r="3.5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1" />
                          <circle cx="235" cy="115" r="3.5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1" />
                          <circle cx="115" cy="165" r="3" fill="#64748B" stroke="#FFFFFF" strokeWidth="0.8" />
                          <circle cx="215" cy="160" r="3" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1" />
                        </svg>

                        {/* Top-Right Mini Zoom Controls */}
                        <div className="absolute top-2 right-2 flex flex-col rounded-md bg-white/95 border border-neutral-200/90 shadow-sm backdrop-blur-sm divide-y divide-neutral-100 text-neutral-600 font-bold text-[10px]">
                          <span className="w-5 h-5 flex items-center justify-center hover:bg-neutral-50 cursor-default">+</span>
                          <span className="w-5 h-5 flex items-center justify-center hover:bg-neutral-50 cursor-default">−</span>
                        </div>

                        {/* Bottom-Left Sector Tag */}
                        <div className="relative z-10 mt-auto">
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/95 border border-neutral-200 text-[9px] font-mono text-neutral-800 shadow-sm backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Sector 4: Makati – Taguig
                          </span>
                        </div>
                      </div>

                      {/* Active Transfer Card */}
                      <div className="p-3 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_4px_14px_-3px_rgba(0,0,0,0.06)] flex flex-col gap-2">
                        {/* Header Status Row */}
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-['Inter'] text-neutral-500 font-semibold uppercase tracking-wider text-[9px]">
                            Active Transfer
                          </span>
                          <span className="flex items-center gap-1.5 text-amber-700 font-semibold font-['Inter'] text-[10px] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
                            </span>
                            Dispatch In Progress
                          </span>
                        </div>

                        {/* Driver & Vehicle Row */}
                        <div className="flex items-center justify-between gap-2 pb-2 border-b border-neutral-100">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-7 h-7 rounded-full bg-[#F8E804] text-neutral-950 font-['Inter'] font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-sm border border-neutral-900/10">
                              RM
                            </div>
                            <div className="min-w-0">
                              <div className="font-['Inter'] text-[11px] font-bold text-neutral-900 truncate leading-tight">
                                Rolando M.
                              </div>
                              <div className="font-mono text-[9px] text-neutral-500 truncate">
                                Toyota Vios • <span className="text-neutral-700 font-medium">TX-8241</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 text-[9px] font-mono text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-200/60 shrink-0">
                            <span>★</span>
                            <span className="font-bold text-neutral-700">4.9</span>
                          </div>
                        </div>

                        {/* Route Path (Makati -> NAIA) */}
                        <div className="flex items-center justify-between text-[10px] pt-0.5">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span className="font-semibold text-neutral-800 font-['Inter'] truncate text-[10px]">Makati CBD</span>
                          </div>

                          <div className="flex items-center gap-1 text-neutral-400 px-1 shrink-0">
                            <span className="text-[8px] font-mono font-medium text-neutral-400">3.8 km</span>
                            <ArrowRight size={10} className="text-neutral-400" />
                          </div>

                          <div className="flex items-center gap-1.5 min-w-0 justify-end">
                            <span className="font-semibold text-neutral-800 font-['Inter'] truncate text-[10px]">NAIA Terminal</span>
                            <div className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-700 font-['Inter'] font-bold text-[9px] flex items-center justify-center shrink-0 border border-neutral-300">
                              PA
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Duty & Fleet Telemetry Two Columns */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 rounded-xl bg-white border border-neutral-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] flex flex-col justify-between">
                          <div className="text-[9px] font-['Inter'] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                            Duty Status
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] font-['Inter'] font-bold text-neutral-900">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                            <span className="truncate">Online & Ready</span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-white border border-neutral-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] flex flex-col justify-between">
                          <div className="text-[9px] font-['Inter'] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                            Fleet Telemetry
                          </div>
                          <div className="font-mono text-[11px] font-bold text-neutral-900 leading-tight">
                            <span className="text-amber-600">38</span>
                            <span className="text-neutral-400 font-normal text-[10px]"> / 42 Active</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom iOS Home Indicator Bar */}
                    <div className="pb-2 pt-1 flex justify-center">
                      <div className="w-32 h-1 bg-neutral-900/25 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill Badge Overlapping Below Phone */}
              <div className="flex justify-center -mt-3.5 relative z-40">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#181C1B] border border-white/15 text-[10px] font-mono text-neutral-300 shadow-xl backdrop-blur-md">
                  <span>🇵🇭</span>
                  <span>Philippines Mobility Node 01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
