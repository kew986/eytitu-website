import React from 'react';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { EyebrowBadge } from '../components/ui/EyebrowBadge';

export const PrivacyPage: React.FC = () => {
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
            This document represents a provisional framework outlining anticipated data collection and processing parameters for the 82B mobility foundation. It does not constitute an executed or legally binding privacy policy until formally reviewed and ratified by designated legal counsel.
          </div>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <div className="mb-3">
            <EyebrowBadge text="DATA GOVERNANCE & PRIVACY" dotColor="none" />
          </div>

          <h1 className="font-['Manrope'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Privacy Policy
          </h1>

          <p className="font-['Poppins'] text-sm sm:text-base text-neutral-400">
            Last Updated: Provisional Draft v0.9 (October 2026) · Operating Jurisdiction: Republic of the Philippines
          </p>
        </div>

        {/* Policy Body */}
        <div className="space-y-10 text-neutral-300 font-['Poppins'] text-sm sm:text-base leading-relaxed">
          {/* 1. Introduction */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3">
              1. Introduction
            </h2>
            <p className="text-neutral-300 mb-3">
              82B is committed to operating a transparent and respectful digital foundation for local mobility. This Privacy Policy framework outlines how information is gathered, utilized, and safeguarded across the Universal Android Application, Public Mobility Map, and Fleet Console.
            </p>
            <p className="text-neutral-400 text-sm">
              Our core architecture is intentionally designed around data minimization: capturing only what is operationally required to verify vehicle custody, coordinate pickup requests, and protect participant safety.
            </p>
          </section>

          {/* 2. Information Collected */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3">
              2. Information Collected
            </h2>
            <p className="mb-4 text-neutral-300">
              Information collected through the platform is strictly categorized by operational necessity:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-['Manrope'] font-semibold text-white mb-1">
                  A. Account & Professional Identity Information
                </h3>
                <p className="text-sm text-neutral-400">
                  For registered professional drivers and fleet operators: verified legal name, professional driver's license number, taxi franchise association affiliation, and administrative contact credentials.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-['Manrope'] font-semibold text-white mb-1">
                  B. Work-Related Telemetry & Location Data
                </h3>
                <p className="text-sm text-neutral-400">
                  Geographic coordinates transmitted by active driver devices during declared on-duty shifts. Location tracking is active solely while on duty and terminates immediately upon shift completion.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-['Manrope'] font-semibold text-white mb-1">
                  C. Passenger & Trip Request Information
                </h3>
                <p className="text-sm text-neutral-400">
                  Temporary proximity queries and designated pickup coordinates. The public discovery map does not require passenger identity creation or store personal demographic profiles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h3 className="font-['Manrope'] font-semibold text-white mb-1">
                  D. Organization-Level Fleet Information
                </h3>
                <p className="text-sm text-neutral-400">
                  Taxi vehicle identification marks, plate numbers, authorized unit status, and maintenance status uploaded by transport operators into private workspaces.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Purposes of Processing */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3">
              3. Purposes of Processing
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-300">
              <li>Enabling real-time taxi discovery for commuters along transit corridors.</li>
              <li>Verifying 1:1 temporary custody of taxi vehicles during active driver shifts.</li>
              <li>Providing transport operators with private tools to monitor vehicle availability.</li>
              <li>Maintaining cryptographic proof of assignment and trip outcome records.</li>
              <li>Ensuring network security, detecting spoofed nodes, and preventing unauthorized dispatches.</li>
            </ul>
          </section>

          {/* 4. Data Sharing & Access Boundaries */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3">
              4. Data Sharing & Access Boundaries
            </h2>
            <p className="mb-3 text-neutral-300">
              82B maintains strict structural boundaries between public discovery and private operational records:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-400">
              <li><strong className="text-white">No Advertising Brokers:</strong> 82B does not sell, license, or monetize commuter or driver data to commercial ad-tech exchanges.</li>
              <li><strong className="text-white">Operator Isolation:</strong> Proprietary fleet rosters, operational hours, and performance data are cryptographically isolated and never shared with competing taxi operators.</li>
              <li><strong className="text-white">Regulatory Disclosures:</strong> Telemetry and trip records are disclosed only when required pursuant to lawful regulatory inquiries by competent Philippine authorities.</li>
            </ul>
          </section>

          {/* 5. Data Retention & Security Measures */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3">
              5. Data Retention & Security Measures
            </h2>
            <p className="mb-3 text-neutral-300">
              Transient proximity hail requests are purged on a rolling basis following trip conclusion. Administrative custody logs and verified shift rosters are retained in compliance with local recordkeeping practices.
            </p>
            <p className="text-sm text-neutral-400">
              All communications between mobile clients and the 82B node are encrypted in transit using industry-standard TLS protocols, with role-based cryptographic token authentication.
            </p>
          </section>

          {/* 6. User Rights & Contact Framework */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3">
              6. Participant Rights & Governance Inquiries
            </h2>
            <p className="mb-3 text-neutral-300">
              Participants operating within the 82 network retain statutory rights under the Philippine Data Privacy Act of 2012 (RA 10173), including rights to access, rectify, or request deletion of personal information where applicable.
            </p>
            <p className="text-sm text-neutral-400">
              Formal privacy inquiries, data subject access requests, or regulatory communications may be directed through designated transport association administrative representatives.
            </p>
          </section>

          {/* 7. Policy Updates */}
          <section className="p-6 sm:p-8 rounded-2xl bg-[#121514] border border-white/10">
            <h2 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white mb-3">
              7. Updates to This Framework
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              As the 82B network expands operational coverage across additional Philippine transport nodes, this policy draft will be updated following formal legal and regulatory review. Changes will be posted with an updated version number.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
