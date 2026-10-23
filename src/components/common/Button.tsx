import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid-gold' | 'outline-gold' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'solid-gold',
  size = 'md',
  to,
  href,
  isLoading = false,
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs tracking-[0.16em]',
    md: 'px-6 py-3 text-xs md:text-sm tracking-[0.18em]',
    lg: 'px-8 py-3.5 text-sm md:text-base tracking-[0.2em]',
  };

  const variantClasses = {
    'solid-gold': 'bg-[#C9A96E] text-[#121214] font-medium hover:bg-[#D8BD85] active:bg-[#B39358] border border-[#C9A96E] shadow-sm',
    'outline-gold': 'bg-transparent text-[#F7F2E9] hover:text-[#121214] border border-[#C9A96E] hover:bg-[#C9A96E] active:bg-[#D8BD85] backdrop-blur-xs',
    'dark': 'bg-[#121214] text-[#F7F2E9] border border-stone-800 hover:border-[#C9A96E]/50 hover:bg-[#1C1C1E]',
    'ghost': 'bg-transparent text-[#C9A96E] hover:text-[#D8BD85] hover:bg-[#C9A96E]/10 border border-transparent',
  };

  const baseClasses = `inline-flex items-center justify-center font-sans uppercase transition-all duration-300 rounded-[3px] select-none text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Processing...</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-2">
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button disabled={disabled || isLoading} className={baseClasses} {...props}>
      {content}
    </button>
  );
};
