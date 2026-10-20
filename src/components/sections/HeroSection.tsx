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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
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
                href="#how-it-works"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} className="text-black" />}
                className="font-bold text-sm sm:text-base px-6 sm:px-7 py-3.5"
              >
                See How It Works
              </Button>

              <Button
                asAnchor
                href="#platform"
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
          <div className="lg:col-span-5 relative w-full flex flex-col items-center">
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
                  
                  {/* Phone Screen Glass (OLED Display) */}
                  <div className="w-full h-full rounded-[40px] bg-[#0B0D0C] border border-white/10 flex flex-col justify-between overflow-hidden relative shadow-inner">
                    
                    {/* Top Status Bar with iPhone 14 Pro Dynamic Island */}
                    <div className="pt-3 px-5 pb-1 relative z-30 flex items-center justify-between">
                      {/* Left: Clock */}
                      <span className="text-[12px] font-semibold text-white tracking-tight w-12">
                        9:41
                      </span>

                      {/* Center: Dynamic Island */}
                      <div className="w-[100px] h-[27px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
                        {/* TrueDepth sensor */}
                        <div className="w-2.5 h-2.5 rounded-full bg-[#111614] border border-white/5" />
                        {/* Front Camera with blue/green lens tint */}
                        <div className="w-2.5 h-2.5 rounded-full bg-[#080D0A] flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-[#15231C]" />
                        </div>
                      </div>

                      {/* Right: Cellular, Wifi, Battery */}
                      <div className="flex items-center gap-1.5 w-12 justify-end text-white">
                        {/* 4-bar cellular */}
                        <div className="flex items-end gap-0.5 h-2.5">
                          <span className="w-0.5 h-1 bg-white rounded-full" />
                          <span className="w-0.5 h-1.5 bg-white rounded-full" />
                          <span className="w-0.5 h-2 bg-white rounded-full" />
                          <span className="w-0.5 h-2.5 bg-white rounded-full" />
                        </div>
                        <Wifi size={11} className="text-white" />
                        {/* iOS Battery icon */}
                        <div className="w-[19px] h-[10px] rounded-[3px] border border-white/80 p-[1px] flex items-center">
                          <div className="w-full h-full bg-white rounded-[1.5px]" />
                        </div>
                      </div>
                    </div>

                    {/* Inside Screen Content: 82 System */}
                    <div className="flex-1 px-3 py-1 flex flex-col justify-between overflow-hidden">
                      
                      {/* App Header */}
                      <div className="flex items-center justify-between py-1.5 border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#F8E804] animate-pulse" />
                          <span className="font-['Inter'] text-[11px] font-bold uppercase tracking-wider text-neutral-200">
                            NEARBY ELIGIBLE TAXIS
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-['Inter'] font-medium text-neutral-300">
                          Active: 14 in Metro Sector
                        </span>
                      </div>

                      {/* Radar/Map Visualization */}
                      <div className="relative w-full h-36 rounded-xl bg-[#090B0A] border border-white/10 overflow-hidden p-2 flex flex-col justify-between">
                        {/* Grid texture overlay */}
                        <div className="absolute inset-0 hero-radar-grid opacity-60" />

                        {/* Topographic contour curves & Active Hailing Trajectory */}
                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M 0,35 Q 90,70 180,35 T 320,50"
                            fill="none"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M 0,70 Q 120,110 240,60 T 320,95"
                            fill="none"
                            stroke="rgba(255,255,255,0.08)"
                            strokeWidth="1.5"
                          />

                          {/* Active Trajectory */}
                          <path
                            d="M 55,95 Q 140,50 230,36"
                            fill="none"
                            stroke="#F8E804"
                            strokeWidth="2.5"
                            strokeDasharray="5,4"
                            className="animate-pulse"
                          />

                          {/* Target Beacon */}
                          <circle cx="65" cy="88" r="9" fill="rgba(248,232,4,0.2)" stroke="#F8E804" strokeWidth="1.5" />
                          <circle cx="65" cy="88" r="3.5" fill="#F8E804" />

                          {/* Nearby Taxi Points */}
                          <circle cx="230" cy="36" r="3.5" fill="#F8E804" />
                          <circle cx="250" cy="98" r="3" fill="#F8E804" />
                          <circle cx="150" cy="98" r="2.5" fill="rgba(255,255,255,0.7)" />

                          {/* Zone area indicator */}
                          <ellipse cx="170" cy="68" rx="22" ry="9" fill="rgba(248,232,4,0.15)" />
                        </svg>

                        {/* Sector Tag */}
                        <div className="relative z-10 mt-auto">
                          <span className="inline-block px-2 py-0.5 rounded bg-[#161918]/90 border border-white/10 text-[9px] font-mono text-neutral-300">
                            Sector 4: Makati – Taguig
                          </span>
                        </div>
                      </div>

                      {/* Active Transfer Card */}
                      <div className="p-2.5 rounded-xl bg-[#141816] border border-white/10">
                        <div className="flex items-center justify-between text-[10px] mb-1.5">
                          <span className="font-['Inter'] text-neutral-400 font-medium">
                            Active Transfer
                          </span>
                          <span className="flex items-center gap-1.5 text-[#F8E804] font-medium font-['Inter'] text-[10px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804] animate-ping" />
                            Dispatch In Progress
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-1.5">
                          {/* Driver Unit */}
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-[#F8E804] text-black font-['Inter'] font-extrabold text-[11px] flex items-center justify-center shrink-0 shadow-sm">
                              RM
                            </div>
                            <div>
                              <div className="font-['Inter'] text-[11px] font-semibold text-white leading-tight">
                                Rolando M.
                              </div>
                              <div className="font-mono text-[9px] text-neutral-400">
                                Toyota Vios (TX-8241)
                              </div>
                            </div>
                          </div>

                          {/* Direction Arrow */}
                          <ArrowRight size={12} className="text-neutral-500 shrink-0" />

                          {/* Passenger Unit */}
                          <div className="flex items-center gap-2 text-right">
                            <div>
                              <div className="font-['Inter'] text-[11px] font-semibold text-white leading-tight">
                                Passenger Unit
                              </div>
                              <div className="font-mono text-[9px] text-neutral-400">
                                Makati CBD -&gt; NAIA
                              </div>
                            </div>
                            <div className="w-7 h-7 rounded-full bg-[#2A2F2D] text-white/90 font-['Inter'] font-bold text-[11px] flex items-center justify-center shrink-0 border border-white/10">
                              PA
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Duty & Fleet Telemetry Two Columns */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded-xl bg-[#141816] border border-white/10">
                          <div className="text-[9px] font-['Inter'] font-bold uppercase tracking-wider text-neutral-400 mb-0.5">
                            DUTY STATUS
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] font-['Inter'] font-medium text-white">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804]" />
                            Online & Registered
                          </div>
                        </div>

                        <div className="p-2 rounded-xl bg-[#141816] border border-white/10">
                          <div className="text-[9px] font-['Inter'] font-bold uppercase tracking-wider text-neutral-400 mb-0.5">
                            FLEET TELEMETRY
                          </div>
                          <div className="font-mono text-[10px] font-bold text-[#F8E804]">
                            38 Active <span className="text-neutral-400 font-normal">/ 42 Total</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom iOS Home Indicator Bar */}
                    <div className="pb-2 pt-1 flex justify-center">
                      <div className="w-32 h-1 bg-white/40 rounded-full" />
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
