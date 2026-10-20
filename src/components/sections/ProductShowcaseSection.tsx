import React, { useState } from 'react';
import { Radio, Car, MapPin, ShieldCheck, Check } from 'lucide-react';
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
        {/* Section Header (Preserved exactly as requested) */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="mb-4">
            <EyebrowBadge text="EXPLORE THE PLATFORM" dotColor="none" />
          </div>

          <h2 className="font-['Manrope'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            The right tools for every responsibility.
          </h2>

          <p className="font-['Poppins'] text-base sm:text-lg text-neutral-400 leading-relaxed">
            Three connected experiences support mobility without exposing
            unnecessary operational information.
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

                <div className="font-mono text-xs font-medium text-neutral-400 tracking-wide mb-8">
                  Passenger · Driver · Operator
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm font-['Inter'] text-neutral-300">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/30 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#F8E804]" />
                    </span>
                    <span>Instant role-switching with verified credentials</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/30 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#F8E804]" />
                    </span>
                    <span>Ultra-low bandwidth mode for local cellular networks</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/30 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#F8E804]" />
                    </span>
                    <span>Transparent fare & route verification records</span>
                  </li>
                </ul>
              </div>

              {/* Right Column: Smartphone Mockup */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-[340px] sm:max-w-[360px] rounded-[38px] bg-[#0A0C0B] border-[6px] border-[#222725] p-3 shadow-2xl relative">
                  {/* Speaker Notch */}
                  <div className="w-24 h-4 bg-[#181C1A] rounded-full mx-auto mb-3" />

                  {/* App Screen Content */}
                  <div className="rounded-2xl bg-[#141716] p-4 flex flex-col gap-3.5 border border-white/5">
                    {/* App Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="font-['Manrope'] font-bold text-sm text-white">
                        82 <span className="text-neutral-300 font-medium">Mobile</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#1F2522] border border-[#F8E804]/30 text-[10px] font-mono text-[#F8E804]">
                        Manila Live
                      </span>
                    </div>

                    {/* Assigned Vehicle Card */}
                    <div className="p-3 rounded-xl bg-[#1A1E1D] border border-white/10">
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="text-neutral-400 font-['Inter']">
                          Assigned Vehicle
                        </span>
                        <span className="font-mono font-bold text-[#F8E804]">
                          TX-8241
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-white mb-2">
                        Toyota Vios 1.3E · Metro Express Fleet
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1.5 text-neutral-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804]" />
                          On Duty
                        </span>
                        <button
                          type="button"
                          className="px-2.5 py-0.5 rounded-full bg-[#262C29] text-[10px] text-neutral-300 hover:text-white border border-white/10"
                        >
                          End Shift
                        </button>
                      </div>
                    </div>

                    {/* Hailing Request Card (Highlighted with yellow border) */}
                    <div className="p-3.5 rounded-xl bg-[#1B201E] border-2 border-[#F8E804] relative shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">
                          HAILING REQUEST
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#F8E804] text-black font-mono text-[10px] font-bold">
                          350m Away
                        </span>
                      </div>

                      <div className="text-xs text-white font-medium mb-1">
                        <span className="text-neutral-400">Pickup: </span>
                        Ayala Ave cor. Paseo
                      </div>
                      <div className="text-[11px] text-neutral-400 mb-3 font-mono">
                        Destination: BGC Market! Market!
                      </div>

                      {/* Interactive Buttons */}
                      {requestStatus === 'pending' ? (
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setRequestStatus('declined')}
                            className="py-1.5 rounded-lg bg-[#272D2A] text-neutral-300 text-xs font-semibold hover:bg-[#323A36] transition-colors"
                          >
                            Decline
                          </button>
                          <button
                            type="button"
                            onClick={() => setRequestStatus('accepted')}
                            className="py-1.5 rounded-lg bg-[#F8E804] text-black text-xs font-bold hover:bg-[#faed36] transition-colors shadow-sm"
                          >
                            Accept Trip
                          </button>
                        </div>
                      ) : (
                        <div
                          className={`py-2 px-3 rounded-lg text-center text-xs font-bold ${
                            requestStatus === 'accepted'
                              ? 'bg-[#F8E804]/20 text-[#F8E804] border border-[#F8E804]/40'
                              : 'bg-neutral-800 text-neutral-400'
                          }`}
                        >
                          {requestStatus === 'accepted'
                            ? '✓ Trip Accepted — Passenger Notified'
                            : 'Trip Declined'}
                          <button
                            type="button"
                            onClick={() => setRequestStatus('pending')}
                            className="block mx-auto mt-1 text-[10px] underline opacity-80"
                          >
                            Reset
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-[#1A1E1D] border border-white/10 text-center">
                        <div className="text-[10px] font-['Inter'] text-neutral-400 mb-0.5">
                          Completed Trips
                        </div>
                        <div className="text-xs font-bold text-white font-mono">
                          8 Trips
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-[#1A1E1D] border border-white/10 text-center">
                        <div className="text-[10px] font-['Inter'] text-neutral-400 mb-0.5">
                          Handover Status
                        </div>
                        <div className="text-xs font-bold text-[#F8E804] font-mono">
                          Verified
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
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h3 className="font-['Manrope'] font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4">
                  Public Mobility Map
                </h3>

                <p className="font-['Poppins'] text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
                  Explore eligible nearby taxi supply through a simplified public discovery view.
                </p>

                <div className="font-mono text-xs font-medium text-neutral-400 tracking-wide mb-8">
                  Public Visibility · Nearby Supply
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm font-['Inter'] text-neutral-300">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/30 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#F8E804]" />
                    </span>
                    <span>Zero account creation required for map discovery</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/30 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#F8E804]" />
                    </span>
                    <span>Direct driver selection instead of opaque algorithmic bidding</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/30 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#F8E804]" />
                    </span>
                    <span>Strict location minimization protecting commuter privacy</span>
                  </li>
                </ul>
              </div>

              {/* Map Preview Mockup */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-md rounded-2xl bg-[#0F1211] border border-white/15 p-5 shadow-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-2">
                      <Radio size={14} className="text-[#F8E804] animate-pulse" />
                      <span className="font-['Inter'] text-xs font-bold text-white uppercase tracking-wider">
                        Public Map Projection
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#1C201E] text-[10px] font-mono text-neutral-300 border border-white/10">
                      Active Sector: Metro Manila
                    </span>
                  </div>

                  {/* Interactive Map Visual */}
                  <div className="h-56 rounded-xl bg-[#090B0A] border border-white/10 relative overflow-hidden p-4 flex flex-col justify-between hero-radar-grid">
                    <div className="flex justify-between items-start">
                      <span className="px-2.5 py-1 rounded-md bg-[#161918]/90 text-[10px] font-mono text-neutral-300 border border-white/10 flex items-center gap-1.5">
                        <MapPin size={10} className="text-[#F8E804]" />
                        Makati Ayala Terminal
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#F8E804] text-black text-[10px] font-bold">
                        9 Taxis Live
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-[#141716]/95 border border-white/15 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Car size={14} className="text-[#F8E804]" />
                          <span className="font-semibold text-white">TX-8241 (Rolando M.)</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#F8E804]">Available</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#141716]/95 border border-white/15 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <Car size={14} className="text-neutral-400" />
                          <span className="font-semibold text-white">TX-9104 (Danilo S.)</span>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">On Journey</span>
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
                  Coordinate vehicles, drivers, assignments, and operational exceptions through a private workspace.
                </p>

                <div className="font-mono text-xs font-medium text-neutral-400 tracking-wide mb-8">
                  Fleet Monitoring · Operational Control
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm font-['Inter'] text-neutral-300">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/30 flex items-center justify-center shrink-0">
                      <ShieldCheck size={14} className="text-[#F8E804]" />
                    </span>
                    <span>1:1 Temporary custody assignment records</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/30 flex items-center justify-center shrink-0">
                      <ShieldCheck size={14} className="text-[#F8E804]" />
                    </span>
                    <span>Telemetry health checks and signal freshness indicators</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/30 flex items-center justify-center shrink-0">
                      <ShieldCheck size={14} className="text-[#F8E804]" />
                    </span>
                    <span>Organization-isolated data security with zero cross-exposure</span>
                  </li>
                </ul>
              </div>

              {/* Console Dashboard Preview Mockup */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="w-full max-w-md rounded-2xl bg-[#0F1211] border border-white/15 p-5 shadow-2xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-['Manrope'] font-bold text-sm text-white">
                        82 Fleet Console
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F8E804]/20 border border-[#F8E804]/40 text-[10px] font-mono text-[#F8E804]">
                      Org: Metro Express
                    </span>
                  </div>

                  {/* Telemetry Summary Row */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#141716] border border-white/10 text-center">
                      <div className="text-[10px] font-mono text-neutral-400">Total Units</div>
                      <div className="text-sm font-bold text-white font-mono">42</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#141716] border border-white/10 text-center">
                      <div className="text-[10px] font-mono text-neutral-400">On Duty</div>
                      <div className="text-sm font-bold text-[#F8E804] font-mono">38</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#141716] border border-white/10 text-center">
                      <div className="text-[10px] font-mono text-neutral-400">Signal Ping</div>
                      <div className="text-sm font-bold text-white font-mono">0.8s</div>
                    </div>
                  </div>

                  {/* Fleet Table Rows */}
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-lg bg-[#151917] border border-white/10 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-white">Plate: TX-8241</div>
                        <div className="text-[10px] text-neutral-400 font-mono">Driver: Rolando M.</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-[#F8E804]/10 text-[#F8E804] text-[10px] font-mono">
                        Active Custody
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#151917] border border-white/10 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-semibold text-white">Plate: TX-8242</div>
                        <div className="text-[10px] text-neutral-400 font-mono">Driver: Carlos T.</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 text-[10px] font-mono">
                        Standby
                      </span>
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
