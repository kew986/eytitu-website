import React from 'react';

interface SectionContainerProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  className = '',
  containerClassName = '',
  children
}) => {
  return (
    <section id={id} className={`w-full py-16 sm:py-24 relative overflow-hidden ${className}`}>
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};
