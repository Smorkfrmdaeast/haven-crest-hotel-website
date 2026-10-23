import React, { useState } from 'react';
import { Info, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export const DemoBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      role="region" 
      aria-label="Portfolio Demonstration Notice" 
      className="bg-[#121214] border-b border-[#C9A96E]/20 text-[#A39D93] text-[11px] sm:text-xs z-50 relative py-1.5 px-4 transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 overflow-hidden">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[2px] bg-[#C9A96E]/15 text-[#C9A96E] font-medium text-[10px] tracking-wider uppercase shrink-0">
            <Sparkles className="w-3 h-3" />
            Portfolio Demo
          </span>
          <p className="truncate sm:whitespace-normal font-sans tracking-wide leading-tight text-[#E8E0D2]">
            Concept website by SMORK'S TECH. Hotel information, room descriptions, prices, and availability are illustrative and not real booking offers.
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="sm:hidden text-[#C9A96E] hover:text-[#D8BD85] p-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A96E] shrink-0"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Collapse disclaimer' : 'Expand full disclaimer'}
        >
          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        <div className="hidden lg:flex items-center gap-3 shrink-0 text-[11px]">
          <span className="text-[#6B665E]">Pitch prototype for Enugu luxury hospitality</span>
          <span className="w-1 h-1 rounded-full bg-[#C9A96E]/40" />
          <span className="text-[#C9A96E] font-medium">Ready for Client Customization</span>
        </div>
      </div>

      {isExpanded && (
        <div className="sm:hidden pt-2 pb-1 border-t border-[#C9A96E]/15 mt-1 text-[#E8E0D2] text-[11px] leading-relaxed">
          Concept website by SMORK'S TECH. Hotel information, room descriptions, prices, and availability are illustrative and not real booking offers.
        </div>
      )}
    </div>
  );
};
