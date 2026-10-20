import React from 'react';

interface BrandLogoProps {
  variant?: 'navbar' | 'footer' | 'standalone';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'navbar',
  className = '',
  size = 'md'
}) => {
  const isFooter = variant === 'footer';

  const heights = {
    sm: 'h-6 sm:h-7',
    md: 'h-7 sm:h-8',
    lg: 'h-9 sm:h-10'
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={isFooter ? '/logo-82-yellow.png' : '/logo-82-white.png'}
        alt="82 Logo"
        className={`${heights[size]} w-auto object-contain transition-transform duration-200 hover:scale-105`}
      />
    </div>
  );
};
