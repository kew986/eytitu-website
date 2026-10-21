import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { EyebrowBadge } from '../components/ui/EyebrowBadge';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-20 sm:pb-28 bg-[#080909]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Legal Review Draft Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-[#F8E804]/30 mb-10 flex items-start gap-3.5">
          <AlertCircle size={20} className="text-[#F8E804] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm font-['Poppins'] text-neutral-200">
            <span className="font-bold text-[#F8E804] block mb-1">
              DRAFT DOCUMENTATION FOR LEGAL REVIEW
            </span>
            This document outlines anticipated operational terms, service boundaries, and participant responsibilities for the 82B mobility network. It serves as a working draft for legal counsel review and does not represent an executed legal contract or statutory franchise guarantee.
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <div className="mb-3">
            <EyebrowBadge text="OPERATIONAL FRAMEWORK" dotColor="none" />
          </div>

          <h1 className="font-['Manrope'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Terms of Service
          </h1>

          <p className="font-['Poppins'] text-sm sm:text-base text-neutral-400">
            Last Updated: Provisional Draft v0.9 (October 2026) · Operating Jurisdiction: Republic of the Philippines
          </p>
        </div>

        {/* Terms Body */}
        <div className="space-y-10 text-neutral-300 font-['Poppins'] text-sm sm:text-base leading-relaxed">
          {/* 1. Introduction & Purpose */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3">
              1. Platform Purpose & Scope
            </h2>
            <p className="text-neutral-300 mb-3">
              82B provides digital coordination infrastructure connecting commuters, licensed taxi drivers, and authorized transport operators. 82B operates strictly as a technology foundation and software service provider.
            </p>
            <p className="text-neutral-400 text-sm">
              82B is not a public transport operator, carrier, or dispatch agency, and does not own or operate physical taxi vehicles. Physical transportation services are rendered independently by licensed drivers and franchised transport operators.
            </p>
          </section>

          {/* 2. Participant Responsibilities */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-4">
              2. Participant Responsibilities
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-['Manrope'] font-semibold text-white mb-1">
                  A. Commuters & Passengers
                </h3>
                <p className="text-sm text-neutral-400">
                  Passengers agree to provide accurate pickup proximity coordinates, respect onboard safety guidelines, and tender metered fares in accordance with prevailing local transport regulations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-['Manrope'] font-semibold text-white mb-1">
                  B. Professional Drivers
                </h3>
                <p className="text-sm text-neutral-400">
                  Drivers must possess valid professional driving credentials, maintain current vehicle custody tokens, follow safe driving practices, and adhere to regulated meter fare standards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-['Manrope'] font-semibold text-white mb-1">
                  C. Transport Operators
                </h3>
                <p className="text-sm text-neutral-400">
                  Operators maintain franchise compliance, ensure physical vehicle roadworthiness, administer authorized driver rosters, and oversee temporary custody allocations.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Acceptable Use & Account Security */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3">
              3. Acceptable Use Policy
            </h2>
            <p className="mb-3 text-neutral-300">
              Users of the 82B applications, API endpoints, and web interfaces agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-400">
              <li>Transmit falsified GPS telemetry, spoofed node credentials, or unauthorized shift tokens.</li>
              <li>Attempt to scrape, reverse engineer, or decompile the Universal App or Fleet Console.</li>
              <li>Impersonate licensed taxi drivers or authorized transport association personnel.</li>
              <li>Interfere with platform telemetry feeds or compromise network uptime for other participants.</li>
            </ul>
          </section>

          {/* 4. Service Availability & Limitations */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3">
              4. Availability & Technical Limitations
            </h2>
            <p className="mb-3 text-neutral-300">
              While 82B is engineered for low-bandwidth resilience and high availability, real-time telemetry depends on cellular network coverage, hardware device integrity, and environmental signal conditions.
            </p>
            <p className="text-neutral-400 text-sm">
              We do not guarantee uninterrupted platform uptime or that every eligible vehicle will be continuously visible during adverse weather, telecommunications outages, or system maintenance windows.
            </p>
          </section>

          {/* 5. Intellectual Property & Brand Assets */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3">
              5. Intellectual Property
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              All proprietary software architecture, interface designs, cryptographic verification protocols, and branding marks associated with 82 and 82B are protected by intellectual property laws. Unauthorized reproduction or commercial redistribution is strictly prohibited.
            </p>
          </section>

          {/* 6. Disclaimers & Governing Law */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3">
              6. Governing Law & Legal Framework
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed mb-3">
              These draft terms are formulated in accordance with the substantive laws of the Republic of the Philippines, including applicable commercial, transport, and electronic commerce statutes.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Formal dispute resolution mechanisms, contractual arbitration procedures, and operator franchise covenants will be incorporated into the finalized legal instrument following regulatory alignment.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
