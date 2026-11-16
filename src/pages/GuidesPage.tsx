import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronRight, Car, User, ShieldCheck, Globe } from 'lucide-react';
import { EyebrowBadge } from '../components/ui/EyebrowBadge';
import { GuidesSidebar } from '../components/guides/GuidesSidebar';
import { GuidesContent } from '../components/guides/GuidesContent';
import { guidesData } from '../data/guidesData';
import type { UserRole, VideoLanguage } from '../data/guidesData';

export const GuidesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Page-specific language state: English by default, persisted independently in localStorage
  const [language, setLanguage] = useState<VideoLanguage>(() => {
    try {
      const saved = localStorage.getItem('82_guides_language');
      if (saved === 'fil' || saved === 'en') return saved;
    } catch {
      // fallback
    }
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('82_guides_language', language);
    } catch {
      // fallback
    }
  }, [language]);

  // Validate URL search parameters with reliable fallbacks
  const urlRole = searchParams.get('role') as UserRole;
  const initialRole: UserRole = ['driver', 'passenger', 'operator'].includes(urlRole) ? urlRole : 'driver';
  const initialTutorialId = searchParams.get('tutorial') || '';

  const [role, setRole] = useState<UserRole>(initialRole);
  const [selectedTutorialId, setSelectedTutorialId] = useState<string>(initialTutorialId);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Current role data and tutorials
  const currentRoleData = guidesData[role];
  const tutorials = currentRoleData.tutorials;

  // Active tutorial determination
  const activeTutorial = useMemo(() => {
    if (tutorials.length === 0) return undefined;
    const match = tutorials.find((tut) => tut.id === selectedTutorialId);
    return match || tutorials[0];
  }, [tutorials, selectedTutorialId]);

  // Synchronize URL parameters whenever role or active tutorial changes
  useEffect(() => {
    const params: Record<string, string> = { role };
    if (activeTutorial) {
      params.tutorial = activeTutorial.id;
    }
    setSearchParams(params, { replace: true });
  }, [role, activeTutorial, setSearchParams]);

  // When switching roles, reset selectedTutorialId
  const handleSelectRole = (newRole: UserRole) => {
    setRole(newRole);
    const newTutorials = guidesData[newRole].tutorials;
    if (newTutorials.length > 0) {
      setSelectedTutorialId(newTutorials[0].id);
    } else {
      setSelectedTutorialId('');
    }
    setMobileMenuOpen(false);
  };

  // Tutorial selection handler
  const handleSelectTutorial = (id: string) => {
    setSelectedTutorialId(id);
    setMobileMenuOpen(false);
  };

  // Find previous and next tutorials for sequence navigation
  const currentIndex = tutorials.findIndex((tut) => tut.id === activeTutorial?.id);
  const prevTutorial = currentIndex > 0 ? tutorials[currentIndex - 1] : undefined;
  const nextTutorial = currentIndex >= 0 && currentIndex < tutorials.length - 1 ? tutorials[currentIndex + 1] : undefined;

  const roleConfigs = [
    { key: 'driver' as UserRole, icon: Car, label: 'Driver' },
    { key: 'passenger' as UserRole, icon: User, label: 'Passenger' },
    { key: 'operator' as UserRole, icon: ShieldCheck, label: 'Operator' }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-20 sm:pb-28 bg-[#080909] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Breadcrumb Navigation (Static English) */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-['Inter'] text-neutral-400 mb-6 pt-2">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={12} className="text-neutral-600" aria-hidden="true" />
          <span className="text-[#F8E804] font-medium" aria-current="page">
            Guides
          </span>
        </nav>

        {/* 2. Guides Hero Section (Static English) */}
        <header className="mb-10 sm:mb-12">
          <div className="mb-3">
            <EyebrowBadge text="VIDEO TUTORIAL LIBRARY" dotColor="yellow" />
          </div>

          <h1 className="font-['Manrope'] font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15] mb-3">
            82 Video Guides
          </h1>

          <p className="font-['Poppins'] text-sm sm:text-base md:text-lg text-neutral-400 max-w-3xl leading-relaxed">
            Learn how to get started, navigate features, and master the 82 platform across all user roles.
          </p>
        </header>

        {/* 3. Controls Bar: User Role Selector (Left) + Language Selector (Right) */}
        <section aria-label="Tutorial Controls" className="mb-8 p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#121514] border border-white/10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Left: Role Selection (Driver | Passenger | Operator) */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                Role:
              </span>
              <div 
                role="tablist" 
                aria-label="User Roles" 
                className="flex flex-wrap items-center gap-2"
              >
                {roleConfigs.map(({ key, icon: Icon, label }) => {
                  const isActive = role === key;
                  return (
                    <button
                      key={key}
                      role="tab"
                      id={`role-tab-${key}`}
                      aria-selected={isActive}
                      aria-controls="guides-panel"
                      type="button"
                      onClick={() => handleSelectRole(key)}
                      className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-['Inter'] font-semibold transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F8E804] ${
                        isActive
                          ? 'bg-[#F8E804] text-black shadow-md shadow-[#F8E804]/20 scale-[1.02]'
                          : 'bg-[#181C1A] text-neutral-300 hover:text-white hover:bg-[#202623] border border-white/10'
                      }`}
                    >
                      <Icon size={16} className={isActive ? 'text-black' : 'text-[#F8E804]'} aria-hidden="true" />
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Language Selection (English / Filipino) */}
            <div className="flex items-center gap-2 sm:gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
              <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                <Globe size={14} className="text-[#F8E804]" aria-hidden="true" />
                <span>Language:</span>
              </div>
              
              <div 
                role="radiogroup" 
                aria-label="Tutorial Language"
                className="inline-flex items-center p-1 rounded-full bg-[#181C1A] border border-white/10"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={language === 'en'}
                  onClick={() => setLanguage('en')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-['Inter'] font-semibold transition-all duration-200 cursor-pointer ${
                    language === 'en'
                      ? 'bg-[#F8E804] text-black shadow-sm font-bold scale-[1.02]'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={language === 'fil'}
                  onClick={() => setLanguage('fil')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-['Inter'] font-semibold transition-all duration-200 cursor-pointer ${
                    language === 'fil'
                      ? 'bg-[#F8E804] text-black shadow-sm font-bold scale-[1.02]'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Filipino
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Two-Column Learning Interface (Sidebar + Selected Content) */}
        <section 
          id="guides-panel" 
          aria-labelledby={`role-tab-${role}`} 
          className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8"
        >
          {/* Tutorial Navigation Sidebar */}
          <GuidesSidebar
            role={role}
            language={language}
            sidebarTitle={currentRoleData.sidebarTitle[language]}
            tutorials={tutorials}
            selectedTutorialId={activeTutorial?.id || ''}
            onSelectTutorial={handleSelectTutorial}
            mobileMenuOpen={mobileMenuOpen}
            onToggleMobileMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
          />

          {/* Selected Tutorial Content Area */}
          <GuidesContent
            role={role}
            language={language}
            tutorial={activeTutorial}
            emptyState={currentRoleData.emptyState}
            onSelectRole={handleSelectRole}
            prevTutorial={prevTutorial}
            nextTutorial={nextTutorial}
            onNavigateTutorial={handleSelectTutorial}
          />
        </section>

      </div>
    </div>
  );
};
