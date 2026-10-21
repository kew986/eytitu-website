import React from 'react';
import { ArrowLeft, ShieldCheck, MapPin, Users, Lock, Network } from 'lucide-react';
import { EyebrowBadge } from '../components/ui/EyebrowBadge';
import { Button } from '../components/ui/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-20 sm:pb-28 bg-[#080909]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </a>
        </div>

        {/* 1. Hero Introduction */}
        <div className="mb-16 sm:mb-20">
          <div className="mb-4">
            <EyebrowBadge text="PHILIPPINES PUBLIC MOBILITY" dotColor="none" />
          </div>

          <h1 className="font-['Manrope'] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.1] mb-6">
            The digital foundation <br />
            <span className="text-[#F8E804]">connecting local transit.</span>
          </h1>

          <p className="font-['Poppins'] text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            82 is a Philippines-focused public mobility network beginning with local taxi services. 82B is the digital foundation that connects discovery, driver duty, and fleet oversight into one unified ecosystem.
          </p>
        </div>

        {/* 2 & 3: What 82 is & What 82B does */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10">
            <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider block mb-3">
              THE PUBLIC NETWORK
            </span>
            <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-4">
              What is 82?
            </h3>
            <p className="font-['Poppins'] text-sm sm:text-base text-neutral-300 leading-relaxed mb-4">
              82 is an open mobility network designed to empower existing transportation providers in the Philippines, starting with licensed taxi fleets and associations.
            </p>
            <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed">
              Rather than replacing traditional drivers or extracting heavy commission surcharges, 82 provides open digital visibility so everyday commuters can easily discover nearby regulated transport services on street corridors and at major transit terminals.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#131715] to-[#0E1110] border border-white/10">
            <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider block mb-3">
              THE DIGITAL INFRASTRUCTURE
            </span>
            <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-4">
              What does 82B do?
            </h3>
            <p className="font-['Poppins'] text-sm sm:text-base text-neutral-300 leading-relaxed mb-4">
              82B is the underlying software architecture, telemetry backbone, and administrative platform that powers the 82 mobility network.
            </p>
            <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed">
              82B synchronizes data between the Universal Android App, the Public Mobility Map, and the private Fleet Console. It delivers sub-second telemetry, verifies temporary vehicle custody, and preserves clear organizational data silos.
            </p>
          </div>
        </div>

        {/* 4. Who the Network Serves */}
        <div className="rounded-3xl bg-[#121514] border border-white/10 p-8 sm:p-12 mb-16">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-xs font-semibold text-[#F8E804] uppercase tracking-wider block mb-2">
              ECOSYSTEM PARTICIPANTS
            </span>
            <h2 className="font-['Manrope'] font-bold text-2xl sm:text-3xl text-white mb-3">
              Who the Network Serves
            </h2>
            <p className="font-['Poppins'] text-sm text-neutral-400">
              Three essential groups rely on 82B to conduct daily transit operations with transparency and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#161B18] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#222824] border border-white/10 flex items-center justify-center text-[#F8E804] mb-4">
                <Users size={18} />
              </div>
              <h4 className="font-['Manrope'] font-bold text-lg text-white mb-2">
                Commuters & Passengers
              </h4>
              <p className="font-['Poppins'] text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Gain open, zero-commission taxi discovery, direct driver selection, and real-time arrival estimates without creating intrusive profiles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#161B18] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#222824] border border-white/10 flex items-center justify-center text-[#F8E804] mb-4">
                <MapPin size={18} />
              </div>
              <h4 className="font-['Manrope'] font-bold text-lg text-white mb-2">
                Professional Drivers
              </h4>
              <p className="font-['Poppins'] text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Maintain complete ownership of their working hours and receive direct ride requests while operating verified fleet vehicles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#161B18] border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#222824] border border-white/10 flex items-center justify-center text-[#F8E804] mb-4">
                <ShieldCheck size={18} />
              </div>
              <h4 className="font-['Manrope'] font-bold text-lg text-white mb-2">
                Transport Operators
              </h4>
              <p className="font-['Poppins'] text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Supervise active vehicles, manage driver shift assignments, and protect proprietary operational ledgers in private workspaces.
              </p>
            </div>
          </div>
        </div>

        {/* 5 & 6: How Discovery & Fleet Connect + Commitment to Boundaries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl bg-[#121514] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#1C201E] border border-white/10 flex items-center justify-center text-[#F8E804] mb-5">
              <Network size={20} />
            </div>
            <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-3">
              How Discovery & Operations Connect
            </h3>
            <p className="font-['Poppins'] text-sm text-neutral-300 leading-relaxed mb-4">
              When an operator issues temporary custody of a vehicle to a licensed driver, that driver's session broadcasts an active availability signal.
            </p>
            <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed">
              Nearby commuters see that active signal appear immediately on the open Public Mobility Map. When a request is made, it routes directly to that driver's console, closing the loop without speculative third-party algorithms.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#121514] border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#1C201E] border border-white/10 flex items-center justify-center text-[#F8E804] mb-5">
              <Lock size={20} />
            </div>
            <h3 className="font-['Manrope'] font-bold text-2xl text-white mb-3">
              Commitment to Clear Privacy Boundaries
            </h3>
            <p className="font-['Poppins'] text-sm text-neutral-300 leading-relaxed mb-4">
              82B is built on the belief that public mobility coordination does not require mass surveillance or personal data exploitation.
            </p>
            <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed">
              We never track passenger location histories, sell telemetry to third-party ad networks, or mix proprietary fleet revenue records across competing transport operators.
            </p>
          </div>
        </div>

        {/* 7. Closing CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-[#141816] to-[#0E1110] border border-white/10 p-8 sm:p-12 text-center flex flex-col items-center">
          <h3 className="font-['Manrope'] font-bold text-2xl sm:text-3xl text-white mb-3">
            Explore 82B's Connected Architecture
          </h3>
          <p className="font-['Poppins'] text-sm sm:text-base text-neutral-300 max-w-xl mb-8 leading-relaxed">
            Discover the five-step journey workflow or examine the interactive platform tools designed for passengers, drivers, and operators.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asAnchor
              href="/#platform"
              variant="primary"
              size="lg"
              className="font-bold text-sm sm:text-base px-7 py-3.5"
            >
              Explore the Platform
            </Button>
            <Button
              asAnchor
              href="/#how-it-works"
              variant="secondary"
              size="lg"
              className="font-medium text-sm sm:text-base px-7 py-3.5"
            >
              See How It Works
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
