import React from 'react';
import { ShieldCheck, Activity, AlertTriangle, ArrowRight, ArrowLeft, Sliders, Users } from 'lucide-react';
import { EyebrowBadge } from '../components/ui/EyebrowBadge';
import { Button } from '../components/ui/Button';

export const FleetConsolePage: React.FC = () => {
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
            <EyebrowBadge text="AUTHORIZED OPERATOR WORKSPACE" dotColor="none" />
          </div>

          <h1 className="font-['Manrope'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.1] mb-6">
            Private operational control. <br />
            <span className="text-[#F8E804]">Clear fleet custody.</span>
          </h1>

          <p className="font-['Poppins'] text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            The Fleet Console is a private, role-gated operational workspace created for authorized taxi operators. Maintain verified custody records, supervise active shifts, and address operational exceptions without relying on cumbersome paper logs.
          </p>
        </div>

        {/* Core Administrative Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Pillar 1: Driver & Vehicle Management */}
          <div className="p-7 rounded-2xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1C201E] border border-white/10 flex items-center justify-center text-[#F8E804] mb-5">
                <Users size={20} />
              </div>

              <h3 className="font-['Manrope'] font-bold text-xl text-white mb-2">
                Driver & Vehicle Records
              </h3>

              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-6">
                Register verified professional taxi drivers and franchised vehicles. Maintain designated operator rosters, track license expiry dates, and configure organizational access permissions.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
              Identity Verification: Cryptographic Node
            </div>
          </div>

          {/* Pillar 2: Temporary Custody Protocol */}
          <div className="p-7 rounded-2xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1C201E] border border-white/10 flex items-center justify-center text-[#F8E804] mb-5">
                <ShieldCheck size={20} />
              </div>

              <h3 className="font-['Manrope'] font-bold text-xl text-white mb-2">
                Temporary Shift Custody
              </h3>

              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-6">
                Bind individual drivers to specific physical taxis for temporary working shifts. Once assigned, that taxi's active duty beacon can only be operated through that driver's authenticated universal app session.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
              Custody Protocol: 1:1 Tamper-Proof
            </div>
          </div>

          {/* Pillar 3: Active Duty & Signal Freshness */}
          <div className="p-7 rounded-2xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1C201E] border border-white/10 flex items-center justify-center text-[#F8E804] mb-5">
                <Activity size={20} />
              </div>

              <h3 className="font-['Manrope'] font-bold text-xl text-white mb-2">
                Signal Freshness Monitoring
              </h3>

              <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-6">
                Inspect real-time telemetry heartbeats across your operating fleet. Units with stale location broadcasts (&gt;30s) are automatically flagged to maintain operational clarity and reliable dispatches.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
              Heartbeat Interval: Sub-Second Telemetry
            </div>
          </div>
        </div>

        {/* Operational Capabilities Grid */}
        <div className="rounded-3xl bg-[#121514] border border-white/10 p-8 sm:p-10 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider block mb-2">
              PRACTICAL CONTROLS
            </span>
            <h2 className="font-['Manrope'] font-bold text-2xl sm:text-3xl text-white mb-3">
              Essential Operator Workflow Tools
            </h2>
            <p className="font-['Poppins'] text-sm text-neutral-400">
              Designed strictly around grounded, verified MVP operations without bloated or speculative metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#161B18] border border-white/10">
              <div className="flex items-center gap-3 mb-3 text-white">
                <AlertTriangle size={18} className="text-[#F8E804]" />
                <h4 className="font-['Manrope'] font-bold text-base">
                  Operational Exception Handling
                </h4>
              </div>
              <p className="font-['Poppins'] text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Quickly reassign replacement drivers if an operator experiences a vehicle breakdown, driver illness, or unexpected schedule change. Re-binding immediately invalidates the previous custody token.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#161B18] border border-white/10">
              <div className="flex items-center gap-3 mb-3 text-white">
                <Sliders size={18} className="text-[#F8E804]" />
                <h4 className="font-['Manrope'] font-bold text-base">
                  Public Visibility Controls
                </h4>
              </div>
              <p className="font-['Poppins'] text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Operators control whether a specific vehicle or entire fleet sector broadcasts to the Public Mobility Map. Units designated for private charters or scheduled maintenance can be toggled offline at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Action Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#141816] to-[#0E1110] border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2">
              Explore the Connected Platform
            </h3>
            <p className="font-['Poppins'] text-sm text-neutral-300">
              Return to the 82B landing page to review how the fleet console coordinates with passengers and active drivers.
            </p>
          </div>

          <Button
            asAnchor
            href="/"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={18} className="text-black" />}
            className="font-bold text-sm sm:text-base shrink-0"
          >
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};
