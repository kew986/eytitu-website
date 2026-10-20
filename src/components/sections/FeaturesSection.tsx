import React, { useState } from 'react';
import { User, Send, Clock, Monitor, Users, ShieldCheck } from 'lucide-react';
import { EyebrowBadge } from '../ui/EyebrowBadge';

export const FeaturesSection: React.FC = () => {
  const [dutyActive, setDutyActive] = useState(true);

  return (
    <section id="features" className="py-20 sm:py-28 bg-[#080909]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex justify-center mb-4">
            <EyebrowBadge text="BUILT AROUND CONNECTION" dotColor="none" />
          </div>

          <h2 className="font-['Manrope'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">
            Everything works better with clearer coordination.
          </h2>

          <p className="font-['Poppins'] text-base sm:text-lg text-neutral-400">
            From taxi discovery to fleet oversight, essential workflows share one
            foundation.
          </p>
        </div>

        {/* Bento Grid (6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Discover nearby taxis (col-span-7) */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <User size={20} className="text-[#F8E804]" />
                <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider">
                  01 // DISCOVERY
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2.5">
                Discover Nearby Taxis
              </h3>
              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed max-w-lg mb-8">
                See eligible local taxi supply through a public map.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Node circles */}
                <div className="flex -space-x-1.5">
                  <span className="w-6 h-6 rounded-full bg-[#202523] border border-white/20 flex items-center justify-center text-[10px] font-mono text-neutral-300">
                    01
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#2A302D] border border-white/20 flex items-center justify-center text-[10px] font-mono text-neutral-300">
                    02
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#F8E804] text-black font-extrabold flex items-center justify-center text-[10px] font-['Manrope'] shadow-sm">
                    82
                  </span>
                </div>
                <span className="text-xs font-['Inter'] text-neutral-300">
                  Verified public node discovery
                </span>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#1D211F] border border-white/10 text-xs font-['Inter'] font-medium text-neutral-300">
                Public Map
              </span>
            </div>
          </div>

          {/* Card 2: Request directly (col-span-5) */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Send size={18} className="text-[#F8E804]" />
                <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider">
                  02 // DIRECT HAILING
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2.5">
                Request Directly
              </h3>
              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-8">
                Select a driver and send a journey request for acceptance.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#1A1E1C] border border-white/10 flex items-center justify-between text-xs font-['Inter']">
              <span className="text-neutral-300">Status: Pending Response</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F8E804] animate-pulse" />
            </div>
          </div>

          {/* Card 3: Control working hours (col-span-5) */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Clock size={18} className="text-[#F8E804]" />
                <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider">
                  03 // SHIFT FREEDOM
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2.5">
                Control Working Hours
              </h3>
              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-8">
                Start and end duty with clear location-reporting boundaries.
              </p>
            </div>

            {/* Interactive Duty Switch */}
            <div className="p-3.5 rounded-xl bg-[#1A1E1C] border border-white/10 flex items-center justify-between">
              <span className="text-xs font-['Inter'] text-neutral-300 font-medium">
                Duty Switch
              </span>

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
          </div>

          {/* Card 4: Monitor fleet activity (col-span-7) */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Monitor size={18} className="text-[#F8E804]" />
                <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider">
                  04 // FLEET OPERATIONS
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2.5">
                Monitor Fleet Activity
              </h3>
              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed max-w-lg mb-8">
                Review vehicle status and location signal freshness in one workspace.
              </p>
            </div>

            {/* 3 Telemetry Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-[#1A1E1C] border border-white/10">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                  Signal Latency
                </div>
                <div className="text-xs font-mono font-bold text-white">
                  0.8s Fresh
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#1A1E1C] border border-white/10">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                  Active Shifts
                </div>
                <div className="text-xs font-mono font-bold text-[#F8E804]">
                  94.2% Operational
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#1A1E1C] border border-white/10">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-1">
                  Incident Ratio
                </div>
                <div className="text-xs font-mono font-bold text-white">
                  0.00% Zero Flag
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Manage assignments (col-span-5) */}
          <div className="md:col-span-5 p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <Users size={18} className="text-[#F8E804]" />
                <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider">
                  05 // CUSTODY MANAGEMENT
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2.5">
                Manage Assignments
              </h3>
              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-8">
                Connect drivers to vehicles through flexible, temporary assignments.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400">Bound: Operator → Driver</span>
              <span className="text-[#F8E804] font-bold">1:1 Assigned</span>
            </div>
          </div>

          {/* Card 6: Protect operational information (col-span-7) */}
          <div className="md:col-span-7 p-7 sm:p-8 rounded-2xl bg-[#131615] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <ShieldCheck size={18} className="text-[#F8E804]" />
                <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider">
                  06 // DATA BOUNDARIES
                </span>
              </div>
              <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2.5">
                Protect Operational Information
              </h3>
              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed max-w-lg mb-8">
                Keep private fleet records separate from public taxi discovery.
              </p>
            </div>

            {/* 2 Partitioned Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#1A1E1C] border border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-semibold font-['Inter'] text-white mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804]" />
                  Public Discovery View
                </div>
                <p className="text-[11px] font-['Poppins'] text-neutral-400">
                  Plate, Taxi Number & Proximity Coordinates
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#1A1E1C] border border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-semibold font-['Inter'] text-white mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                  Private Operator Vault
                </div>
                <p className="text-[11px] font-['Poppins'] text-neutral-400">
                  Contracts, Driver Documents & Revenue Data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
