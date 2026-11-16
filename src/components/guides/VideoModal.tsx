import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Video } from 'lucide-react';
import type { TutorialItem, UserRole, VideoLanguage } from '../../data/guidesData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  tutorial: TutorialItem;
  role: UserRole;
  language: VideoLanguage;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  tutorial,
  role,
  language
}) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const activeVideoUrl = tutorial.videoUrl[language];
  const activeTitle = tutorial.videoTitle[language];

  // Manage body scroll and keyboard escape
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    setTimeout(() => closeBtnRef.current?.focus(), 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      {/* Background backdrop click */}
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl flex flex-col rounded-2xl sm:rounded-3xl bg-[#0D100F] border border-white/15 shadow-2xl overflow-hidden z-10">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-[#131715]/90">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <span className="px-2.5 py-0.5 rounded-full bg-[#F8E804]/10 border border-[#F8E804]/30 text-[#F8E804] text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase shrink-0">
              {role === 'driver' ? 'Driver' : role === 'passenger' ? 'Passenger' : 'Operator'}
            </span>
            <span className="text-neutral-500 shrink-0">•</span>
            <span className="text-xs sm:text-sm font-['Manrope'] font-bold text-white truncate" id="video-modal-title">
              {tutorial.number} — {activeTitle}
            </span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {/* Fallback button to open video directly in external browser tab */}
            {activeVideoUrl && (
              <a
                href={activeVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-['Inter'] font-medium text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                title="Open video in a new tab"
              >
                <span>{language === 'fil' ? 'Buksan sa bagong tab' : 'Open in new tab'}</span>
                <ExternalLink size={13} className="text-[#F8E804]" />
              </a>
            )}

            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#F8E804] cursor-pointer"
              aria-label={language === 'fil' ? 'Isara ang video player' : 'Close video player'}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Video Player Display Container */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          {activeVideoUrl ? (
            <iframe
              key={activeVideoUrl}
              src={activeVideoUrl}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              title={activeTitle}
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center text-neutral-400">
              <Video size={40} className="text-neutral-600 mb-2" />
              <p className="text-sm font-['Poppins']">
                {language === 'fil' ? 'Coming soon ang tutorial video na ito.' : 'This tutorial video is being prepared.'}
              </p>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-5 sm:px-6 py-3.5 bg-[#0F1211] border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 font-['Poppins']">
          <p className="truncate pr-4">
            {tutorial.videoDescription[language]}
          </p>
          {activeVideoUrl && (
            <a
              href={activeVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-1 text-[#F8E804] font-medium shrink-0"
            >
              <span>{language === 'fil' ? 'Bagong tab' : 'Open tab'}</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
