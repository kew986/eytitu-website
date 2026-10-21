import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BrandLogo } from '../ui/BrandLogo';

export const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        history.pushState(null, '', '/');
      } else {
        navigate('/');
      }
      return;
    }

    if (href.startsWith('/#')) {
      const hash = href.replace('/', '');
      if (location.pathname === '/') {
        const targetId = hash.replace('#', '');
        const target = document.getElementById(targetId);
        if (target) {
          const headerOffset = 90;
          const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          history.pushState(null, '', hash);
        }
      } else {
        navigate(href);
      }
      return;
    }

    navigate(href);
  };

  return (
    <footer className="bg-[#060707] border-t border-white/10 pt-16 sm:pt-20 pb-12 text-neutral-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-16 pb-16">
          {/* Left Column: Brand & Info */}
          <div className="w-full md:max-w-sm flex flex-col items-start shrink-0">
            <div className="mb-6">
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className="inline-block cursor-pointer"
                aria-label="82B Home"
              >
                <BrandLogo variant="footer" size="md" />
              </a>
            </div>

            <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-8">
              The digital foundation connecting local taxi discovery, driver operations, and fleet management.
            </p>

            {/* Operating System Node badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#F8E804] animate-pulse" />
              <span>Operating System v2.4 (PH Node)</span>
            </div>
          </div>

          {/* Links Columns: Evenly distributed across remaining available width */}
          <div className="w-full md:flex-1 grid grid-cols-2 sm:flex sm:justify-between gap-8 sm:gap-10 lg:gap-12">
            {/* Col 1: Platform */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
                PLATFORM
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm font-['Poppins']">
                <li>
                  <a
                    href="/#features"
                    onClick={(e) => handleLinkClick(e, '/#features')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/platform/universal-app"
                    onClick={(e) => handleLinkClick(e, '/platform/universal-app')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Universal App
                  </a>
                </li>
                <li>
                  <a
                    href="/platform/public-mobility-map"
                    onClick={(e) => handleLinkClick(e, '/platform/public-mobility-map')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Public Mobility Map
                  </a>
                </li>
                <li>
                  <a
                    href="/platform/fleet-console"
                    onClick={(e) => handleLinkClick(e, '/platform/fleet-console')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
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
                  <a
                    href="/#how-it-works"
                    onClick={(e) => handleLinkClick(e, '/#how-it-works')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="/#passengers"
                    onClick={(e) => handleLinkClick(e, '/#passengers')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Passengers
                  </a>
                </li>
                <li>
                  <a
                    href="/#drivers"
                    onClick={(e) => handleLinkClick(e, '/#drivers')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Drivers
                  </a>
                </li>
                <li>
                  <a
                    href="/#transport-operators"
                    onClick={(e) => handleLinkClick(e, '/#transport-operators')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
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
                  <a
                    href="/about"
                    onClick={(e) => handleLinkClick(e, '/about')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About 82
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    onClick={(e) => handleLinkClick(e, '/privacy')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    onClick={(e) => handleLinkClick(e, '/terms')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
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
