import React from 'react';
import { ArrowRight, CheckCircle2, Wifi, Phone, MessageSquare, ShieldCheck, Share2, Navigation } from 'lucide-react';
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

                    {/* Inside Screen Content: 82 Passenger App */}
                    <div className="flex-1 px-3.5 pt-1 pb-2 flex flex-col gap-2.5 overflow-hidden">
                      
                      {/* App Header (Passenger View) */}
                      <div className="flex items-center justify-between pb-1 pt-0.5 border-b border-neutral-200/80">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-md bg-[#F8E804] flex items-center justify-center font-black text-black text-[10px] shadow-sm">
                            82
                          </div>
                          <span className="font-['Manrope'] text-[12px] font-bold text-neutral-900 tracking-tight">
                            Ride Tracking
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[10px] font-['Inter'] font-semibold text-emerald-700 shadow-sm">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                          </span>
                          <span>Arriving in 3m</span>
                        </div>
                      </div>

                      {/* Map Visualization (Passenger view: clean roads, park, live driver path & pickup beacon) */}
                      <div className="relative w-full flex-1 min-h-[170px] rounded-2xl bg-[#EEF2F6] border border-neutral-200/90 overflow-hidden shadow-sm flex flex-col justify-between p-2.5">
                        {/* Grid texture overlay */}
                        <div className="absolute inset-0 hero-radar-grid-light opacity-50" />

                        <svg
                          className="absolute inset-0 w-full h-full pointer-events-none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Soft green urban park */}
                          <polygon
                            points="15,12 95,8 85,55 12,48"
                            fill="#DCFCE7"
                            stroke="#BBF7D0"
                            strokeWidth="1"
                          />

                          {/* Subtle water canal */}
                          <path
                            d="M 235,-10 C 245,40 225,90 270,140"
                            fill="none"
                            stroke="#DBEAFE"
                            strokeWidth="10"
                            strokeLinecap="round"
                          />

                          {/* Clean road network grid (all paths have explicit fill="none") */}
                          <path
                            d="M -10,38 L 310,38"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M -10,105 L 310,105"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="8"
                            strokeLinecap="round"
                          />
                          <path
                            d="M -10,165 L 310,165"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M 68,-10 L 68,230"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="6"
                            strokeLinecap="round"
                          />
                          <path
                            d="M 175,-10 L 175,230"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="7"
                            strokeLinecap="round"
                          />
                          <path
                            d="M 245,-10 L 245,230"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M -10,150 L 220,15"
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth="5"
                            strokeLinecap="round"
                          />

                          {/* Live Driver Trajectory Route (Rolando's path toward passenger pickup) */}
                          <path
                            d="M 68,38 L 175,38 L 175,105"
                            fill="none"
                            stroke="#F59E0B"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="6,4"
                            className="animate-pulse"
                          />

                          {/* Nearby eligible taxis in zone */}
                          <circle cx="120" cy="38" r="3" fill="#F8E804" stroke="#78350F" strokeWidth="1" />
                          <circle cx="245" cy="70" r="3" fill="#F8E804" stroke="#78350F" strokeWidth="1" />
                          <circle cx="68" cy="180" r="3" fill="#F8E804" stroke="#78350F" strokeWidth="1" />

                          {/* Driver's Taxi Marker at (68, 38) */}
                          <circle cx="68" cy="38" r="13" fill="rgba(248,232,4,0.3)" />
                          <circle cx="68" cy="38" r="6.5" fill="#F8E804" stroke="#78350F" strokeWidth="1.5" />
                          <circle cx="68" cy="38" r="2" fill="#78350F" />

                          {/* Passenger Pickup Pin at (175, 105) */}
                          <circle cx="175" cy="105" r="14" fill="rgba(16,185,129,0.2)" className="animate-ping" />
                          <circle cx="175" cy="105" r="7" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
                          <circle cx="175" cy="105" r="2.5" fill="#FFFFFF" />
                        </svg>

                        {/* Top-Right Mini GPS Action */}
                        <div className="absolute top-2 right-2 flex flex-col gap-1 z-10">
                          <div className="w-6 h-6 rounded-lg bg-white/95 border border-neutral-200/90 shadow-sm flex items-center justify-center text-neutral-600 backdrop-blur-sm">
                            <Navigation size={11} className="rotate-45 text-neutral-700" />
                          </div>
                        </div>

                        {/* Floating Driver ETA Tag */}
                        <div className="absolute top-2 left-2 z-10">
                          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-neutral-900/90 text-white border border-neutral-800 shadow-md backdrop-blur-sm text-[9px] font-['Inter'] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804] animate-ping" />
                            <span>Taxi TX-8241 • 3 min</span>
                          </div>
                        </div>

                        {/* Bottom-Left Passenger Pickup Location Pill */}
                        <div className="relative z-10 mt-auto">
                          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-white/95 border border-neutral-200/90 text-[9px] font-['Inter'] font-semibold text-neutral-800 shadow-sm backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Pickup: Festive Walk, Mandurriao
                          </span>
                        </div>
                      </div>

                      {/* Active Ride Passenger Card */}
                      <div className="p-3 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_4px_16px_-3px_rgba(0,0,0,0.07)] flex flex-col gap-2.5">
                        
                        {/* Status Header & Verification Boarding PIN */}
                        <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                          <div className="flex items-center gap-2">
                            <div className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                            </div>
                            <div>
                              <div className="font-['Manrope'] font-bold text-[11px] text-neutral-900 leading-none">
                                Driver on the way
                              </div>
                              <div className="font-['Inter'] text-[9px] text-neutral-500 mt-0.5">
                                Arriving in ~3 mins (0.8 km)
                              </div>
                            </div>
                          </div>

                          {/* Verification Boarding PIN */}
                          <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-lg text-amber-900">
                            <span className="text-[8px] font-bold uppercase tracking-wider text-amber-700">PIN</span>
                            <span className="font-mono font-extrabold text-[11px] tracking-wider text-amber-950">4821</span>
                          </div>
                        </div>

                        {/* Driver Profile, Vehicle & Contact Actions */}
                        <div className="flex items-center justify-between gap-2">
                          {/* Driver & Car */}
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="relative shrink-0">
                              <div className="w-8 h-8 rounded-full bg-[#F8E804] text-neutral-950 font-['Inter'] font-extrabold text-[11px] flex items-center justify-center shadow-sm border border-neutral-900/10">
                                RM
                              </div>
                              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border border-white flex items-center justify-center text-[7px] text-white font-bold">
                                ✓
                              </div>
                            </div>

                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="font-['Manrope'] text-[11px] font-bold text-neutral-900 truncate">
                                  Rolando M.
                                </span>
                                <span className="flex items-center gap-0.5 text-[9px] font-bold text-amber-700 bg-amber-50 px-1 py-0.5 rounded border border-amber-200/50">
                                  ★ 4.9
                                </span>
                              </div>
                              <div className="font-['Inter'] text-[9px] text-neutral-500 truncate flex items-center gap-1 mt-0.5">
                                <span>White Toyota Vios</span>
                                <span>•</span>
                                <span className="font-mono font-bold text-neutral-800 bg-neutral-100 px-1 py-0.2 rounded border border-neutral-200/60">
                                  TX-8241
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Call & Chat Quick Passenger Buttons */}
                          <div className="flex items-center gap-1.5 shrink-0">
                            <div
                              className="w-7 h-7 rounded-full bg-neutral-100 border border-neutral-200/80 flex items-center justify-center text-neutral-700 shadow-sm hover:bg-neutral-200/70 transition-colors"
                              title="Call driver"
                            >
                              <Phone size={11} />
                            </div>
                            <div
                              className="w-7 h-7 rounded-full bg-neutral-100 border border-neutral-200/80 flex items-center justify-center text-neutral-700 shadow-sm hover:bg-neutral-200/70 transition-colors"
                              title="Message driver"
                            >
                              <MessageSquare size={11} />
                            </div>
                          </div>
                        </div>

                        {/* Destination Route Row */}
                        <div className="p-2 rounded-xl bg-neutral-50/90 border border-neutral-100 flex flex-col gap-1.5">
                          <div className="flex items-center gap-2 text-[9px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span className="text-neutral-500 font-medium shrink-0">Pickup:</span>
                            <span className="font-semibold text-neutral-900 truncate">Festive Walk, Mandurriao</span>
                          </div>
                          <div className="flex items-center gap-2 text-[9px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                            <span className="text-neutral-500 font-medium shrink-0">Dropoff:</span>
                            <span className="font-semibold text-neutral-900 truncate">SM City Iloilo, Diversion Rd</span>
                          </div>
                        </div>

                        {/* Fare Box & Zero-Surge Tag */}
                        <div className="flex items-center justify-between pt-0.5 px-0.5">
                          <div>
                            <div className="text-[8px] font-['Inter'] font-semibold uppercase tracking-wider text-neutral-400">
                              Regulated Fare
                            </div>
                            <div className="font-mono text-[11px] font-extrabold text-neutral-900 leading-tight">
                              ₱140 – ₱165
                            </div>
                          </div>
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-[9px] font-medium">
                            <ShieldCheck size={11} className="text-emerald-600 shrink-0" />
                            <span>Zero Surge Guarantee</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Passenger Actions (Share Trip & Safety Tools) */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-2 rounded-xl bg-white border border-neutral-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] flex items-center justify-center gap-1.5 text-neutral-800 font-['Inter'] text-[10px] font-semibold hover:bg-neutral-50 transition-colors cursor-pointer">
                          <Share2 size={11} className="text-neutral-600" />
                          <span>Share Trip</span>
                        </div>

                        <div className="p-2 rounded-xl bg-white border border-neutral-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] flex items-center justify-center gap-1.5 text-neutral-800 font-['Inter'] text-[10px] font-semibold hover:bg-neutral-50 transition-colors cursor-pointer">
                          <ShieldCheck size={11} className="text-emerald-600" />
                          <span>Safety Tools</span>
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

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
