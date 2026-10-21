import React, { useState } from 'react';
import { Car, MapPin, ShieldCheck, Check, Wifi, Lock, ArrowRight } from 'lucide-react';
import { EyebrowBadge } from '../ui/EyebrowBadge';

type TabKey = 'universal' | 'map' | 'fleet';

interface TabConfig {
  key: TabKey;
  label: string;
}

const tabs: TabConfig[] = [
  { key: 'universal', label: 'Universal App' },
  { key: 'map', label: 'Public Mobility Map' },
  { key: 'fleet', label: 'Fleet Console' }
];

export const ProductShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('universal');
  const [requestStatus, setRequestStatus] = useState<'pending' | 'accepted' | 'declined'>('pending');

  return (
    <section id="platform" className="py-20 sm:py-28 bg-[#080909]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="w-full max-w-none mb-12 sm:mb-14">
          <div className="mb-4">
            <EyebrowBadge text="EXPLORE THE PLATFORM" dotColor="none" />
          </div>

          <h2 className="font-['Manrope'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white tracking-tight leading-tight mb-4 md:whitespace-nowrap">
            The right tools for every responsibility.
          </h2>

          <p className="font-['Poppins'] text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed md:whitespace-nowrap">
            Three connected experiences support mobility without exposing unnecessary operational information.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-['Inter'] font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#F8E804] text-black shadow-md'
                    : 'bg-[#1C201E] text-neutral-300 hover:text-white hover:bg-[#252B28] border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Container */}
        <div className="rounded-3xl bg-[#121514] border border-white/10 p-6 sm:p-10 lg:p-12 relative overflow-hidden transition-all duration-300">
          {/* Subtle background gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F8E804]/5 blur-[120px] pointer-events-none" />

          {/* TAB 1: Universal App */}
          {activeTab === 'universal' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h3 className="font-['Manrope'] font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4">
                  Universal App
                </h3>

                <p className="font-['Poppins'] text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
                  Access passenger journeys, driver duties, and mobile operator workflows in one Android app.
                </p>

                {/* Role Switcher Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <span className="px-3 py-1 rounded-full bg-[#F8E804] text-black text-xs font-bold font-['Inter'] shadow-sm">
                    Passenger Mode
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1C201E] border border-white/10 text-neutral-300 text-xs font-medium font-['Inter']">
                    Driver Console
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1C201E] border border-white/10 text-neutral-300 text-xs font-medium font-['Inter']">
                    Operator Dispatch
                  </span>
                </div>

                {/* Feature Checklist Cards */}
                <div className="space-y-3 text-xs sm:text-sm font-['Inter']">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#F8E804]" />
                    </span>
                    <div>
                      <div className="text-white font-semibold">Instant Role-Switching</div>
                      <div className="text-neutral-400 text-xs mt-0.5">
                        Seamlessly switch roles with verified identity credentials in a single install.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#F8E804]" />
                    </span>
                    <div>
                      <div className="text-white font-semibold">Ultra-Low Bandwidth Mode</div>
                      <div className="text-neutral-400 text-xs mt-0.5">
                        Engineered for erratic cellular coverage across Metro Manila corridors with offline queues.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#F8E804]" />
                    </span>
                    <div>
                      <div className="text-white font-semibold">Transparent Fare & Verification</div>
                      <div className="text-neutral-400 text-xs mt-0.5">
                        Direct regulated meter benchmarks with immutable cryptographic proof of assignment.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dedicated Page Detail Link */}
                <div className="pt-6 border-t border-white/10 mt-6">
                  <a
                    href="/platform/universal-app"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-['Inter'] font-semibold text-[#F8E804] hover:text-[#faed36] transition-colors group cursor-pointer"
                  >
                    <span>Read full Universal App specifications</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Column: Realistic iPhone 14 Pro Mockup */}
              <div className="lg:col-span-6 flex justify-center items-center py-2">
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
                          <div className="w-[96px] h-[26px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
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

                        {/* Inside Screen Content */}
                        {/* Inside Screen Content (Mobile Driver Console) */}
                        <div className="flex-1 px-3 pt-1 pb-2 flex flex-col gap-2 overflow-hidden">
                          {/* App Header */}
                          <div className="flex items-center justify-between py-1 border-b border-white/10 shrink-0">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded bg-[#F8E804] text-black font-extrabold flex items-center justify-center text-[10px] font-['Manrope'] shadow-sm">
                                82
                              </div>
                              <div className="font-['Manrope'] font-bold text-xs text-white">
                                Mobile Console
                              </div>
                            </div>
                            <span className="px-2 py-0.5 rounded-full bg-[#1F2522] border border-[#F8E804]/30 text-[9px] font-mono text-[#F8E804] flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Manila Live
                            </span>
                          </div>

                          {/* Assigned Vehicle Card */}
                          <div className="p-2.5 rounded-xl bg-[#141816] border border-white/10 shrink-0">
                            <div className="flex items-center justify-between text-[10px] mb-0.5">
                              <span className="text-neutral-400 font-['Inter'] uppercase tracking-wider font-semibold text-[8px]">
                                Assigned Vehicle
                              </span>
                              <span className="font-mono font-bold text-[#F8E804] text-[11px]">
                                TX-8241
                              </span>
                            </div>
                            <div className="text-[11px] font-bold text-white mb-1 leading-tight">
                              Toyota Vios 1.3E · Metro Express Fleet
                            </div>
                            <div className="flex items-center justify-between text-[10px] pt-1 border-t border-white/5">
                              <span className="flex items-center gap-1.5 text-neutral-300 font-['Inter'] text-[9px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                On Duty (Rolando M.)
                              </span>
                              <button
                                type="button"
                                className="px-2 py-0.5 rounded bg-[#222825] text-[8px] text-neutral-300 hover:text-white border border-white/10 font-mono transition-colors"
                              >
                                End Shift
                              </button>
                            </div>
                          </div>

                          {/* Incoming Dispatch Hero Card with Expansive GPS Route Map */}
                          <div className="flex-1 p-2.5 rounded-2xl bg-gradient-to-b from-[#1C221F] to-[#141716] border border-[#F8E804]/40 relative shadow-[0_0_20px_rgba(248,232,4,0.06)] flex flex-col justify-between overflow-hidden">
                            {/* Card Header */}
                            <div className="flex items-center justify-between mb-1.5 shrink-0">
                              <div className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8E804] opacity-75" />
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F8E804]" />
                                </span>
                                <span className="font-mono text-[9px] font-bold text-[#F8E804] uppercase tracking-wider">
                                  INCOMING DISPATCH
                                </span>
                              </div>
                              <span className="px-2 py-0.5 rounded-full bg-[#F8E804] text-black font-mono text-[9px] font-bold shadow-sm">
                                350m Away
                              </span>
                            </div>

                            {/* Expansive Route GPS Map Viewport (Fills center naturally) */}
                            <div className="flex-1 min-h-[140px] w-full rounded-xl bg-[#080B0A] border border-white/10 relative overflow-hidden flex flex-col justify-between p-2 hero-radar-grid my-1">
                              {/* Vector Streets & Trajectory Arc */}
                              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M -10,35 L 320,35" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                                <path d="M -10,110 L 320,95" stroke="rgba(255,255,255,0.07)" strokeWidth="5" />
                                <path d="M 70,-10 L 70,180" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                                <path d="M 210,-10 L 195,180" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                                
                                {/* Trajectory Curve */}
                                <path
                                  d="M 45,95 Q 120,25 220,55"
                                  fill="none"
                                  stroke="#F8E804"
                                  strokeWidth="2.5"
                                  strokeDasharray="5,4"
                                  className="animate-pulse"
                                />
                                {/* Pickup Beacon (Ayala) */}
                                <circle cx="45" cy="95" r="9" fill="rgba(248,232,4,0.25)" stroke="#F8E804" strokeWidth="1.5" />
                                <circle cx="45" cy="95" r="3.5" fill="#F8E804" />
                                
                                {/* Dropoff Beacon (BGC) */}
                                <circle cx="220" cy="55" r="9" fill="rgba(16,185,129,0.25)" stroke="#10B981" strokeWidth="1.5" />
                                <circle cx="220" cy="55" r="3.5" fill="#10B981" />
                              </svg>

                              {/* Top Map HUD */}
                              <div className="relative z-10 flex justify-between items-center text-[8px] font-mono">
                                <span className="px-1.5 py-0.5 rounded bg-black/80 text-neutral-300 border border-white/10 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804]" />
                                  <span>Ayala Ave Hub</span>
                                </span>
                                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                  <span>Market! Market!</span>
                                </span>
                              </div>

                              {/* Bottom Map HUD (Distance & ETA) */}
                              <div className="relative z-10 flex justify-between items-center text-[8px] font-mono">
                                <span className="px-1.5 py-0.5 rounded bg-black/80 text-white border border-white/10 font-bold">
                                  4.2 km • Est. 14 mins
                                </span>
                                <span className="px-1.5 py-0.5 rounded bg-black/80 text-emerald-400 border border-white/10">
                                  Est. ₱185 Meter
                                </span>
                              </div>
                            </div>

                            {/* Route Addresses */}
                            <div className="space-y-1 text-[10px] my-1 shrink-0">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#F8E804] shrink-0" />
                                <span className="text-neutral-400 text-[9px]">Pickup:</span>
                                <span className="text-white font-semibold truncate text-[10px]">Ayala Ave cor. Paseo</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                                <span className="text-neutral-400 text-[9px]">Dropoff:</span>
                                <span className="text-white font-semibold truncate text-[10px]">Market! Market!, BGC</span>
                              </div>
                            </div>

                            {/* Fare Trust Strip */}
                            <div className="px-2 py-1 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[8px] font-mono text-neutral-300 mb-1.5 shrink-0">
                              <span>Regulated Metro Meter</span>
                              <span className="text-emerald-400 font-semibold">Zero Surge</span>
                            </div>

                            {/* Accept / Decline Action Buttons */}
                            {requestStatus === 'pending' ? (
                              <div className="grid grid-cols-2 gap-2 shrink-0">
                                <button
                                  type="button"
                                  onClick={() => setRequestStatus('declined')}
                                  className="py-2 rounded-xl bg-[#242A27] text-neutral-300 text-[11px] font-semibold hover:bg-[#303834] transition-colors border border-white/5 cursor-pointer"
                                >
                                  Decline
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setRequestStatus('accepted')}
                                  className="py-2 rounded-xl bg-[#F8E804] text-black text-[11px] font-bold hover:bg-[#faed36] transition-colors shadow-sm cursor-pointer"
                                >
                                  Accept Trip
                                </button>
                              </div>
                            ) : (
                              <div
                                className={`py-2 px-2.5 rounded-xl text-center text-[10px] font-bold shrink-0 ${
                                  requestStatus === 'accepted'
                                    ? 'bg-[#F8E804]/15 text-[#F8E804] border border-[#F8E804]/40'
                                    : 'bg-neutral-800 text-neutral-400'
                                }`}
                              >
                                {requestStatus === 'accepted'
                                  ? '✓ Trip Accepted — En Route to Pickup'
                                  : 'Trip Declined'}
                                <button
                                  type="button"
                                  onClick={() => setRequestStatus('pending')}
                                  className="block mx-auto mt-0.5 text-[8px] text-neutral-400 underline hover:text-white cursor-pointer"
                                >
                                  Reset Demo
                                </button>
                              </div>
                            )}
                          </div>

                          {/* Stats Row */}
                          <div className="grid grid-cols-2 gap-2 shrink-0">
                            <div className="p-2 rounded-xl bg-[#141816] border border-white/10">
                              <div className="text-[8px] font-['Inter'] text-neutral-400 mb-0.5 uppercase tracking-wider">
                                Completed Today
                              </div>
                              <div className="text-[11px] font-bold text-white font-mono">
                                8 Journeys
                              </div>
                            </div>

                            <div className="p-2 rounded-xl bg-[#141816] border border-white/10">
                              <div className="text-[8px] font-['Inter'] text-neutral-400 mb-0.5 uppercase tracking-wider">
                                Custody Protocol
                              </div>
                              <div className="text-[11px] font-bold text-emerald-400 font-mono">
                                ✓ Verified 1:1
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
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Public Mobility Map */}
          {activeTab === 'map' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h3 className="font-['Manrope'] font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4">
                  Public Mobility Map
                </h3>

                <p className="font-['Poppins'] text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
                  Explore eligible nearby taxi supply through an open, real-time public discovery layer.
                </p>

                {/* Feature Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <span className="px-3 py-1 rounded-full bg-[#F8E804] text-black text-xs font-bold font-['Inter'] shadow-sm">
                    Open Web Portal
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1C201E] border border-white/10 text-neutral-300 text-xs font-medium font-['Inter']">
                    No App Install Needed
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1C201E] border border-white/10 text-neutral-300 text-xs font-medium font-['Inter']">
                    Zero Data Tracking
                  </span>
                </div>

                {/* Feature Cards */}
                <div className="space-y-3 text-xs sm:text-sm font-['Inter']">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#F8E804]" />
                    </span>
                    <div>
                      <div className="text-white font-semibold">Instant Discovery Without Signup</div>
                      <div className="text-neutral-400 text-xs mt-0.5">
                        Commuters immediately view active regulated taxis near terminals without creating an account.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#F8E804]" />
                    </span>
                    <div>
                      <div className="text-white font-semibold">Direct Driver Selection</div>
                      <div className="text-neutral-400 text-xs mt-0.5">
                        Choose your driver directly based on verified vehicle details instead of opaque surge algorithms.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#F8E804]" />
                    </span>
                    <div>
                      <div className="text-white font-semibold">Strict Commuter Privacy</div>
                      <div className="text-neutral-400 text-xs mt-0.5">
                        No continuous location tracking or user profile profiling — only proximity zone queries.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dedicated Page Detail Link */}
                <div className="pt-6 border-t border-white/10 mt-6">
                  <a
                    href="/platform/public-mobility-map"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-['Inter'] font-semibold text-[#F8E804] hover:text-[#faed36] transition-colors group cursor-pointer"
                  >
                    <span>Explore Public Mobility Map architecture</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Map Preview Mockup (Displayed Inside iPhone 14 Pro) */}
              <div className="lg:col-span-6 flex justify-center items-center py-2">
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
                          <div className="w-[96px] h-[26px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
                            {/* TrueDepth sensor */}
                            <div className="w-2.5 h-2.5 rounded-full bg-[#111614] border border-white/5" />
                            {/* Front Camera with blue/green lens tint */}
                            <div className="w-2.5 h-2.5 rounded-full bg-[#080D0A] flex items-center justify-center">
                              <div className="w-1 h-1 rounded-full bg-[#15231C]" />
                            </div>
                          </div>

                          {/* Right: Cellular, Wifi, Battery */}
                          <div className="flex items-center gap-1.5 w-12 justify-end text-white">
                            <div className="flex items-end gap-0.5 h-2.5">
                              <span className="w-0.5 h-1 bg-white rounded-full" />
                              <span className="w-0.5 h-1.5 bg-white rounded-full" />
                              <span className="w-0.5 h-2 bg-white rounded-full" />
                              <span className="w-0.5 h-2.5 bg-white rounded-full" />
                            </div>
                            <Wifi size={11} className="text-white" />
                            <div className="w-[19px] h-[10px] rounded-[3px] border border-white/80 p-[1px] flex items-center">
                              <div className="w-full h-full bg-white rounded-[1.5px]" />
                            </div>
                          </div>
                        </div>

                        {/* Inside Screen Content (Mobile Web Map App View) */}
                        <div className="flex-1 px-3 pt-1 pb-2 flex flex-col justify-between overflow-hidden">
                          
                          {/* Mobile Browser Address Pill */}
                          <div className="flex items-center justify-between py-1 px-2.5 rounded-full bg-[#161B19] border border-white/10 shadow-inner mb-2">
                            <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-300">
                              <Lock size={10} className="text-emerald-400" />
                              <span className="truncate max-w-[140px]">map.82b.ph</span>
                            </div>
                            <span className="px-2 py-0.5 rounded-full bg-[#1F2522] text-[9px] font-mono text-[#F8E804] border border-[#F8E804]/20 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              9 Live
                            </span>
                          </div>

                          {/* Interactive Map Canvas (Filled to maximize screen real estate) */}
                          <div className="flex-1 min-h-[220px] rounded-2xl bg-[#080B0A] border border-white/10 relative overflow-hidden p-2.5 flex flex-col justify-between hero-radar-grid">
                            {/* Vector Street Grid & Topo Contours */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                              {/* Streets & Arteries */}
                              <path d="M -10,50 L 320,50" stroke="rgba(255,255,255,0.08)" strokeWidth="5" strokeLinecap="round" />
                              <path d="M -10,140 L 320,120" stroke="rgba(255,255,255,0.08)" strokeWidth="6" strokeLinecap="round" />
                              <path d="M 80,-10 L 80,240" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                              <path d="M 210,-10 L 200,240" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
                              <path d="M -10,180 Q 140,150 320,190" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />

                              {/* Radar sweep pulse from Ayala Hub */}
                              <circle cx="95" cy="115" r="65" fill="rgba(248,232,4,0.04)" stroke="rgba(248,232,4,0.15)" strokeWidth="1" strokeDasharray="3,3" />
                              <circle cx="95" cy="115" r="35" fill="rgba(248,232,4,0.06)" stroke="rgba(248,232,4,0.25)" strokeWidth="1" />

                              {/* Commuter Pickup Beacon (Ayala Terminal) */}
                              <circle cx="95" cy="115" r="9" fill="rgba(248,232,4,0.2)" stroke="#F8E804" strokeWidth="1.5" />
                              <circle cx="95" cy="115" r="3.5" fill="#F8E804" />

                              {/* Taxi 1 (Selected & Nearest - TX-8241) */}
                              <circle cx="160" cy="70" r="8" fill="rgba(248,232,4,0.25)" stroke="#F8E804" strokeWidth="1.5" />
                              <circle cx="160" cy="70" r="3.5" fill="#F8E804" />

                              {/* Taxi 2 (TX-4910) */}
                              <circle cx="215" cy="115" r="3.5" fill="#F8E804" stroke="#000" strokeWidth="1" />

                              {/* Taxi 3 (TX-9104 - On Journey) */}
                              <circle cx="45" cy="60" r="3" fill="#64748B" stroke="#000" strokeWidth="1" />

                              {/* Taxi 4 */}
                              <circle cx="180" cy="165" r="3" fill="#F8E804" stroke="#000" strokeWidth="1" />
                            </svg>

                            {/* Top Map HUD Bar */}
                            <div className="relative z-10 flex justify-between items-start gap-1">
                              <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[9px] font-mono text-white border border-white/15 flex items-center gap-1 shadow-md">
                                <MapPin size={9} className="text-[#F8E804]" />
                                <span>Ayala Hub</span>
                              </span>

                              <span className="px-2 py-0.5 rounded-md bg-[#F8E804] text-black text-[9px] font-bold font-['Inter'] shadow-md">
                                9 Taxis Live
                              </span>
                            </div>

                            {/* Floating Pin Tooltip on Map */}
                            <div className="relative z-10 ml-24 mb-1 self-start">
                              <div className="px-2 py-0.5 rounded bg-[#1B221E]/95 border border-[#F8E804]/50 shadow-lg text-[8px] font-mono text-white flex items-center gap-1 backdrop-blur-sm">
                                <Car size={9} className="text-[#F8E804]" />
                                <span className="font-bold">TX-8241</span>
                                <span className="text-[#F8E804]">· 120m</span>
                              </div>
                            </div>

                            {/* Bottom Map HUD (Coordinates & Sector) */}
                            <div className="relative z-10 flex justify-between items-center text-[8px] font-mono text-neutral-400">
                              <span className="px-1 py-0.5 rounded bg-black/70 border border-white/5">
                                14.5547° N, 121.0244° E
                              </span>
                              <span className="px-1 py-0.5 rounded bg-black/70 border border-white/5">
                                Makati CBD
                              </span>
                            </div>
                          </div>

                          {/* Selected Taxi Direct Hail Bottom Sheet / Drawer */}
                          <div className="mt-2 p-3 rounded-2xl bg-gradient-to-b from-[#181D1A] to-[#121514] border border-[#F8E804]/30 shadow-lg flex flex-col gap-2.5">
                            {/* Drawer grab handle */}
                            <div className="w-9 h-1 bg-white/25 rounded-full mx-auto" />

                            {/* Driver Profile Row */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-[#F8E804] text-black font-extrabold flex items-center justify-center text-[11px] font-['Manrope'] shadow-sm shrink-0">
                                  RM
                                </div>
                                <div>
                                  <div className="font-['Manrope'] font-bold text-white text-xs leading-tight flex items-center gap-1.5">
                                    <span>Rolando M.</span>
                                    <span className="text-[#F8E804] text-[10px] font-mono">★ 4.96</span>
                                  </div>
                                  <div className="text-[10px] text-neutral-400 font-mono mt-0.5">
                                    TX-8241 • Toyota Vios
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-col items-end gap-0.5 shrink-0">
                                <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold">
                                  2m ETA
                                </span>
                                <span className="text-[8px] text-neutral-400 font-mono">120m away</span>
                              </div>
                            </div>

                            {/* Meter & Zero Surge Trust Strip */}
                            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/5 text-[9px] font-mono text-neutral-300">
                              <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804]" />
                                Regulated Meter Rate
                              </span>
                              <span className="text-emerald-400 font-semibold">Zero Surge</span>
                            </div>

                            {/* Full-width Direct Request Action Button */}
                            <button
                              type="button"
                              className="w-full py-2 rounded-xl bg-[#F8E804] hover:bg-[#faed36] text-black font-['Inter'] font-bold text-xs transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                            >
                              <span>Direct Request (TX-8241)</span>
                              <ArrowRight size={12} />
                            </button>
                          </div>

                        </div>

                        {/* Bottom iOS Home Indicator Bar */}
                        <div className="pb-2 pt-1 flex justify-center">
                          <div className="w-32 h-1 bg-white/40 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Fleet Console */}
          {activeTab === 'fleet' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h3 className="font-['Manrope'] font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4">
                  Fleet Console
                </h3>

                <p className="font-['Poppins'] text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
                  Coordinate vehicles, drivers, assignments, and operational exceptions through a private, real-time workspace.
                </p>

                {/* Feature Chips */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                  <span className="px-3 py-1 rounded-full bg-[#F8E804] text-black text-xs font-bold font-['Inter'] shadow-sm">
                    Private Fleet Workspace
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1C201E] border border-white/10 text-neutral-300 text-xs font-medium font-['Inter']">
                    1:1 Custody Binding
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#1C201E] border border-white/10 text-neutral-300 text-xs font-medium font-['Inter']">
                    Live Telemetry
                  </span>
                </div>

                {/* Feature Cards */}
                <div className="space-y-3 text-xs sm:text-sm font-['Inter']">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#F8E804]/30 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck size={13} className="text-[#F8E804]" />
                    </span>
                    <div>
                      <div className="text-white font-semibold">1:1 Temporary Custody Protocol</div>
                      <div className="text-neutral-400 text-xs mt-0.5 leading-relaxed">
                        Cryptographic binding between designated driver and vehicle ensures zero spoofed or unauthorized dispatches.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#F8E804]/30 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck size={13} className="text-[#F8E804]" />
                    </span>
                    <div>
                      <div className="text-white font-semibold">Live Telemetry & Signal Freshness</div>
                      <div className="text-neutral-400 text-xs mt-0.5 leading-relaxed">
                        Under-1-second heartbeat latency monitors active units, speed anomalies, and terminal queue congestion.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#F8E804]/30 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck size={13} className="text-[#F8E804]" />
                    </span>
                    <div>
                      <div className="text-white font-semibold">Organization-Isolated Data Security</div>
                      <div className="text-neutral-400 text-xs mt-0.5 leading-relaxed">
                        Private encrypted vault guarantees proprietary revenue, driver records, and trips are never cross-exposed.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dedicated Page Detail Link */}
                <div className="pt-6 border-t border-white/10 mt-6">
                  <a
                    href="/platform/fleet-console"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-['Inter'] font-semibold text-[#F8E804] hover:text-[#faed36] transition-colors group cursor-pointer"
                  >
                    <span>Explore Fleet Console administrative controls</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Console Dashboard Preview Mockup (Displayed Inside iPhone 14 Pro) */}
              <div className="lg:col-span-6 flex justify-center items-center py-2">
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
                          <div className="w-[96px] h-[26px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
                            {/* TrueDepth sensor */}
                            <div className="w-2.5 h-2.5 rounded-full bg-[#111614] border border-white/5" />
                            {/* Front Camera with blue/green lens tint */}
                            <div className="w-2.5 h-2.5 rounded-full bg-[#080D0A] flex items-center justify-center">
                              <div className="w-1 h-1 rounded-full bg-[#15231C]" />
                            </div>
                          </div>

                          {/* Right: Cellular, Wifi, Battery */}
                          <div className="flex items-center gap-1.5 w-12 justify-end text-white">
                            <div className="flex items-end gap-0.5 h-2.5">
                              <span className="w-0.5 h-1 bg-white rounded-full" />
                              <span className="w-0.5 h-1.5 bg-white rounded-full" />
                              <span className="w-0.5 h-2 bg-white rounded-full" />
                              <span className="w-0.5 h-2.5 bg-white rounded-full" />
                            </div>
                            <Wifi size={11} className="text-white" />
                            <div className="w-[19px] h-[10px] rounded-[3px] border border-white/80 p-[1px] flex items-center">
                              <div className="w-full h-full bg-white rounded-[1.5px]" />
                            </div>
                          </div>
                        </div>

                        {/* Inside Screen Content (Fleet Mobile Console View) */}
                        <div className="flex-1 px-3 pt-1 pb-2 flex flex-col justify-between overflow-hidden">
                          
                          {/* Top Header Bar */}
                          <div className="flex items-center justify-between py-1 border-b border-white/10">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded bg-[#F8E804] text-black font-extrabold flex items-center justify-center text-[10px] font-['Manrope'] shadow-sm">
                                82
                              </div>
                              <div className="font-['Manrope'] font-bold text-xs text-white leading-tight">
                                Fleet Console
                              </div>
                            </div>

                            <span className="px-2 py-0.5 rounded-full bg-[#1F2522] border border-[#F8E804]/30 text-[9px] font-mono text-[#F8E804] flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Metro Express
                            </span>
                          </div>

                          {/* Filter Segmented Control */}
                          <div className="flex items-center p-1 rounded-lg bg-[#141816] border border-white/10 text-[9px] font-mono justify-between mt-1 mb-1.5">
                            <button type="button" className="px-2.5 py-0.5 rounded-md bg-[#F8E804] text-black font-bold shadow-sm">
                              All (42)
                            </button>
                            <button type="button" className="px-2.5 py-0.5 text-neutral-400 hover:text-white transition-colors">
                              Dispatched (38)
                            </button>
                            <button type="button" className="px-2.5 py-0.5 text-neutral-400 hover:text-white transition-colors">
                              Standby (4)
                            </button>
                          </div>

                          {/* Mini Fleet Sector Radar / Map Viewport */}
                          <div className="h-28 w-full rounded-2xl bg-[#080B0A] border border-white/10 relative overflow-hidden p-2 flex flex-col justify-between hero-radar-grid mb-1.5 shadow-inner">
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M -10,35 L 320,35" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                              <path d="M -10,80 L 320,70" stroke="rgba(255,255,255,0.07)" strokeWidth="5" />
                              <path d="M 80,-10 L 80,140" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                              <path d="M 210,-10 L 200,140" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                              
                              {/* Sector Hub Radar Pulse */}
                              <circle cx="140" cy="55" r="45" fill="rgba(248,232,4,0.03)" stroke="rgba(248,232,4,0.15)" strokeWidth="1" strokeDasharray="3,3" />
                              
                              {/* Active Fleet Units (Green dots for dispatched, yellow for queued, cyan for route) */}
                              <circle cx="95" cy="35" r="4" fill="#10B981" />
                              <circle cx="165" cy="45" r="5" fill="rgba(248,232,4=" stroke="#F8E804" strokeWidth="1.5" />
                              <circle cx="165" cy="45" r="2.5" fill="#F8E804" />
                              <circle cx="210" cy="70" r="3.5" fill="#06B6D4" />
                              <circle cx="60" cy="65" r="3.5" fill="#10B981" />
                              <circle cx="240" cy="25" r="3" fill="#10B981" />
                            </svg>

                            {/* Top Map HUD */}
                            <div className="relative z-10 flex justify-between items-center text-[8px] font-mono">
                              <span className="px-1.5 py-0.5 rounded bg-black/80 text-neutral-300 border border-white/10 flex items-center gap-1">
                                <MapPin size={8} className="text-[#F8E804]" />
                                <span>Makati & BGC Sector 4</span>
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-semibold">
                                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                                <span>38 Units Live</span>
                              </span>
                            </div>

                            {/* Bottom Map HUD */}
                            <div className="relative z-10 flex justify-between items-center text-[7px] font-mono text-neutral-400">
                              <span>Ayala CBD • High St • NAIA</span>
                              <span>Mesh 0.68s</span>
                            </div>
                          </div>

                          {/* Telemetry Metric Cards */}
                          <div className="grid grid-cols-3 gap-1.5 mb-1.5">
                            <div className="p-1.5 rounded-xl bg-[#141816] border border-white/10 flex flex-col justify-between">
                              <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider">
                                Deployed
                              </span>
                              <div className="flex items-baseline gap-1 my-0.5">
                                <span className="text-xs font-bold text-white font-mono">38</span>
                                <span className="text-[8px] text-neutral-500 font-mono">/42</span>
                              </div>
                              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                                <div className="bg-emerald-400 h-full rounded-full" style={{ width: '90.5%' }} />
                              </div>
                            </div>

                            <div className="p-1.5 rounded-xl bg-[#141816] border border-white/10 flex flex-col justify-between">
                              <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider">
                                Ping
                              </span>
                              <div className="flex items-baseline gap-1 my-0.5">
                                <span className="text-xs font-bold text-[#F8E804] font-mono">0.68s</span>
                              </div>
                              <span className="text-[8px] text-emerald-400 font-mono truncate">
                                4G Mesh
                              </span>
                            </div>

                            <div className="p-1.5 rounded-xl bg-[#141816] border border-white/10 flex flex-col justify-between">
                              <span className="text-[8px] font-mono text-neutral-400 uppercase tracking-wider">
                                Custody
                              </span>
                              <div className="flex items-baseline gap-1 my-0.5">
                                <span className="text-xs font-bold text-emerald-400 font-mono">100%</span>
                              </div>
                              <span className="text-[8px] text-emerald-400/80 font-mono truncate">
                                Cryptographic
                              </span>
                            </div>
                          </div>

                          {/* Unit Roster List */}
                          <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400 px-0.5">
                              <span>ACTIVE UNIT ROSTER</span>
                              <span>STATUS</span>
                            </div>

                            {/* Unit 1 */}
                            <div className="p-2 rounded-xl bg-[#141816] border border-white/10 flex flex-col gap-0.5">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-4 h-4 rounded bg-[#1B221E] border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                                    <Car size={9} />
                                  </div>
                                  <span className="font-bold text-white font-mono text-[10px]">TX-8241</span>
                                  <span className="text-[9px] text-neutral-400">· Rolando M.</span>
                                </div>
                                <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[8px] font-mono font-medium flex items-center gap-1">
                                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                                  Dispatched
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400 pt-0.5 border-t border-white/5">
                                <span>Ayala Ave CBD</span>
                                <span className="text-[#F8E804] font-semibold">Meter ₱148.50</span>
                              </div>
                            </div>

                            {/* Unit 2 */}
                            <div className="p-2 rounded-xl bg-[#141816] border border-white/10 flex flex-col gap-0.5">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-4 h-4 rounded bg-[#1B221E] border border-[#F8E804]/30 flex items-center justify-center text-[#F8E804]">
                                    <Car size={9} />
                                  </div>
                                  <span className="font-bold text-white font-mono text-[10px]">TX-4910</span>
                                  <span className="text-[9px] text-neutral-400">· Danilo S.</span>
                                </div>
                                <span className="px-1.5 py-0.2 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/30 text-[#F8E804] text-[8px] font-mono font-medium flex items-center gap-1">
                                  <span className="w-1 h-1 rounded-full bg-[#F8E804]" />
                                  Queued
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400 pt-0.5 border-t border-white/5">
                                <span>BGC High Street</span>
                                <span className="text-emerald-400 font-semibold">Queue Pos #1</span>
                              </div>
                            </div>

                            {/* Unit 3 */}
                            <div className="p-2 rounded-xl bg-[#141816] border border-white/10 flex flex-col gap-0.5">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-4 h-4 rounded bg-[#1B221E] border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                    <Car size={9} />
                                  </div>
                                  <span className="font-bold text-white font-mono text-[10px]">TX-9104</span>
                                  <span className="text-[9px] text-neutral-400">· Carlos T.</span>
                                </div>
                                <span className="px-1.5 py-0.2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[8px] font-mono font-medium flex items-center gap-1">
                                  <span className="w-1 h-1 rounded-full bg-cyan-400" />
                                  En Route
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400 pt-0.5 border-t border-white/5">
                                <span>NAIA Terminal 3</span>
                                <span className="text-cyan-400 font-semibold">Pickup in Progress</span>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Action Drawer */}
                          <div className="mt-1.5 pt-1.5 border-t border-white/10 flex flex-col gap-1">
                            <button
                              type="button"
                              className="w-full py-2 rounded-xl bg-[#F8E804] hover:bg-[#faed36] text-black font-['Inter'] font-bold text-xs transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                            >
                              <span>Manage Fleet Roster</span>
                              <ArrowRight size={12} />
                            </button>
                            <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400 px-1">
                              <span>Auto-sync: 30s interval</span>
                              <span className="text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                42 Nodes Synced
                              </span>
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
