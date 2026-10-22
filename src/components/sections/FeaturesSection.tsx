import React, { useState } from 'react';
import {
  User,
  Send,
  Clock,
  Monitor,
  Users,
  ShieldCheck,
  Eye,
  Lock
} from 'lucide-react';
import { EyebrowBadge } from '../ui/EyebrowBadge';

export const FeaturesSection: React.FC = () => {
  const [dutyActive, setDutyActive] = useState(true);

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#080909]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center w-full max-w-none mx-auto mb-16 sm:mb-20">
          <div className="flex justify-center mb-4">
            <EyebrowBadge text="BUILT AROUND CONNECTION" dotColor="none" />
          </div>

          <h2 className="font-['Manrope'] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-white tracking-tight leading-tight mb-4 md:whitespace-nowrap">
            Everything works better with clearer coordination.
          </h2>

          <p className="font-['Poppins'] text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed md:whitespace-nowrap">
            From taxi discovery to fleet oversight, essential workflows share one foundation.
          </p>
        </div>

        {/* Bento Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Discover nearby taxis (col-span-7) */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#1D211F] border border-white/10 flex items-center justify-center text-[#F8E804]">
                  <User size={18} />
                </div>
                <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider">
                  01 // DISCOVERY
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2.5">
                Discover Nearby Taxis
              </h3>
              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed max-w-lg mb-6">
                See eligible local taxi supply through a public map with live node coordinates.
              </p>
            </div>

            {/* Rich Discovery Widget */}
            <div className="p-4 rounded-xl bg-[#171B19] border border-white/10 flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F8E804] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F8E804]" />
                  </span>
                  <span className="text-xs font-['Inter'] font-semibold text-white">
                    Live Sector Radar
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300">
                    Sector 2: Mandurriao
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#F8E804] font-semibold">
                  14 Taxis Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#1E2321] border border-white/5 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F8E804]" />
                    <span className="font-semibold text-white font-mono">TX-8241</span>
                    <span className="text-neutral-400 font-['Inter']">Vios</span>
                  </div>
                  <span className="text-neutral-400 font-mono text-[10px]">120m away</span>
                </div>

                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#1E2321] border border-white/5 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F8E804]" />
                    <span className="font-semibold text-white font-mono">TX-4910</span>
                    <span className="text-neutral-400 font-['Inter']">Innova</span>
                  </div>
                  <span className="text-neutral-400 font-mono text-[10px]">280m away</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Request directly (col-span-5) */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#1D211F] border border-white/10 flex items-center justify-center text-[#F8E804]">
                  <Send size={18} />
                </div>
                <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider">
                  02 // DIRECT HAILING
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2.5">
                Request Directly
              </h3>
              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-6">
                Select a driver and send a journey request with upfront clarity and zero intermediaries.
              </p>
            </div>

            {/* Rich Direct Hailing Widget */}
            <div className="p-4 rounded-xl bg-[#171B19] border border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-['Inter']">Dispatch Session #82B</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-[10px] font-mono text-amber-300 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Awaiting Acceptance
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#1E2321] border border-white/5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#F8E804] text-black font-extrabold text-[10px] flex items-center justify-center font-['Manrope']">
                    RM
                  </div>
                  <div>
                    <div className="font-bold text-white text-[11px] leading-tight">Rolando M.</div>
                    <div className="text-[10px] text-neutral-400 font-mono">TX-8241 • Vios</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-semibold text-white">Mandurriao ➔ Iloilo Airport</div>
                  <div className="text-[10px] text-neutral-400 font-mono">Direct Fare (Zero Surge)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Control working hours (col-span-5) */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#1D211F] border border-white/10 flex items-center justify-center text-[#F8E804]">
                  <Clock size={18} />
                </div>
                <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider">
                  03 // SHIFT FREEDOM
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2.5">
                Control Working Hours
              </h3>
              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-6">
                Start and end duty on your terms with complete location-reporting control.
              </p>
            </div>

            {/* Interactive Dynamic Duty Console */}
            <div className="p-4 rounded-xl bg-[#171B19] border border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-['Inter'] font-semibold text-white">
                    {dutyActive ? 'Duty Status: Online' : 'Duty Status: Offline'}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-400">
                    {dutyActive ? 'Broadcasting live GPS in Sector 2 (Mandurriao)' : 'Zero location reporting active'}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setDutyActive(!dutyActive)}
                  className={`w-12 h-6 rounded-full transition-colors duration-200 p-0.5 flex items-center cursor-pointer ${
                    dutyActive ? 'bg-[#F8E804]' : 'bg-neutral-700'
                  }`}
                  aria-label="Toggle duty status"
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-black shadow-md transform transition-transform duration-200 ${
                      dutyActive ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#1E2321] border border-white/5 text-[11px] font-mono">
                <span className="text-neutral-400">Telemetry Boundary</span>
                <span className={dutyActive ? 'text-emerald-400 font-semibold' : 'text-neutral-500'}>
                  {dutyActive ? '✓ Active & Broadcasting' : '✕ Location Masked'}
                </span>
              </div>
            </div>
          </div>

          {/* Card 4: Monitor fleet activity (col-span-7) */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#1D211F] border border-white/10 flex items-center justify-center text-[#F8E804]">
                  <Monitor size={18} />
                </div>
                <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider">
                  04 // FLEET OPERATIONS
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2.5">
                Monitor Fleet Activity
              </h3>
              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed max-w-lg mb-6">
                Review vehicle status, location signal freshness, and telemetry metrics in one workspace.
              </p>
            </div>

            {/* 3 Telemetry Boxes with Mini Status Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#171B19] border border-white/10 flex flex-col justify-between">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1.5 flex items-center justify-between">
                  <span>Signal Latency</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-sm font-mono font-bold text-white">
                  0.8s <span className="text-[10px] text-neutral-400 font-normal">Fresh</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171B19] border border-white/10 flex flex-col justify-between">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1.5 flex items-center justify-between">
                  <span>Active Shifts</span>
                  <span className="text-[10px] text-[#F8E804] font-mono font-bold">38/42</span>
                </div>
                <div className="text-sm font-mono font-bold text-[#F8E804]">
                  90.5% <span className="text-[10px] text-neutral-400 font-normal">Online</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171B19] border border-white/10 flex flex-col justify-between">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1.5 flex items-center justify-between">
                  <span>Incident Ratio</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-sm font-mono font-bold text-white">
                  0.00% <span className="text-[10px] text-emerald-400 font-normal">Zero Flag</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Manage assignments (col-span-5) */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#1D211F] border border-white/10 flex items-center justify-center text-[#F8E804]">
                  <Users size={18} />
                </div>
                <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider">
                  05 // CUSTODY MANAGEMENT
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2.5">
                Manage Assignments
              </h3>
              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-6">
                Connect drivers to fleet vehicles through flexible, temporary assignments with zero lock-in.
              </p>
            </div>

            {/* Rich Vehicle-Driver Binding Widget */}
            <div className="p-4 rounded-xl bg-[#171B19] border border-white/10 flex flex-col gap-2.5">
              <div className="flex items-center justify-between pb-2 border-b border-white/5 text-xs">
                <span className="text-neutral-400 font-['Inter']">Active Custody Assignment</span>
                <span className="px-2 py-0.5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/30 text-[10px] font-mono text-[#F8E804] font-bold">
                  1:1 Bound
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-[#1E2321] border border-white/5">
                  <div className="text-[10px] text-neutral-400 font-mono mb-0.5">Assigned Vehicle</div>
                  <div className="font-bold text-white font-mono text-[11px]">TX-8241</div>
                  <div className="text-[10px] text-neutral-400">Toyota Vios #41</div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#1E2321] border border-white/5">
                  <div className="text-[10px] text-neutral-400 font-mono mb-0.5">Assigned Driver</div>
                  <div className="font-bold text-white text-[11px]">Rolando M.</div>
                  <div className="text-[10px] text-emerald-400 font-mono">ID Verified ✓</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 6: Protect operational information (col-span-7) */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#1D211F] border border-white/10 flex items-center justify-center text-[#F8E804]">
                  <ShieldCheck size={18} />
                </div>
                <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider">
                  06 // DATA BOUNDARIES
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2.5">
                Protect Operational Information
              </h3>
              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed max-w-lg mb-6">
                Keep private fleet records completely separate from public taxi discovery via dual-plane security.
              </p>
            </div>

            {/* 2 Partitioned Boxes (Public Plane vs Private Vault) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#171B19] border border-white/10 flex flex-col justify-between gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold font-['Inter'] text-white">
                    <Eye size={13} className="text-[#F8E804]" />
                    <span>Public Discovery Plane</span>
                  </div>
                  <span className="text-[9px] font-mono text-neutral-400 px-1.5 py-0.5 rounded bg-white/5">
                    Open
                  </span>
                </div>
                <p className="text-[11px] font-['Poppins'] text-neutral-400 leading-relaxed">
                  Taxi Plate, Model & Proximity Grid Coordinates broadcasted openly for seamless hailing.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171B19] border border-white/10 flex flex-col justify-between gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold font-['Inter'] text-white">
                    <Lock size={13} className="text-neutral-300" />
                    <span>Private Operator Vault</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-400/10">
                    Encrypted
                  </span>
                </div>
                <p className="text-[11px] font-['Poppins'] text-neutral-400 leading-relaxed">
                  Lease contracts, driver documents, phone numbers & revenue splits kept strictly private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
