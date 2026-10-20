import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { Button } from '../ui/Button';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Platform', href: '#platform' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Who It\'s For', href: '#who-its-for' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'features', 'platform', 'how-it-works', 'who-its-for'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-6 transition-all duration-300">
      <div className="max-w-5xl mx-auto">
        <nav
          className={`flex items-center justify-between px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-300 ${
            isScrolled
              ? 'bg-[#101312]/90 backdrop-blur-md border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
              : 'bg-[#121514]/80 backdrop-blur-sm border-white/10 shadow-lg'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <BrandLogo variant="navbar" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-3.5 py-1.5 text-xs lg:text-sm font-['Inter'] font-medium rounded-full transition-colors duration-200 ${
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              asAnchor
              href="#platform"
              size="sm"
              variant="primary"
              className="text-xs sm:text-sm px-4 sm:px-5 py-2 font-bold"
            >
              Explore 82
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-3xl bg-[#121514]/95 backdrop-blur-xl border border-white/15 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <ul className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block px-4 py-2.5 text-sm font-['Inter'] font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
