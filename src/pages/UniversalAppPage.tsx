import React from 'react';
import { Smartphone, CheckCircle2, ArrowRight, ArrowLeft, Shield, Wifi, UserCheck, RefreshCw } from 'lucide-react';
import { EyebrowBadge } from '../components/ui/EyebrowBadge';
import { Button } from '../components/ui/Button';

export const UniversalAppPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-20 sm:pb-28 bg-[#080909]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <a
            href="/#platform"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Platform Overview</span>
          </a>
        </div>

        {/* Hero Section */}
        <div className="mb-16 sm:mb-20">
          <div className="mb-4">
            <EyebrowBadge text="ANDROID-FOCUSED UNIVERSAL CLIENT" dotColor="none" />
          </div>

          <h1 className="font-['Manrope'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.1] mb-6">
            One single app. <br />
            <span className="text-[#F8E804]">Every role on duty.</span>
          </h1>

          <p className="font-['Poppins'] text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            The 82 Universal App unifies passenger discovery, professional driver shift controls, and authorized mobile operator supervision within a single, lightweight Android package. No separate downloads or siloed apps required.
          </p>
        </div>

        {/* 3 Core Workflow Personas within the App */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Persona 1: Passengers */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[#1C201E] border border-white/10 text-[10px] font-mono text-[#F8E804] uppercase">
                  Persona 01 // Passenger
                </span>
                <UserCheck size={18} className="text-[#F8E804]" />
              </div>

              <h3 className="font-['Manrope'] font-bold text-xl text-white mb-2">
                Passenger Experience
              </h3>

              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-6">
                Direct street and terminal taxi requests without intermediary commissions. Commuters inspect nearby eligible vehicles, verify driver identification credentials, and monitor request lifecycle updates in real time.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-['Inter'] text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F8E804] shrink-0" />
                <span>Zero surcharge or booking commission</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F8E804] shrink-0" />
                <span>Direct driver request dispatch</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F8E804] shrink-0" />
                <span>Transparent regulated meter fare baseline</span>
              </li>
            </ul>
          </div>

          {/* Persona 2: Drivers */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[#1C201E] border border-white/10 text-[10px] font-mono text-[#F8E804] uppercase">
                  Persona 02 // Driver
                </span>
                <RefreshCw size={18} className="text-[#F8E804]" />
              </div>

              <h3 className="font-['Manrope'] font-bold text-xl text-white mb-2">
                Driver Duty & Offers
              </h3>

              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-6">
                Professional taxi drivers initiate active shift duty with cryptographically verified vehicle custody. Review incoming proximity hail requests, accept trips with full autonomy, and maintain trip logs.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-['Inter'] text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F8E804] shrink-0" />
                <span>One-tap shift activation & vehicle check-in</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F8E804] shrink-0" />
                <span>Direct hail notification with clear pickup distance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F8E804] shrink-0" />
                <span>Complete autonomy over individual shift schedules</span>
              </li>
            </ul>
          </div>

          {/* Persona 3: Mobile Operators */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full bg-[#1C201E] border border-white/10 text-[10px] font-mono text-[#F8E804] uppercase">
                  Persona 03 // Mobile Operator
                </span>
                <Shield size={18} className="text-[#F8E804]" />
              </div>

              <h3 className="font-['Manrope'] font-bold text-xl text-white mb-2">
                Mobile Fleet Field Operations
              </h3>

              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-6">
                Terminal managers and fleet supervisors inspect active unit telemetry in the field. Confirm driver assignments, handle vehicle replacements, and resolve dispatch anomalies on mobile devices without desktop workstations.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-['Inter'] text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F8E804] shrink-0" />
                <span>Role-gated administrative credentials</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F8E804] shrink-0" />
                <span>Rapid mobile vehicle re-assignment</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#F8E804] shrink-0" />
                <span>Terminal queue & dispatch oversight</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Verified MVP Capabilities Grid */}
        <div className="rounded-3xl bg-[#121514] border border-white/10 p-8 sm:p-10 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider block mb-2">
              ENGINEERED FOR REALITY
            </span>
            <h2 className="font-['Manrope'] font-bold text-2xl sm:text-3xl text-white mb-3">
              Key Architecture & Offline Resilience
            </h2>
            <p className="font-['Poppins'] text-sm text-neutral-400">
              Designed specifically for the cellular and hardware realities of urban transportation corridors in the Philippines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <Wifi size={20} className="text-[#F8E804] mb-3" />
              <h4 className="font-['Manrope'] font-bold text-base text-white mb-1.5">
                Low-Bandwidth Queueing
              </h4>
              <p className="font-['Poppins'] text-xs text-neutral-400 leading-relaxed">
                Operates reliably even when traversing cellular dead zones or congested high-rise urban canyons. Message queues synchronize once connectivity restores.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <Smartphone size={20} className="text-[#F8E804] mb-3" />
              <h4 className="font-['Manrope'] font-bold text-base text-white mb-1.5">
                Minimal Battery Footprint
              </h4>
              <p className="font-['Poppins'] text-xs text-neutral-400 leading-relaxed">
                Adaptive GPS duty-cycling conserves battery life during full 12-hour driver shifts without requiring continuous high-current external charging.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
              <Shield size={20} className="text-[#F8E804] mb-3" />
              <h4 className="font-['Manrope'] font-bold text-base text-white mb-1.5">
                Cryptographic Session Binding
              </h4>
              <p className="font-['Poppins'] text-xs text-neutral-400 leading-relaxed">
                Guarantees driver and vehicle parity. Active duty tokens are linked directly to registered taxi operator manifests.
              </p>
            </div>
          </div>
        </div>

        {/* How it connects to 82B */}
        <div className="rounded-3xl bg-gradient-to-r from-[#141816] to-[#0E1110] border border-white/10 p-8 sm:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-3">
              How the Universal App connects to 82B
            </h3>
            <p className="font-['Poppins'] text-sm text-neutral-300 leading-relaxed">
              Every trip state and active driver heartbeat feeds directly into the 82B synchronization backbone, synchronizing the public mobility map and operator console without leaking sensitive personal credentials.
            </p>
          </div>

          <Button
            asAnchor
            href="/#how-it-works"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={18} className="text-black" />}
            className="font-bold text-sm sm:text-base shrink-0"
          >
            See Journey Workflow
          </Button>
        </div>
      </div>
    </div>
  );
};
