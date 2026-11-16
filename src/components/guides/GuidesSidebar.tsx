import React from 'react';
import { 
  PlayCircle, Smartphone, UserCheck, RefreshCw, 
  ChevronDown, ArrowUpRight
} from 'lucide-react';
import type { TutorialItem, UserRole, VideoLanguage } from '../../data/guidesData';

interface GuidesSidebarProps {
  role: UserRole;
  language: VideoLanguage;
  sidebarTitle: string;
  tutorials: TutorialItem[];
  selectedTutorialId: string;
  onSelectTutorial: (id: string) => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

const getTutorialIcon = (id: string) => {
  if (id === 'getting-started') return Smartphone;
  if (id === 'setting-up-profile') return UserCheck;
  if (id === 'starting-ending-duty') return RefreshCw;
  return PlayCircle;
};

export const GuidesSidebar: React.FC<GuidesSidebarProps> = ({
  role: _role,
  language,
  sidebarTitle,
  tutorials,
  selectedTutorialId,
  onSelectTutorial,
  mobileMenuOpen,
  onToggleMobileMenu
}) => {
  const count = tutorials.length;

  return (
    <aside className="w-full lg:w-72 shrink-0" aria-label={sidebarTitle}>
      {/* Mobile Selector / Accordion Toggle Header */}
      <div className="lg:hidden mb-4">
        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#121514] border border-white/10 text-white font-['Manrope'] font-bold text-sm shadow-md cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F8E804]"
          aria-expanded={mobileMenuOpen}
        >
          <div className="flex items-center gap-2">
            <span>{sidebarTitle} ({count})</span>
          </div>
          <ChevronDown 
            size={18} 
            className={`text-neutral-400 transition-transform duration-200 ${mobileMenuOpen ? 'rotate-180' : ''}`} 
          />
        </button>
      </div>

      {/* Main Sidebar Box */}
      <div className={`rounded-2xl sm:rounded-3xl bg-[#121514] border border-white/10 p-5 sm:p-6 shadow-xl ${
        mobileMenuOpen ? 'block' : 'hidden lg:block'
      }`}>
        {/* Header with Title & Count (e.g. Driver guides (3)) */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
          <h3 className="font-['Manrope'] font-bold text-sm sm:text-base text-white tracking-tight">
            {sidebarTitle} ({count})
          </h3>
          <span className="text-[10px] font-mono text-[#F8E804] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-[#F8E804]/10 border border-[#F8E804]/20">
            {language.toUpperCase()}
          </span>
        </div>

        {/* Tutorial List */}
        {count > 0 ? (
          <nav className="space-y-1.5" aria-label="Tutorial List">
            {tutorials.map((item) => {
              const isSelected = item.id === selectedTutorialId;
              const IconComponent = getTutorialIcon(item.id);
              const title = item.topicHeadline[language];

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectTutorial(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-left text-xs sm:text-sm font-['Poppins'] transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F8E804] ${
                    isSelected
                      ? 'bg-[#F8E804] text-black font-semibold shadow-md shadow-[#F8E804]/20'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isSelected ? 'true' : undefined}
                >
                  <span className={`font-mono text-xs font-bold shrink-0 ${isSelected ? 'text-black' : 'text-[#F8E804]'}`}>
                    {item.number}
                  </span>
                  
                  <IconComponent
                    size={16}
                    className={`shrink-0 ${isSelected ? 'text-black' : 'text-neutral-400'}`}
                    aria-hidden="true"
                  />

                  <span className="truncate flex-1">
                    {title}
                  </span>

                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </nav>
        ) : (
          <div className="py-6 px-2 text-center text-xs font-['Poppins'] text-neutral-400">
            <p>
              {language === 'fil' 
                ? 'Walang available na guides sa kategoryang ito sa ngayon.' 
                : 'No active guides currently available in this category.'}
            </p>
          </div>
        )}

        {/* Supporting Navigation Links */}
        <div className="pt-5 mt-6 border-t border-white/10 flex flex-col gap-2.5">
          <a
            href="/#platform"
            className="inline-flex items-center justify-between text-xs font-['Inter'] font-medium text-neutral-400 hover:text-[#F8E804] transition-colors cursor-pointer group"
          >
            <span>{language === 'fil' ? 'I-explore ang Platform' : 'Browse Platform Overview'}</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="/#how-it-works"
            className="inline-flex items-center justify-between text-xs font-['Inter'] font-medium text-neutral-400 hover:text-[#F8E804] transition-colors cursor-pointer group"
          >
            <span>{language === 'fil' ? 'Paano Ito Gumagana' : 'How 82 Works'}</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </aside>
  );
};
