import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
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

            <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-4">
              The digital foundation connecting local taxi discovery, driver operations, and fleet management.
            </p>

            {/* Sub-badge pill matching WORKA style */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141816] border border-white/10 text-[10px] font-mono text-neutral-300 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804]" />
              <span className="tracking-wide uppercase">LOCAL MOBILITY TELEMATICS & FIELD CONTROL</span>
            </div>

            {/* Social & Contact Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/sieitz-solutions-opc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#F8E804] hover:border-[#F8E804]/40 transition-colors"
                aria-label="Sieitz Solutions LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 0 0-1.66 1.64 1.65 1.65 0 0 0 1.66 1.64 1.64 1.64 0 0 0 1.65-1.64 1.64 1.64 0 0 0-1.65-1.64" />
                </svg>
              </a>
              <a
                href="mailto:contact@sieitz.com"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#F8E804] hover:border-[#F8E804]/40 transition-colors"
                aria-label="Email Sieitz Solutions"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Right Section: Company Address & Contact Information (Seamless Columns) */}
          <div className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 md:pl-8 lg:pl-12">
            {/* Column 1: Company Address */}
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">
                COMPANY ADDRESS
              </h4>
              <div className="space-y-1.5 text-xs sm:text-sm font-['Poppins'] text-neutral-400 leading-relaxed">
                <p className="text-white font-medium">Sieitz Solutions OPC</p>
                <p>Office: Iloilo City</p>
                <p>Philippines</p>
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
                    EMAIL INQUIRIES
                  </span>
                  <a
                    href="mailto:contact@sieitz.com"
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    contact@sieitz.com
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                    PHONE & HOTLINE
                  </span>
                  <a
                    href="tel:+639278335030"
                    className="text-neutral-300 hover:text-white transition-colors font-mono"
                  >
                    +63 927-833-5030
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Poppins'] text-neutral-400">
          <div>
            © 2026 82 Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-neutral-400">
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span className="text-neutral-600">•</span>
            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
            <span className="text-neutral-600">•</span>
            <a
              href="#security"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Security & Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
