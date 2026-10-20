import React from 'react';
import { BrandLogo } from '../ui/BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060707] border-t border-white/10 pt-16 sm:pt-20 pb-12 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Left Column: Brand & Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="mb-6">
              <BrandLogo variant="footer" size="md" />
            </div>

            <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed max-w-sm mb-8">
              The digital foundation connecting local taxi discovery, driver operations, and fleet management.
            </p>

            {/* Operating System Node badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#F8E804] animate-pulse" />
              <span>Operating System v2.4 (PH Node)</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Col 1: Platform */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
                PLATFORM
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-['Poppins']">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#platform" className="hover:text-white transition-colors">
                    Universal App
                  </a>
                </li>
                <li>
                  <a href="#platform" className="hover:text-white transition-colors">
                    Public Mobility Map
                  </a>
                </li>
                <li>
                  <a href="#platform" className="hover:text-white transition-colors">
                    Fleet Console
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 2: Explore */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
                EXPLORE
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-['Poppins']">
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#who-its-for" className="hover:text-white transition-colors">
                    Passengers
                  </a>
                </li>
                <li>
                  <a href="#who-its-for" className="hover:text-white transition-colors">
                    Drivers
                  </a>
                </li>
                <li>
                  <a href="#who-its-for" className="hover:text-white transition-colors">
                    Transport Operators
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Information */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
                INFORMATION
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-['Poppins']">
                <li>
                  <a href="#hero" className="hover:text-white transition-colors">
                    About 82
                  </a>
                </li>
                <li>
                  <a href="#problem" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Security Status */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Poppins'] text-neutral-400">
          <div>
            © 2026 82. All rights reserved.
          </div>

          <div className="font-mono text-xs text-neutral-400 flex items-center gap-2">
            <span>Security Verified</span>
            <span>·</span>
            <span>Status: Normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
