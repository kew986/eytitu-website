import React from 'react';
import { Eye, ArrowRight, ArrowLeft, Compass } from 'lucide-react';
import { EyebrowBadge } from '../components/ui/EyebrowBadge';
import { Button } from '../components/ui/Button';

export const PublicMobilityMapPage: React.FC = () => {
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
            <EyebrowBadge text="OPEN MOBILITY DISCOVERY LAYER" dotColor="none" />
          </div>

          <h1 className="font-['Manrope'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.1] mb-6">
            Real-time taxi discovery. <br />
            <span className="text-[#F8E804]">Without the guesswork.</span>
          </h1>

          <p className="font-['Poppins'] text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            The Public Mobility Map is an accessible, web-based visibility layer that shows eligible nearby taxis with active duty beacons. Commuters can freely discover and connect with local transport supply without mandatory account registration.
          </p>
        </div>

        {/* Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Card 1: Eligible Nearby Taxi Visibility */}
          <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#1C201E] border border-white/10 flex items-center justify-center text-[#F8E804] mb-6">
              <Eye size={20} />
            </div>

            <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-3">
              Eligible Nearby Taxi Visibility
            </h3>

            <p className="font-['Poppins'] text-sm text-neutral-300 leading-relaxed mb-6">
              Only taxis that are currently clocked in with an active duty token and confirmed vehicle custody appear on the map. This eliminates "ghost cars" and inaccurate estimates common in speculative dispatch systems.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-['Inter'] text-neutral-400">
              <span className="font-semibold text-white block mb-1">Important Scope Notice:</span>
              Visibility on the public map indicates an active duty broadcast from an affiliated fleet. It does not represent an endorsement or state guarantee of regulatory compliance.
            </div>
          </div>

          {/* Card 2: Simplified Public Information */}
          <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#1C201E] border border-white/10 flex items-center justify-center text-[#F8E804] mb-6">
              <Compass size={20} />
            </div>

            <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-3">
              Passenger Discovery & Selection
            </h3>

            <p className="font-['Poppins'] text-sm text-neutral-300 leading-relaxed mb-6">
              Passengers retain the agency to inspect nearby vehicles, view approximate arrival times, and select preferred drivers based on transparent operational criteria rather than automated, surge-inflated algorithm matching.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-['Inter'] text-neutral-400">
              <span className="font-semibold text-white block mb-1">Direct Coordination:</span>
              Once selected, the trip offer routes directly to the designated driver's universal console for immediate acceptance.
            </div>
          </div>
        </div>

        {/* Public vs Private Data Boundaries (Critical MVP Constraint) */}
        <div className="rounded-3xl bg-[#121514] border border-white/10 p-8 sm:p-10 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider block mb-2">
              PRIVACY ARCHITECTURE
            </span>
            <h2 className="font-['Manrope'] font-bold text-2xl sm:text-3xl text-white mb-3">
              Clear Public & Private Data Boundaries
            </h2>
            <p className="font-['Poppins'] text-sm text-neutral-400">
              82 separates open transit visibility from private administrative records, guaranteeing passenger security and driver dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Column A: What is Public */}
            <div className="p-6 rounded-2xl bg-[#161B18] border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <h4 className="font-['Manrope'] font-bold text-base text-white">
                  Public Discovery Layer
                </h4>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm font-['Poppins'] text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#F8E804] font-bold">✓</span>
                  <span>Vehicle model, color, and exterior taxi identification mark</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F8E804] font-bold">✓</span>
                  <span>Real-time proximity coordinates and estimated arrival window</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F8E804] font-bold">✓</span>
                  <span>Active shift status (Available, En Route, On Duty)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F8E804] font-bold">✓</span>
                  <span>Standard regulated metered fare baseline</span>
                </li>
              </ul>
            </div>

            {/* Column B: What is Private */}
            <div className="p-6 rounded-2xl bg-[#161B18] border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F8E804]" />
                <h4 className="font-['Manrope'] font-bold text-base text-white">
                  Restricted & Encrypted Layer
                </h4>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm font-['Poppins'] text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-500 font-bold">✗</span>
                  <span>Driver personal contact numbers and residential records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-500 font-bold">✗</span>
                  <span>Historical route logs and individual daily revenue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-500 font-bold">✗</span>
                  <span>Passenger destination profiles and travel histories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-500 font-bold">✗</span>
                  <span>Proprietary operator ledger data and fleet contracts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing Action Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#141816] to-[#0E1110] border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-2">
              Experience the Platform Showcase
            </h3>
            <p className="font-['Poppins'] text-sm text-neutral-300">
              See how the Public Mobility Map works seamlessly alongside the Universal App and Fleet Console.
            </p>
          </div>

          <Button
            asAnchor
            href="/#platform"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={18} className="text-black" />}
            className="font-bold text-sm sm:text-base shrink-0"
          >
            Return to Platform Showcase
          </Button>
        </div>
      </div>
    </div>
  );
};
