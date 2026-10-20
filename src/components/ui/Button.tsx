import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  asAnchor = false,
  href,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-["Inter"] font-semibold rounded-full transition-all duration-200 cursor-pointer select-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-[#F8E804] text-black hover:bg-[#faed36] hover:shadow-[0_0_25px_rgba(248,232,4,0.35)] shadow-md',
    secondary:
      'bg-[#1F2321] text-white/95 border border-white/15 hover:bg-[#282E2B] hover:border-white/30 hover:text-white',
    ghost:
      'bg-transparent text-white/80 hover:text-white hover:bg-white/5',
    outline:
      'bg-transparent border border-[#F8E804]/40 text-[#F8E804] hover:bg-[#F8E804]/10 hover:border-[#F8E804]'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5'
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} className={combinedClass}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
