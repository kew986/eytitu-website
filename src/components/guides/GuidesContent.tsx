import React from 'react';
import {
  Play, Download, ChevronLeft, ChevronRight, Video, ArrowRight
} from 'lucide-react';
import type { TutorialItem, UserRole, VideoLanguage } from '../../data/guidesData';

interface GuidesContentProps {
  role: UserRole;
  language: VideoLanguage;
  tutorial?: TutorialItem;
  emptyState: {
    heading: { en: string; fil: string };
    description: { en: string; fil: string };
  };
  onSelectRole: (role: UserRole) => void;
  prevTutorial?: TutorialItem;
  nextTutorial?: TutorialItem;
  onNavigateTutorial: (id: string) => void;
}

export const GuidesContent: React.FC<GuidesContentProps> = ({
  role: _role,
  language,
  tutorial,
  emptyState,
  onSelectRole,
  prevTutorial,
  nextTutorial,
  onNavigateTutorial
}) => {
  // Empty state for Passenger / Operator when no tutorials exist yet
  if (!tutorial) {
    return (
      <article className="flex-1 w-full min-w-0">
        <div className="rounded-2xl sm:rounded-3xl bg-[#121514] border border-white/10 p-8 sm:p-12 text-center shadow-xl flex flex-col items-center justify-center min-h-[380px]">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F8E804] mb-4">
            <Video size={26} aria-hidden="true" />
          </div>

          <h2 className="font-['Manrope'] font-bold text-2xl text-white tracking-tight mb-2">
            {emptyState.heading[language]}
          </h2>

          <p className="font-['Poppins'] text-sm text-neutral-400 max-w-md leading-relaxed mb-6">
            {emptyState.description[language]}
          </p>

          <button
            type="button"
            onClick={() => onSelectRole('driver')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-['Inter'] font-bold bg-[#F8E804] text-black hover:bg-[#faed36] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F8E804]"
          >
            <span>{language === 'fil' ? 'Tingnan ang Driver Guides' : 'View Driver Guides'}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </article>
    );
  }

  const topicHeadline = tutorial.topicHeadline[language];
  const topicDescription = tutorial.topicDescription[language];
  const videoTitle = tutorial.videoTitle[language];
  const videoDescription = tutorial.videoDescription[language];
  const videoUrl = tutorial.videoUrl[language];
  const thumbnailUrl = tutorial.thumbnailUrl[language];

  return (
    <article className="flex-1 w-full min-w-0" aria-labelledby="topic-headline-title">
      <div className="rounded-2xl sm:rounded-3xl bg-[#121514] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col gap-8">
        
        {/* 1. Topic Introduction */}
        <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="max-w-2xl min-w-0">
            <h1
              id="topic-headline-title"
              className="font-['Manrope'] font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-2"
            >
              {topicHeadline}
            </h1>

            <p className="font-['Poppins'] text-sm sm:text-base text-neutral-400 leading-relaxed">
              {topicDescription}
            </p>
          </div>

          {/* Optional Download Guide (PDF) - only rendered if verified URL exists */}
          {tutorial.downloadPdfUrl && (
            <a
              href={tutorial.downloadPdfUrl}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#F8E804]/40 hover:bg-white/10 text-neutral-300 hover:text-white transition-all text-xs font-['Inter'] font-medium shrink-0 self-start cursor-pointer"
            >
              <Download size={15} className="text-[#F8E804]" aria-hidden="true" />
              <span>{language === 'fil' ? 'I-download ang Guide (PDF)' : 'Download Guide (PDF)'}</span>
            </a>
          )}
        </header>

        {/* 2. Watch the Guide (Horizontal Video Card matching DGFY reference) */}
        <section aria-label={language === 'fil' ? 'Panoorin ang mga Guide' : 'Watch the Guides'}>
          <h2 className="font-['Manrope'] font-bold text-base sm:text-lg text-white tracking-tight mb-4">
            {language === 'fil' ? 'Panoorin ang mga Guide' : 'Watch the Guides'}
          </h2>

          <div className="rounded-2xl bg-[#151917] border border-white/10 p-4 sm:p-5 lg:p-6 shadow-lg flex flex-col md:flex-row items-stretch gap-5 lg:gap-6">
            
            {/* Left Column (~57% width): 16:9 Thumbnail with Centered Play Button */}
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-video w-full md:w-[57%] shrink-0 bg-[#0A0D0C] rounded-xl overflow-hidden border border-white/10 group cursor-pointer select-none shadow-md focus-visible:ring-2 focus-visible:ring-[#F8E804]"
              aria-label={`${language === 'fil' ? 'Panoorin ang Video' : 'Watch Video'}: ${videoTitle}`}
            >
              {/* Actual Intro Video Frame Thumbnail */}
              <img
                src={thumbnailUrl}
                alt={videoTitle}
                className="block w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Subtle hover transition only - no static dulling dark overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />

              {/* Centered Play Button Overlay */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F8E804] text-black flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.45),0_0_30px_rgba(248,232,4,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(248,232,4,0.6)] active:scale-95 transition-all duration-300 pointer-events-none"
                aria-hidden="true"
              >
                <Play size={24} className="fill-black ml-1 text-black" />
              </div>
            </a>

            {/* Right Column (~43% width): Video title, description, and Watch video button */}
            <div className="w-full md:w-[43%] flex flex-col justify-between py-1 min-w-0">
              <div>
                <h3 className="font-['Manrope'] font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug mb-3">
                  {videoTitle}
                </h3>

                <p className="font-['Poppins'] text-sm text-neutral-400 leading-relaxed mb-6">
                  {videoDescription}
                </p>
              </div>

              {/* Prominent Watch Video Button */}
              <div>
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-['Inter'] font-bold bg-[#F8E804] text-black hover:bg-[#faed36] hover:shadow-[0_0_25px_rgba(248,232,4,0.35)] transition-all cursor-pointer self-start shadow-md focus-visible:ring-2 focus-visible:ring-[#F8E804]"
                >
                  <Play size={16} className="fill-black" aria-hidden="true" />
                  <span>{language === 'fil' ? 'Panoorin ang Video' : 'Watch Video'}</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Additional Resources (Video tips and breakdown - displayed ONLY when verified resources exist) */}
        {tutorial.breakdowns && tutorial.breakdowns.length > 0 && (
          <section aria-label={language === 'fil' ? 'Mga Tip at Breakdown ng Video' : 'Video Tips and Breakdown'}>
            <h2 className="font-['Manrope'] font-bold text-base sm:text-lg text-white tracking-tight mb-4">
              {language === 'fil' ? 'Mga Tip at Breakdown ng Video' : 'Video Tips and Breakdown'}
            </h2>
            <div className="space-y-3">
              {tutorial.breakdowns.map((step) => (
                <div key={step.id} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#F8E804]">0{step.stepNumber}</span>
                    <span className="text-xs text-white font-['Poppins']">{step.title[language]}</span>
                  </div>
                  {step.duration && (
                    <span className="text-[10px] font-mono text-neutral-400">{step.duration}</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Tutorial Navigation (Previous and Next tutorial controls) */}
        <footer className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            {prevTutorial ? (
              <button
                type="button"
                onClick={() => onNavigateTutorial(prevTutorial.id)}
                className="w-full sm:w-auto inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-['Inter'] font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F8E804]"
              >
                <ChevronLeft size={16} aria-hidden="true" />
                <span>{language === 'fil' ? 'Previous' : 'Previous'}</span>
              </button>
            ) : <div />}
          </div>

          <div className="w-full sm:w-auto">
            {nextTutorial ? (
              <button
                type="button"
                onClick={() => onNavigateTutorial(nextTutorial.id)}
                className="w-full sm:w-auto inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-['Inter'] font-bold bg-[#F8E804] text-black hover:bg-[#faed36] hover:shadow-[0_0_20px_rgba(248,232,4,0.3)] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F8E804]"
              >
                <span>{language === 'fil' ? 'Next' : 'Next'}</span>
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            ) : <div />}
          </div>
        </footer>

      </div>
    </article>
  );
};
