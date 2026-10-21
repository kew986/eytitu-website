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

            <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed">
              The digital foundation connecting local taxi discovery, driver operations, and fleet management.
            </p>
          </div>

          {/* Right Section: Company Address & Contact Information (Seamless Columns) */}
          <div className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 md:pl-8 lg:pl-12">
            {/* Column 1: Company Address */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
                COMPANY ADDRESS
              </h4>
              <div className="space-y-1.5 text-xs sm:text-sm font-['Poppins'] text-neutral-400 leading-relaxed">
                <p className="text-white font-medium">82 Mobility Technologies Inc.</p>
                <p>Unit 1402, High Street South Corporate Plaza</p>
                <p>26th Street cor. 9th Avenue, Bonifacio Global City</p>
                <p>Taguig City, Metro Manila 1634, Philippines</p>
              </div>
            </div>

            {/* Column 2: Contact Information */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
                CONTACT INFORMATION
              </h4>
              <div className="space-y-4 text-xs sm:text-sm font-['Poppins']">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Email Inquiries
                  </span>
                  <a
                    href="mailto:contact@82mobility.com"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    contact@82mobility.com
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Phone & Hotline
                  </span>
                  <a
                    href="tel:+63288880082"
                    className="text-neutral-300 hover:text-white transition-colors font-mono"
                  >
                    +63 (2) 8888-0082
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    Operating Hours
                  </span>
                  <p className="text-neutral-400">
                    Mon – Sat, 8:00 AM – 6:00 PM PHT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Security Status */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Poppins'] text-neutral-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© 2026 82. All rights reserved.</span>
            <span className="hidden sm:inline text-neutral-600">·</span>
            <a
              href="/privacy"
              onClick={(e) => handleLinkClick(e, '/privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-neutral-600">·</span>
            <a
              href="/terms"
              onClick={(e) => handleLinkClick(e, '/terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>

          <div className="font-mono text-xs text-neutral-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Security Verified</span>
            <span>·</span>
            <span>Status: Normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
