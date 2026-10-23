import React from 'react';
import { Link } from 'react-router-dom';

interface CrestLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'crest-only';
  lightText?: boolean;
}

export const CrestLogo: React.FC<CrestLogoProps> = ({
  className = '',
  variant = 'full',
  lightText = true,
}) => {
  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E] rounded-sm transition-opacity hover:opacity-95 ${className}`}
      aria-label="Haven Crest Hotel & Suites - Return to Home"
    >
      {/* SVG Crest Monogram */}
      <div className="relative w-9 h-11 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Outer Shield */}
          <path
            d="M20 2 L38 10 L38 28 C38 38 20 46 20 46 C20 46 2 38 2 28 L2 10 L20 2 Z"
            stroke="#C9A96E"
            strokeWidth="1.25"
            fill="#121214"
            className="transition-colors group-hover:stroke-[#D8BD85]"
          />
          {/* Inner Inset Hairline */}
          <path
            d="M20 6 L34 12 L34 26 C34 34 20 41 20 41 C20 41 6 34 6 26 L6 12 L20 6 Z"
            stroke="#C9A96E"
            strokeWidth="0.6"
            strokeOpacity="0.5"
            fill="#C9A96E"
            fillOpacity="0.08"
          />
          {/* Stylized HC Monogram */}
          <path
            d="M14 17 L14 31 M26 17 L26 31 M14 24 L26 24"
            stroke="#F7F2E9"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Crown / Star Dot */}
          <circle cx="20" cy="9" r="1.2" fill="#C9A96E" />
        </svg>
      </div>

      {variant !== 'crest-only' && (
        <div className="flex flex-col tracking-wide select-none">
          <span 
            className={`font-serif text-lg md:text-xl font-medium tracking-[0.22em] leading-tight ${
              lightText ? 'text-[#F7F2E9]' : 'text-[#1C1C1E]'
            }`}
          >
            HAVEN CREST
          </span>
          <span className="text-[9px] md:text-[10px] font-sans font-light tracking-[0.32em] text-[#C9A96E] uppercase">
            HOTEL &amp; SUITES • ENUGU
          </span>
        </div>
      )}
    </Link>
  );
};
