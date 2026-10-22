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
  const [universalRole, setUniversalRole] = useState<'passenger' | 'driver' | 'operator'>('passenger');
  const [requestStatus, setRequestStatus] = useState<'pending' | 'accepted' | 'declined'>('pending');
  const [mapRequestStatus, setMapRequestStatus] = useState<'idle' | 'requested'>('idle');
  const [fleetFilter, setFleetFilter] = useState<'all' | 'dispatched' | 'standby'>('all');
  const [fleetActionState, setFleetActionState] = useState<'idle' | 'synced'>('idle');

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
                  <button
                    type="button"
                    onClick={() => setUniversalRole('passenger')}
                    className={`px-3 py-1 rounded-full text-xs font-['Inter'] transition-all cursor-pointer ${
                      universalRole === 'passenger'
                        ? 'bg-[#F8E804] text-black font-bold shadow-sm'
                        : 'bg-[#1C201E] border border-white/10 text-neutral-300 hover:text-white'
                    }`}
                  >
                    Passenger Mode
                  </button>
                  <button
                    type="button"
                    onClick={() => setUniversalRole('driver')}
                    className={`px-3 py-1 rounded-full text-xs font-['Inter'] transition-all cursor-pointer ${
                      universalRole === 'driver'
                        ? 'bg-[#F8E804] text-black font-bold shadow-sm'
                        : 'bg-[#1C201E] border border-white/10 text-neutral-300 hover:text-white'
                    }`}
                  >
                    Driver Console
                  </button>
                  <button
                    type="button"
                    onClick={() => setUniversalRole('operator')}
                    className={`px-3 py-1 rounded-full text-xs font-['Inter'] transition-all cursor-pointer ${
                      universalRole === 'operator'
                        ? 'bg-[#F8E804] text-black font-bold shadow-sm'
                        : 'bg-[#1C201E] border border-white/10 text-neutral-300 hover:text-white'
                    }`}
                  >
                    Operator Dispatch
                  </button>
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
                        Engineered for erratic cellular coverage across Iloilo City corridors with offline queues.
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

                        {/* Inside Screen Content (Dynamic: Passenger Mode by Default) */}
                        {universalRole === 'passenger' && (
                          <div className="flex-1 px-3 pt-1 pb-2 flex flex-col gap-2 overflow-hidden">
                            {/* App Header (User-Facing) */}
                            <div className="flex items-center justify-between py-1 border-b border-white/10 shrink-0">
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded bg-[#F8E804] text-black font-extrabold flex items-center justify-center text-[10px] font-['Manrope'] shadow-sm">
                                  82
                                </div>
                                <div className="font-['Manrope'] font-bold text-xs text-white">
                                  Book a Taxi
                                </div>
                              </div>
                              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                14 Taxis Nearby
                              </span>
                            </div>

                            {/* Destination Route Summary */}
                            <div className="p-2.5 rounded-xl bg-[#141816] border border-white/10 shrink-0">
                              <div className="space-y-1.5 text-[10px]">
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-[#F8E804] shrink-0" />
                                  <span className="text-neutral-400 text-[8px] font-mono uppercase tracking-wider shrink-0">From</span>
                                  <span className="text-white font-semibold truncate text-[10px]">SM City Iloilo (Diversion Rd)</span>
                                </div>
                                <div className="h-[1px] bg-white/5 ml-4" />
                                <div className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                                  <span className="text-neutral-400 text-[8px] font-mono uppercase tracking-wider shrink-0">To</span>
                                  <span className="text-white font-semibold truncate text-[10px]">Festive Walk Mall, Megaworld</span>
                                </div>
                              </div>
                            </div>

                            {/* GPS Map Viewport with Trajectory */}
                            <div className="flex-1 min-h-[140px] w-full rounded-xl bg-[#080B0A] border border-white/10 relative overflow-hidden flex flex-col justify-between p-2 hero-radar-grid my-1">
                              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M -10,35 L 320,35" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                                <path d="M -10,110 L 320,95" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="5" />
                                <path d="M 70,-10 L 70,180" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                                <path d="M 210,-10 L 195,180" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                                
                                {/* Trajectory Curve */}
                                <path
                                  d="M 45,95 Q 120,25 220,55"
                                  fill="none"
                                  stroke="#F8E804"
                                  strokeWidth="2.5"
                                  strokeDasharray="5,4"
                                  className="animate-pulse"
                                />

                                {/* Available Nearby Taxi Supply Points */}
                                <circle cx="110" cy="35" r="3" fill="#F8E804" />
                                <circle cx="180" cy="100" r="3" fill="#F8E804" />
                                <circle cx="70" cy="140" r="3" fill="#F8E804" />

                                {/* Pickup Beacon (SM City) */}
                                <circle cx="45" cy="95" r="9" fill="rgba(248,232,4,0.25)" stroke="#F8E804" strokeWidth="1.5" />
                                <circle cx="45" cy="95" r="3.5" fill="#F8E804" />
                                
                                {/* Dropoff Beacon (Festive Walk) */}
                                <circle cx="220" cy="55" r="9" fill="rgba(16,185,129,0.25)" stroke="#10B981" strokeWidth="1.5" />
                                <circle cx="220" cy="55" r="3.5" fill="#10B981" />
                              </svg>

                              {/* Top Map HUD */}
                              <div className="relative z-10 flex justify-between items-center text-[8px] font-mono">
                                <span className="px-1.5 py-0.5 rounded bg-black/80 text-white border border-white/10 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804]" />
                                  <span>Pickup: SM City</span>
                                </span>
                                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                  <span>Festive Walk</span>
                                </span>
                              </div>

                              {/* Bottom Map HUD (Distance & Fare Estimate) */}
                              <div className="relative z-10 flex justify-between items-center text-[8px] font-mono">
                                <span className="px-1.5 py-0.5 rounded bg-black/80 text-white border border-white/10 font-bold">
                                  3.8 km • Est. 11 mins
                                </span>
                                <span className="px-1.5 py-0.5 rounded bg-black/80 text-emerald-400 border border-white/10">
                                  Est. ₱145 Meter
                                </span>
                              </div>
                            </div>

                            {/* Driver Card & Direct Booking Action */}
                            <div className="p-2.5 rounded-2xl bg-gradient-to-b from-[#1C221F] to-[#141716] border border-[#F8E804]/40 relative shadow-[0_0_20px_rgba(248,232,4,0.06)] flex flex-col gap-2 shrink-0">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="w-7 h-7 rounded-full bg-[#F8E804] text-black font-extrabold text-[10px] flex items-center justify-center font-['Inter'] shadow-sm">
                                    RM
                                  </div>
                                  <div>
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-white text-[11px] font-bold">Rolando M.</span>
                                      <span className="text-[#F8E804] text-[9px] font-bold">★ 4.9</span>
                                    </div>
                                    <div className="text-neutral-400 text-[9px] font-mono">
                                      Toyota Vios • <span className="text-[#F8E804]">TX-8241</span> (350m away)
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-[8px] text-neutral-400 font-mono uppercase">Estimated Meter</div>
                                  <div className="text-white text-[12px] font-bold font-mono">₱185</div>
                                </div>
                              </div>

                              {/* Fare Guarantee Tag */}
                              <div className="px-2 py-0.5 rounded bg-black/40 border border-white/5 flex items-center justify-between text-[8px] font-mono text-neutral-300">
                                <span>Official Regulated Fare</span>
                                <span className="text-emerald-400 font-semibold">Zero Surge</span>
                              </div>

                              {/* Request / Confirmed Button */}
                              {requestStatus === 'pending' ? (
                                <button
                                  type="button"
                                  onClick={() => setRequestStatus('accepted')}
                                  className="w-full py-2 rounded-xl bg-[#F8E804] text-black text-[11px] font-bold hover:bg-[#faed36] transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                                >
                                  <span>Direct Request Taxi</span>
                                  <ArrowRight size={12} />
                                </button>
                              ) : (
                                <div className="py-2 px-2.5 rounded-xl bg-[#F8E804]/15 border border-[#F8E804]/40 text-center text-[10px] font-bold text-[#F8E804]">
                                  ✓ Driver Dispatched — Arriving in 2 min
                                  <div className="text-[8px] font-mono text-neutral-300 font-normal mt-0.5">
                                    Boarding PIN: 4821 • Verified 1:1
                                  </div>
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

                            {/* Trust Stats Row */}
                            <div className="grid grid-cols-2 gap-2 shrink-0">
                              <div className="p-2 rounded-xl bg-[#141816] border border-white/10">
                                <div className="text-[8px] font-['Inter'] text-neutral-400 mb-0.5 uppercase tracking-wider">
                                  Regulated Rate
                                </div>
                                <div className="text-[11px] font-bold text-white font-mono">
                                  Zero Commission
                                </div>
                              </div>

                              <div className="p-2 rounded-xl bg-[#141816] border border-white/10">
                                <div className="text-[8px] font-['Inter'] text-neutral-400 mb-0.5 uppercase tracking-wider">
                                  Driver Protocol
                                </div>
                                <div className="text-[11px] font-bold text-emerald-400 font-mono">
                                  ✓ Verified 1:1
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Driver Console View (When Driver Console mode selected) */}
                        {universalRole === 'driver' && (
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
                                Iloilo Live
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
                                Toyota Vios 1.3E · Metro Iloilo Fleet
                              </div>
                              <div className="flex items-center justify-between text-[10px] pt-1 border-t border-white/5">
                                <span className="flex items-center gap-1.5 text-neutral-300 font-['Inter'] text-[9px]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                  On Duty (Rolando M.)
                                </span>
                                <span className="px-2 py-0.5 rounded bg-[#222825] text-[8px] text-neutral-300 border border-white/10 font-mono">
                                  Active Shift
                                </span>
                              </div>
                            </div>

                            {/* Incoming Dispatch Hero Card with Expansive GPS Route Map */}
                            <div className="flex-1 p-2.5 rounded-2xl bg-gradient-to-b from-[#1C221F] to-[#141716] border border-[#F8E804]/40 relative shadow-[0_0_20px_rgba(248,232,4,0.06)] flex flex-col justify-between overflow-hidden">
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

                              <div className="flex-1 min-h-[120px] w-full rounded-xl bg-[#080B0A] border border-white/10 relative overflow-hidden flex flex-col justify-between p-2 hero-radar-grid my-1">
                                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M -10,35 L 320,35" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                                  <path d="M -10,110 L 320,95" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="5" />
                                  <path d="M 70,-10 L 70,180" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                                  <path d="M 210,-10 L 195,180" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                                  <path
                                    d="M 45,95 Q 120,25 220,55"
                                    fill="none"
                                    stroke="#F8E804"
                                    strokeWidth="2.5"
                                    strokeDasharray="5,4"
                                    className="animate-pulse"
                                  />
                                  <circle cx="45" cy="95" r="9" fill="rgba(248,232,4,0.25)" stroke="#F8E804" strokeWidth="1.5" />
                                  <circle cx="45" cy="95" r="3.5" fill="#F8E804" />
                                  <circle cx="220" cy="55" r="9" fill="rgba(16,185,129,0.25)" stroke="#10B981" strokeWidth="1.5" />
                                  <circle cx="220" cy="55" r="3.5" fill="#10B981" />
                                </svg>

                                <div className="relative z-10 flex justify-between items-center text-[8px] font-mono">
                                  <span className="px-1.5 py-0.5 rounded bg-black/80 text-white border border-white/10">
                                    3.8 km • Est. 11 mins
                                  </span>
                                  <span className="px-1.5 py-0.5 rounded bg-black/80 text-emerald-400 border border-white/10">
                                    Est. ₱145 Meter
                                  </span>
                                </div>
                              </div>

                              <div className="space-y-1 text-[10px] my-1 shrink-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-[#F8E804] shrink-0" />
                                  <span className="text-white font-semibold truncate text-[10px]">SM City Iloilo (Diversion Rd)</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                                  <span className="text-white font-semibold truncate text-[10px]">Festive Walk Mall, Megaworld</span>
                                </div>
                              </div>

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
                                <div className="py-2 px-2.5 rounded-xl text-center text-[10px] font-bold shrink-0 bg-[#F8E804]/15 text-[#F8E804] border border-[#F8E804]/40">
                                  ✓ Trip Accepted — En Route to Pickup
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
                        )}

                        {/* Operator Dispatch View (When Operator mode selected) */}
                        {universalRole === 'operator' && (
                          <div className="flex-1 px-3 pt-1 pb-2 flex flex-col gap-2 overflow-hidden">
                            {/* App Header */}
                            <div className="flex items-center justify-between py-1 border-b border-white/10 shrink-0">
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded bg-[#F8E804] text-black font-extrabold flex items-center justify-center text-[10px] font-['Manrope'] shadow-sm">
                                  82
                                </div>
                                <div className="font-['Manrope'] font-bold text-xs text-white">
                                  Operator Dispatch
                                </div>
                              </div>
                              <span className="px-2 py-0.5 rounded-full bg-[#1F2522] border border-[#F8E804]/30 text-[9px] font-mono text-[#F8E804] flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Metro Iloilo Fleet
                              </span>
                            </div>

                            {/* Fleet Overview Card */}
                            <div className="p-2.5 rounded-xl bg-[#141816] border border-white/10 shrink-0">
                              <div className="flex items-center justify-between text-[10px] mb-1">
                                <span className="text-neutral-400 font-['Inter'] uppercase tracking-wider font-semibold text-[8px]">
                                  Active Custody
                                </span>
                                <span className="font-mono font-bold text-emerald-400 text-[10px]">
                                  38 / 42 Deployed
                                </span>
                              </div>
                              <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden mb-1">
                                <div className="w-[90%] h-full bg-[#F8E804] rounded-full" />
                              </div>
                              <div className="flex justify-between text-[8px] font-mono text-neutral-400">
                                <span>38 Online</span>
                                <span>4 Idle</span>
                              </div>
                            </div>

                            {/* Live Vehicle Feed */}
                            <div className="flex-1 rounded-xl bg-[#080B0A] border border-white/10 p-2 overflow-hidden flex flex-col gap-1.5 my-1">
                              <div className="text-[8px] font-mono uppercase text-neutral-400 tracking-wider">
                                Real-Time Roster
                              </div>
                              <div className="p-1.5 rounded-lg bg-[#141816] border border-white/5 flex items-center justify-between text-[9px]">
                                <div>
                                  <div className="text-white font-bold font-mono">TX-8241 · Rolando M.</div>
                                  <div className="text-neutral-400 text-[8px]">Mandurriao → City Proper (In Trip)</div>
                                </div>
                                <span className="text-emerald-400 font-mono text-[8px]">₱145</span>
                              </div>
                              <div className="p-1.5 rounded-lg bg-[#141816] border border-white/5 flex items-center justify-between text-[9px]">
                                <div>
                                  <div className="text-white font-bold font-mono">TX-9102 · Dante S.</div>
                                  <div className="text-neutral-400 text-[8px]">Ungka Terminal (Ready)</div>
                                </div>
                                <span className="text-neutral-400 font-mono text-[8px]">Idle</span>
                              </div>
                            </div>

                            {/* Operator Stats */}
                            <div className="grid grid-cols-2 gap-2 shrink-0">
                              <div className="p-2 rounded-xl bg-[#141816] border border-white/10">
                                <div className="text-[8px] font-['Inter'] text-neutral-400 mb-0.5 uppercase tracking-wider">
                                  Shift Revenue
                                </div>
                                <div className="text-[11px] font-bold text-[#F8E804] font-mono">
                                  ₱24,680
                                </div>
                              </div>
                              <div className="p-2 rounded-xl bg-[#141816] border border-white/10">
                                <div className="text-[8px] font-['Inter'] text-neutral-400 mb-0.5 uppercase tracking-wider">
                                  Compliance Lock
                                </div>
                                <div className="text-[11px] font-bold text-emerald-400 font-mono">
                                  100% 1:1 Match
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

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
                              {/* Streets & Arteries (with explicit fill="none" to prevent black SVG fill glitches) */}
                              <path d="M -10,50 L 320,50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" strokeLinecap="round" />
                              <path d="M -10,140 L 320,120" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" strokeLinecap="round" />
                              <path d="M 80,-10 L 80,240" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                              <path d="M 210,-10 L 200,240" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
                              <path d="M -10,180 Q 140,150 320,190" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />

                              {/* Radar sweep pulse from Megaworld Hub */}
                              <circle cx="95" cy="115" r="65" fill="rgba(248,232,4,0.04)" stroke="rgba(248,232,4,0.15)" strokeWidth="1" strokeDasharray="3,3" />
                              <circle cx="95" cy="115" r="35" fill="rgba(248,232,4,0.06)" stroke="rgba(248,232,4,0.25)" strokeWidth="1" />

                              {/* Commuter Pickup Beacon (Festive Walk) */}
                              <circle cx="95" cy="115" r="9" fill="rgba(248,232,4,0.2)" stroke="#F8E804" strokeWidth="1.5" />
                              <circle cx="95" cy="115" r="3.5" fill="#F8E804" />

                              {/* Direct Dispatch Route when Requested */}
                              {mapRequestStatus === 'requested' && (
                                <path
                                  d="M 95,115 Q 125,85 160,70"
                                  fill="none"
                                  stroke="#F8E804"
                                  strokeWidth="2.5"
                                  strokeDasharray="4,3"
                                  className="animate-pulse"
                                />
                              )}

                              {/* Taxi 1 (Selected & Nearest - TX-8241) */}
                              <circle cx="160" cy="70" r="10" fill="rgba(248,232,4,0.25)" stroke="#F8E804" strokeWidth="1.5" className="animate-pulse" />
                              <circle cx="160" cy="70" r="4" fill="#F8E804" />

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
                                <span>Megaworld Hub</span>
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
                                <span className="text-[#F8E804]">· 120m away</span>
                              </div>
                            </div>

                            {/* Bottom Map HUD (Coordinates & Sector) */}
                            <div className="relative z-10 flex justify-between items-center text-[8px] font-mono text-neutral-400">
                              <span className="px-1 py-0.5 rounded bg-black/70 border border-white/5">
                                10.7202° N, 122.5621° E
                              </span>
                              <span className="px-1 py-0.5 rounded bg-black/70 border border-white/5">
                                Mandurriao, Iloilo
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
                              <span className="text-emerald-400 font-semibold">Zero Surge Guarantee</span>
                            </div>

                            {/* Interactive Direct Request Action Button */}
                            {mapRequestStatus === 'idle' ? (
                              <button
                                type="button"
                                onClick={() => setMapRequestStatus('requested')}
                                className="w-full py-2.5 rounded-xl bg-[#F8E804] hover:bg-[#faed36] text-black font-['Inter'] font-bold text-xs transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                              >
                                <span>Direct Request (TX-8241)</span>
                                <ArrowRight size={12} />
                              </button>
                            ) : (
                              <div className="py-2 px-2.5 rounded-xl bg-[#F8E804]/15 border border-[#F8E804]/40 text-center">
                                <div className="text-[#F8E804] text-[11px] font-bold">
                                  ✓ Direct Hail Sent — Rolando Arriving in 2m
                                </div>
                                <div className="text-[9px] text-neutral-300 font-mono mt-0.5">
                                  Boarding PIN: 4821 • Toyota Vios (TX-8241)
                                </div>
                                <button
                                  type="button"
                                  onClick={() => setMapRequestStatus('idle')}
                                  className="block mx-auto mt-1 text-[8px] text-neutral-400 underline hover:text-white cursor-pointer"
                                >
                                  Reset Demo
                                </button>
                              </div>
                            )}
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
                      <div className="text-white font-semibold">1:1 Verified Custody Protocol</div>
                      <div className="text-neutral-400 text-xs mt-0.5 leading-relaxed">
                        Direct 1:1 binding between designated driver and vehicle ensures zero spoofed or unauthorized dispatches.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#F8E804]/30 transition-colors">
                    <span className="w-6 h-6 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck size={13} className="text-[#F8E804]" />
                    </span>
                    <div>
                      <div className="text-white font-semibold">Live Fleet Oversight & Activity</div>
                      <div className="text-neutral-400 text-xs mt-0.5 leading-relaxed">
                        Sub-second real-time tracking monitors active units, on-trip fares, and terminal queue readiness.
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

                        {/* Inside Screen Content (User-Facing Fleet Manager App View) */}
                        <div className="flex-1 px-3 pt-1 pb-2 flex flex-col justify-between overflow-hidden">
                          
                          {/* Top Header Bar */}
                          <div className="flex items-center justify-between py-1 border-b border-white/10 shrink-0">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded bg-[#F8E804] text-black font-extrabold flex items-center justify-center text-[10px] font-['Manrope'] shadow-sm">
                                82
                              </div>
                              <div className="font-['Manrope'] font-bold text-xs text-white leading-tight">
                                Fleet Manager
                              </div>
                            </div>

                            <span className="px-2 py-0.5 rounded-full bg-[#1F2522] border border-[#F8E804]/30 text-[9px] font-mono text-[#F8E804] flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Metro Iloilo Fleet
                            </span>
                          </div>

                          {/* Filter Segmented Control (Interactive) */}
                          <div className="flex items-center p-1 rounded-xl bg-[#141816] border border-white/10 text-[9px] font-mono justify-between mt-1 mb-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => setFleetFilter('all')}
                              className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                                fleetFilter === 'all'
                                  ? 'bg-[#F8E804] text-black shadow-sm'
                                  : 'text-neutral-400 hover:text-white'
                              }`}
                            >
                              All Taxis (42)
                            </button>
                            <button
                              type="button"
                              onClick={() => setFleetFilter('dispatched')}
                              className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                                fleetFilter === 'dispatched'
                                  ? 'bg-[#F8E804] text-black shadow-sm'
                                  : 'text-neutral-400 hover:text-white'
                              }`}
                            >
                              On Trip (38)
                            </button>
                            <button
                              type="button"
                              onClick={() => setFleetFilter('standby')}
                              className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                                fleetFilter === 'standby'
                                  ? 'bg-[#F8E804] text-black shadow-sm'
                                  : 'text-neutral-400 hover:text-white'
                              }`}
                            >
                              Standby (4)
                            </button>
                          </div>

                          {/* Mini Fleet Sector Radar / Map Viewport */}
                          <div className="h-28 w-full rounded-2xl bg-[#080B0A] border border-white/10 relative overflow-hidden p-2 flex flex-col justify-between hero-radar-grid mb-1.5 shadow-inner shrink-0">
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M -10,35 L 320,35" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                              <path d="M -10,80 L 320,70" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="5" />
                              <path d="M 80,-10 L 80,140" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                              <path d="M 210,-10 L 200,140" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="4" />
                              
                              {/* Sector Hub Radar Pulse */}
                              <circle cx="140" cy="55" r="45" fill="rgba(248,232,4,0.03)" stroke="rgba(248,232,4,0.15)" strokeWidth="1" strokeDasharray="3,3" />
                              
                              {/* Active Fleet Units (Green dots for dispatched, yellow for queued, cyan for route) */}
                              <circle cx="95" cy="35" r="4" fill="#10B981" />
                              <circle cx="165" cy="45" r="6" fill="rgba(248,232,4,0.3)" stroke="#F8E804" strokeWidth="1.5" className="animate-pulse" />
                              <circle cx="165" cy="45" r="2.5" fill="#F8E804" />
                              <circle cx="210" cy="70" r="3.5" fill="#06B6D4" />
                              <circle cx="60" cy="65" r="3.5" fill="#10B981" />
                              <circle cx="240" cy="25" r="3" fill="#10B981" />
                            </svg>

                            {/* Top Map HUD */}
                            <div className="relative z-10 flex justify-between items-center text-[8px] font-mono">
                              <span className="px-1.5 py-0.5 rounded bg-black/80 text-neutral-300 border border-white/10 flex items-center gap-1">
                                <MapPin size={8} className="text-[#F8E804]" />
                                <span>Sector 2: Mandurriao & City Proper</span>
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1 font-semibold">
                                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                                <span>38 Taxis Live</span>
                              </span>
                            </div>

                            {/* Bottom Map HUD */}
                            <div className="relative z-10 flex justify-between items-center text-[7px] font-mono text-neutral-400">
                              <span>Festive Walk • SM City • Iloilo Airport</span>
                              <span className="text-[#F8E804]">● Active Live Feed</span>
                            </div>
                          </div>

                          {/* Human-Centric Operational Metrics */}
                          <div className="grid grid-cols-3 gap-1.5 mb-1.5 shrink-0">
                            <div className="p-1.5 rounded-xl bg-[#141816] border border-white/10 flex flex-col justify-between">
                              <span className="text-[8px] font-['Inter'] text-neutral-400 uppercase tracking-wider font-semibold">
                                Active Fleet
                              </span>
                              <div className="flex items-baseline gap-1 my-0.5">
                                <span className="text-xs font-bold text-white font-mono">38</span>
                                <span className="text-[8px] text-neutral-500 font-mono">/ 42</span>
                              </div>
                              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                                <div className="bg-emerald-400 h-full rounded-full" style={{ width: '90.5%' }} />
                              </div>
                            </div>

                            <div className="p-1.5 rounded-xl bg-[#141816] border border-white/10 flex flex-col justify-between">
                              <span className="text-[8px] font-['Inter'] text-neutral-400 uppercase tracking-wider font-semibold">
                                Shift Revenue
                              </span>
                              <div className="flex items-baseline gap-1 my-0.5">
                                <span className="text-xs font-bold text-[#F8E804] font-mono">₱28,450</span>
                              </div>
                              <span className="text-[8px] text-neutral-400 font-['Inter'] truncate">
                                Meter Total
                              </span>
                            </div>

                            <div className="p-1.5 rounded-xl bg-[#141816] border border-white/10 flex flex-col justify-between">
                              <span className="text-[8px] font-['Inter'] text-neutral-400 uppercase tracking-wider font-semibold">
                                Custody Lock
                              </span>
                              <div className="flex items-baseline gap-1 my-0.5">
                                <span className="text-xs font-bold text-emerald-400 font-mono">100%</span>
                              </div>
                              <span className="text-[8px] text-emerald-400/90 font-['Inter'] truncate font-semibold">
                                ✓ Verified 1:1
                              </span>
                            </div>
                          </div>

                          {/* Unit Roster List (Filterable) */}
                          <div className="flex flex-col gap-1.5 overflow-hidden">
                            <div className="flex items-center justify-between text-[8px] font-['Inter'] font-semibold text-neutral-400 px-0.5 uppercase tracking-wider">
                              <span>Active Driver Roster</span>
                              <span>Duty Status</span>
                            </div>

                            {/* Unit 1: Rolando (Dispatched) */}
                            {(fleetFilter === 'all' || fleetFilter === 'dispatched') && (
                              <div className="p-2 rounded-xl bg-[#141816] border border-white/10 flex flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1.5 min-w-0">
                                    <div className="w-5 h-5 rounded-full bg-[#F8E804] text-black font-extrabold flex items-center justify-center text-[9px] font-['Inter'] shrink-0">
                                      RM
                                    </div>
                                    <span className="font-bold text-white font-mono text-[10px]">TX-8241</span>
                                    <span className="text-[9px] text-neutral-300 truncate">· Rolando M.</span>
                                  </div>
                                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[8px] font-['Inter'] font-semibold flex items-center gap-1 shrink-0">
                                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                                    On Trip
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400 pt-0.5 border-t border-white/5">
                                  <span className="truncate">Festive Walk → SM City Iloilo</span>
                                  <span className="text-[#F8E804] font-semibold shrink-0">Meter ₱148.50</span>
                                </div>
                              </div>
                            )}

                            {/* Unit 2: Danilo (Standby / Queued) */}
                            {(fleetFilter === 'all' || fleetFilter === 'standby') && (
                              <div className="p-2 rounded-xl bg-[#141816] border border-white/10 flex flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1.5 min-w-0">
                                    <div className="w-5 h-5 rounded-full bg-[#1C201E] text-neutral-200 border border-white/10 font-extrabold flex items-center justify-center text-[9px] font-['Inter'] shrink-0">
                                      DS
                                    </div>
                                    <span className="font-bold text-white font-mono text-[10px]">TX-4910</span>
                                    <span className="text-[9px] text-neutral-300 truncate">· Danilo S.</span>
                                  </div>
                                  <span className="px-1.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[8px] font-['Inter'] font-semibold flex items-center gap-1 shrink-0">
                                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                                    Available
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400 pt-0.5 border-t border-white/5">
                                  <span className="truncate">Atria Park Taxi Bay</span>
                                  <span className="text-emerald-400 font-semibold shrink-0">Ready for Trip</span>
                                </div>
                              </div>
                            )}

                            {/* Unit 3: Carlos (Dispatched) */}
                            {(fleetFilter === 'all' || fleetFilter === 'dispatched') && (
                              <div className="p-2 rounded-xl bg-[#141816] border border-white/10 flex flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1.5 min-w-0">
                                    <div className="w-5 h-5 rounded-full bg-[#1C201E] text-neutral-200 border border-white/10 font-extrabold flex items-center justify-center text-[9px] font-['Inter'] shrink-0">
                                      CT
                                    </div>
                                    <span className="font-bold text-white font-mono text-[10px]">TX-9104</span>
                                    <span className="text-[9px] text-neutral-300 truncate">· Carlos T.</span>
                                  </div>
                                  <span className="px-1.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[8px] font-['Inter'] font-semibold flex items-center gap-1 shrink-0">
                                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                                    En Route
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400 pt-0.5 border-t border-white/5">
                                  <span className="truncate">Iloilo Airport Terminal Corridor</span>
                                  <span className="text-cyan-400 font-semibold shrink-0">Pickup in Progress</span>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Bottom Action Drawer */}
                          <div className="mt-1.5 pt-1.5 border-t border-white/10 flex flex-col gap-1 shrink-0">
                            {fleetActionState === 'idle' ? (
                              <button
                                type="button"
                                onClick={() => setFleetActionState('synced')}
                                className="w-full py-2 rounded-xl bg-[#F8E804] hover:bg-[#faed36] text-black font-['Inter'] font-bold text-xs transition-colors shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                              >
                                <span>Manage Fleet Roster</span>
                                <ArrowRight size={12} />
                              </button>
                            ) : (
                              <div className="py-2 px-2.5 rounded-xl bg-[#F8E804]/15 border border-[#F8E804]/40 text-center">
                                <div className="text-[#F8E804] text-[10px] font-bold">
                                  ✓ 42 Vehicles Verified & Bound 1:1
                                </div>
                                <button
                                  type="button"
                                  onClick={() => setFleetActionState('idle')}
                                  className="block mx-auto mt-0.5 text-[8px] text-neutral-400 underline hover:text-white cursor-pointer"
                                >
                                  Reset Demo
                                </button>
                              </div>
                            )}
                            <div className="flex items-center justify-between text-[8px] font-['Inter'] text-neutral-400 px-1">
                              <span>LTFRB Regulated Fleet</span>
                              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                1:1 Custody Lock Active
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
