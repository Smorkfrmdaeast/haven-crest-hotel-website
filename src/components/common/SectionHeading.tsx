import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  serifItalicWord?: string;
  theme?: 'dark' | 'light';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  theme = 'dark',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  const titleColor = theme === 'dark' ? 'text-[#F7F2E9]' : 'text-[#1C1C1E]';
  const subtitleColor = theme === 'dark' ? 'text-[#A39D93]' : 'text-[#6B665E]';

  return (
    <div className={`flex flex-col ${alignClass} mb-10 md:mb-16 ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          {align === 'center' && (
            <span className="w-6 md:w-10 h-px bg-[#C9A96E]/40" aria-hidden="true" />
          )}
          <span className="text-[11px] md:text-xs font-sans tracking-[0.28em] uppercase text-[#C9A96E] font-medium">
            {eyebrow}
          </span>
          <span className="w-6 md:w-10 h-px bg-[#C9A96E]/40" aria-hidden="true" />
        </div>
      )}

      <h2 
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light tracking-tight leading-[1.15] ${titleColor}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 max-w-2xl font-sans text-sm md:text-base font-normal leading-relaxed ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
