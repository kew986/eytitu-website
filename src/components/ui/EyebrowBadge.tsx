import React from 'react';

interface EyebrowBadgeProps {
  text: string;
  dotColor?: 'yellow' | 'none';
  className?: string;
  variant?: 'default' | 'card' | 'feature';
}

export const EyebrowBadge: React.FC<EyebrowBadgeProps> = ({
  text,
  dotColor = 'yellow',
  className = '',
  variant = 'default'
}) => {
  if (variant === 'feature') {
    return (
      <div className={`font-mono text-xs uppercase tracking-wider text-[#F8E804] font-medium ${className}`}>
        {text}
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border font-['Inter'] transition-colors ${
        variant === 'card'
          ? 'bg-[#1C201E]/80 border-white/10 text-white/90'
          : 'bg-[#151817] border-white/10 text-white/90 shadow-sm'
      } ${className}`}
    >
      {dotColor === 'yellow' && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#F8E804] animate-pulse" />
      )}
      <span className={dotColor === 'none' ? 'text-[#F8E804]' : 'text-neutral-200'}>
        {text}
      </span>
    </div>
  );
};
